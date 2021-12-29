pub mod utils;
pub use utils::{HSL, random_color};

pub mod particle;

use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, console};
use js_sys::{Math};
use std::collections::{BTreeSet, BTreeMap};

/// Gravity acceleration thingy
const G: f64 = 500.0;

struct Body {
    x: f64,
    y: f64,
    vx: f64,
    vy: f64,
    m: f64,
}

impl Body {
    // TODO: is the acceleration constant, or does the firework accelerate up a bit?
    #[inline]
    pub fn update(&mut self, dt: f64) {
        self.x += self.vx * dt;

        let a = G / self.m;
        self.y += self.vy * dt + 0.5 * a * dt * dt;
        self.vy += a * dt;
    }
}

struct Shape {
    r: f64,
    color: JsValue,
}

impl Shape {
    #[inline]
    pub fn draw(&self, ctx: &CanvasRenderingContext2d, x: f64, y: f64) {
        ctx.begin_path();
        ctx.set_fill_style(&self.color);
        ctx.arc(x, y, self.r, 0.0, std::f64::consts::PI * 2.0).unwrap();
        ctx.fill();
    }
}

enum Behaviour {
    Particle, // just a body
    // Glitter(f64), // a body that fades in and out
    Chris, // Chrysanthemus
    // Willow,
    // Commet,
    // Crosette,
    // Pistil,
    // Peony,
    // Strobe,
}

#[wasm_bindgen]
pub struct World {
    width: f64, 
    height: f64,
    ctx: CanvasRenderingContext2d,

    next_entity: u32,
    entity_index: BTreeMap<u32, usize>,
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

        if let Some(t) = fuse {
            self.fuses.insert((t, id));
        }

        id
    }

    fn push_random(&mut self, time: u64) {
        let fuse = (100000. * (1. + Math::random())).floor() as u64; // 1-2s fuse
        self.push(
            Body {
                x: Math::random() * self.width,
                y: self.height + 10.,
                vx: (Math::random() * 2. - 1.) * self.width / 10.,
                vy: -Math::random() * 440. - 440.,
                m: 1.,
            },
            Shape {
                r: Math::random() + 1.,
                color: JsValue::from_str(&utils::random_color().to_string()),
            },
            Behaviour::Chris,
            Some(fuse),
        );
    }

    fn handle_fuses(&mut self, time: u64) {
        let mut fused = self.fuses.split_off(&(time+1, 0));
        std::mem::swap(&mut fused, &mut self.fuses);

        if fused.is_empty() {
            return;
        }

        // process all fuse events
        for (_time, id) in fused {
            let i = self.entity_index.get(&id).copied().unwrap_or(0);

            use Behaviour::*;
            match self.behaviours[i] {
                Particle => {}
                Chris => {
                }
            }
        }
    }

    fn update(&mut self, time: u64, dt: f64) {
        if Math::random() < 0.03 {
            self.push_random(time);
        }

        for body in &mut self.bodies {
            body.update(dt);
        }

        self.handle_fuses(time);

        // TODO: do this with fuses, of course
        if self.bodies.len() > 1000 {
            self.bodies.clear();
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
