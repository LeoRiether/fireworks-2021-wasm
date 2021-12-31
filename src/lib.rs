mod utils;
use utils::{HSL, random_color};

mod components;
use components::{Body, Shape, Behaviour};

use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, console};
use js_sys::{Math};
use std::collections::{BTreeSet, BTreeMap};


#[wasm_bindgen]
pub struct World {
    width: f64, 
    height: f64,
    ctx: CanvasRenderingContext2d,

    next_entity: u32,
    entity_index: BTreeMap<u32, usize>,
    entity_id: Vec<u32>,
    bodies: Vec<Body>,
    shapes: Vec<Shape>,
    behaviours: Vec<Behaviour>,
    fuses: BTreeSet<(u64, u32)>, // (timestamp, entity id)
}

#[wasm_bindgen]
impl World {
    pub fn new(width: f64, height: f64) -> Self {
        Self {
            width,
            height,
            ctx: utils::get_context("world"),
            next_entity: 0,
            entity_index: BTreeMap::new(),
            entity_id: Vec::new(),
            bodies: Vec::new(),
            shapes: Vec::new(),
            behaviours: Vec::new(),
            fuses: BTreeSet::new(),
        }
    }

    pub fn resize(&mut self, width: f64, height: f64) {
        self.width = width;
        self.height = height;
    }

    fn push(
        &mut self,
        body: Body,
        shape: Shape,
        behaviour: Behaviour,
        fuse: Option<u64>
    ) -> u32 {
        // insert components
        self.bodies.push(body);
        self.shapes.push(shape);
        self.behaviours.push(behaviour);

        // insert id -> index in the entity_index map
        let index = self.bodies.len() - 1;
        let id = self.next_entity;
        self.next_entity = self.next_entity.wrapping_add(1);
        self.entity_index.insert(id, index);
        self.entity_id.push(id);

        if let Some(t) = fuse {
            self.fuses.insert((t, id));
        }

        id
    }

    fn push_random(&mut self, time: u64) {
        use Behaviour::*;
        let bhv = (*utils::choose_from(&[
            Chris, MultiColorChris, Crosette, Pistil, Strobe,
            Comet((Math::random() * 45. + 20.).floor() as i32),
        ])).clone();
        let fuse = match bhv {
            Comet(_) => 0u64, // just emit a particle as soon as possible, then `handle_fuse_event` will get the timing right
            _ => (1_000_000. * (1. + Math::random())).floor() as u64, // 1-2s fuse
        };
        self.push(
            Body {
                x: Math::random() * self.width,
                y: self.height + 10.,
                vx: (Math::random() * 2. - 1.) * self.width / 10.,
                vy: -Math::random() * 440. - 440.,
                m: 1.,
            },
            Shape {
                r: match bhv {
                    Crosette => Math::random() * 2. + 1.,
                    Comet(_) => Math::random() * 4. + 1.,
                    _ => Math::random() + 1.,
                },
                color: JsValue::from_str(&utils::random_color().to_string()),
            },
            bhv,
            Some(time + fuse),
        );
    }

    fn remove_id(&mut self, id: u32) {
        // Remove entity_index entry
        let i = self.entity_index.remove(&id).unwrap_or(0);

        if self.entity_id.len() >= 2 {
            // Fix the last index `entity_index` entry (will be swapped with `i` after `swap_remove`)
            let last_id = self.entity_id.last().unwrap();
            self.entity_index.insert(*last_id, i);
        }

        self.bodies.swap_remove(i);
        self.shapes.swap_remove(i);
        self.behaviours.swap_remove(i);
        self.entity_id.swap_remove(i);
    }

    /// What should a particle do when it receives a fuse event?
    /// Returns the new behavior of the particle, or None if it should be deleted
    pub fn handle_fuse_event(&mut self, time: u64, id: u32) {
        let i = self.entity_index.get(&id).copied().unwrap_or(0);

        use Behaviour::*;
        let old_behaviour = std::mem::replace(&mut self.behaviours[i], Particle);
        let new_behaviour = match old_behaviour {
            Particle | Glitter(_) => None, // particle's fuse just kills it

            Chris => { // Chris explodes
                let n = (Math::random() * 150. + 150.) as i32;
                for _ in 0..n {
                    let fuse = time + (1000000. * (Math::random() + 0.5)) as u64;
                    self.push(
                        self.bodies[i].plus_explosion(n, Math::random() * 300. + 400.),
                        self.shapes[i].clone(),
                        Behaviour::Particle,
                        Some(fuse),
                    );
                }
                None
            }

            MultiColorChris => {
                let n = (Math::random() * 150. + 150.) as i32;
                let other_shape = Shape {
                    r: self.shapes[i].r,
                    color: JsValue::from_str(&utils::random_color().to_string()),
                };
                for _ in 0..n {
                    let fuse = time + (1000000. * (Math::random() + 0.5)) as u64;
                    self.push(
                        self.bodies[i].plus_explosion(n, Math::random() * 300. + 400.),
                        (*utils::choose_from(&[&self.shapes[i], &other_shape])).clone(),
                        Behaviour::Particle,
                        Some(fuse),
                    );
                }
                None
            }

            Strobe => {
                let n = (Math::random() * 150. + 150.) as i32;
                for _ in 0..n {
                    let fuse = time + (1000000. * (Math::random() + 0.5)) as u64;
                    let phi = 2.0 * std::f64::consts::PI * (Math::random() * 17. + 3.);
                    self.push(
                        self.bodies[i].plus_explosion(n, Math::random() * 300. + 400.),
                        self.shapes[i].clone(),
                        Behaviour::Glitter(phi),
                        Some(fuse),
                    );
                }
                None
            }

            Crosette => {
                let n = (Math::random() * 20. + 3.) as i32;
                for _ in 0..n {
                    let fuse = time + (1000000. * (Math::random() * 0.5 + 0.5)) as u64;
                    self.push(
                        self.bodies[i].plus_explosion(n, Math::random() * 150. + 250.),
                        self.shapes[i].clone(),
                        Behaviour::CrosetteBranch,
                        Some(fuse),
                    );
                }
                None
            }

            CrosetteBranch => {
                let n = (Math::random() * 10. + 3.) as i32;
                for _ in 0..n {
                    let fuse = time + (1000000. * (Math::random() + 0.5)) as u64;
                    self.push(
                        self.bodies[i].plus_directed_explosion(n, Math::random() * 150. + 200.),
                        self.shapes[i].clone(),
                        Behaviour::Particle,
                        Some(fuse),
                    );
                }
                None
            }

            Pistil => {
                let n = (Math::random() * 150. + 150.) as i32; // outer explosion
                let m = (Math::random() * 150. + 150.) as i32; // inner explosion
                let outer_shape = Shape {
                    r: self.shapes[i].r * 0.5,
                    color: self.shapes[i].color.clone(),
                };
                for _ in 0..n {
                    let fuse = time + (1000000. * (Math::random() + 0.5)) as u64;
                    self.push(
                        self.bodies[i].plus_explosion(n, Math::random() * 300. + 500.),
                        outer_shape.clone(),
                        Behaviour::Particle,
                        Some(fuse),
                    );
                }
                let inner_shape = Shape {
                    r: self.shapes[i].r + Math::random() * 0.5,
                    color: JsValue::from_str(&utils::random_color().to_string()),
                };
                for _ in 0..m {
                    let fuse = time + (1000000. * (Math::random() + 0.5)) as u64;
                    self.push(
                        self.bodies[i].plus_explosion(n, Math::random() * 150. + 150.),
                        inner_shape.clone(),
                        Behaviour::Particle,
                        Some(fuse),
                    );
                }
                None
            }

            Comet(rem) => {
                let fuse = time + (500_000. * Math::random() + 500_000.).floor() as u64; // .5-1s fuse
                let shape = Shape {
                    r: Math::random() + 0.5,
                    color: self.shapes[i].color.clone(),
                };
                self.push(
                    self.bodies[i].plus_explosion(1, Math::random() * 150. + 100.),
                    shape.clone(),
                    Behaviour::Particle,
                    Some(fuse),
                );

                // kills the commet iff there are no more particles to emit
                if rem-1 > 0 {
                    let fuse = time + (20_000. * Math::random() + 20_000.).floor() as u64; // 30-130ms fuse
                    self.fuses.insert((fuse, id));
                    Some(Comet(rem-1))
                } else {
                    None
                }
            }
        };

        match new_behaviour {
            Some(b) => { self.behaviours[i] = b; }
            None => { self.remove_id(id); }
        }
    }

    fn update_fuses(&mut self, time: u64) {
        let mut fused = self.fuses.split_off(&(time+1, 0));
        std::mem::swap(&mut fused, &mut self.fuses);

        if fused.is_empty() {
            return;
        }

        // process all fuse events
        for (_time, id) in fused {
            self.handle_fuse_event(time, id);
        }
    }

    fn update(&mut self, time: u64, dt: f64) {
        if Math::random() < 0.05 {
            self.push_random(time);
        }

        self.update_fuses(time);

        for (body, behaviour) in self.bodies.iter_mut()
                                    .zip(self.behaviours.iter()) {
            body.update(behaviour, dt);
        }
    }

    fn draw(&self) {
        self.ctx.set_fill_style(&JsValue::from_str("rgb(0, 0, 0, 0.2)"));
        self.ctx.fill_rect(0., 0., self.width, self.height);

        for (body, shape) in self.bodies.iter()
                                .zip(self.shapes.iter()) {
            shape.draw(&self.ctx, body.x, body.y);
        }
    }
    
    // "loop" is a keyword
    // beware: time is in milliseconds, dt is in seconds
    pub fn loopity_loop(&mut self, time: f64, dt: f64) {
        let time = (time * 1000.).floor() as u64; // and now time is in microsseconds
        self.update(time, dt);
        self.draw();
    }
}
