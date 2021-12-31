use wasm_bindgen::JsValue;
use web_sys::CanvasRenderingContext2d;
use js_sys::Math;

/// Gravity acceleration thingy
const G: f64 = 500.0;

#[derive(Clone)]
pub struct Body {
    pub x: f64,
    pub y: f64,
    pub vx: f64,
    pub vy: f64,
    pub m: f64,
    pub r: f64,
    pub color: JsValue,
}

impl Body {
    // TODO: is the acceleration constant, or does the firework accelerate up a bit?
    #[inline]
    pub fn update(&mut self, behaviour: &Behaviour, dt: f64, time: u64) {
        self.x += self.vx * dt;

        let a = G * self.m; // I know this is not how it works, just pretend it does because of air resistence or something
        self.y += self.vy * dt + 0.5 * a * dt * dt;
        self.vy += a * dt;

        use Behaviour::*;
        match behaviour {
            Particle | Glitter(_) | HueParticle(_, _) => {
                self.vx *= 0.95;
                self.vy *= 0.95;
            }
            _ => {}
        }

        match behaviour {
            Glitter(phi) => {
                self.r = (time as f64 / 1_000_000. * phi).sin().max(0.) * 1.2;
            }

            HueParticle(hue, freq) => {
                let x = hue + time as f64 / 1_000_000. * 360. * freq;
                self.color = JsValue::from_str(&format!("hsl({:.2},85%,75%)", x));
            }

            _ => {}
        }
    }

    #[inline]
    pub fn draw(&self, ctx: &CanvasRenderingContext2d) {
        ctx.begin_path();
        ctx.set_fill_style(&self.color);
        ctx.arc(self.x, self.y, self.r, 0.0, std::f64::consts::PI * 2.0).unwrap();
        ctx.fill();
    }

    #[inline]
    pub fn plus_explosion(&self, divisions: i32, force_base: f64) -> Body {
        let theta = Math::random() * std::f64::consts::PI * 2.;
        let u = Math::random(); // uniform random. we'll modify the distribution in `r`
        let r = (u - 1.) * (u - 1.) * (u - 1.) + 1.; // dude this distribution is FUCKING AMAZING
                                                     // I LOVE IT
                                                     // the fireworks become so much ROUNDER AND STUFF
                                                     // BEAUTIFUL
        let force = r * force_base;
        Body { 
            vx: theta.cos() * force + self.vx * 0.2,
            vy: theta.sin() * force + self.vy * 0.2,
            m: self.m / divisions as f64,
            color: self.color.clone(),
            ..*self
        }
    }

    #[inline]
    pub fn plus_directed_explosion(&self, divisions: i32, force_base: f64) -> Body {
        let theta = (Math::random() - 0.5) * std::f64::consts::PI * 0.5;
        let theta = theta + Math::atan2(self.vy, self.vx);
        let force = Math::random() * force_base;
        Body { 
            vx: Math::cos(theta) * force + self.vx * 0.3,
            vy: Math::sin(theta) * force + self.vy * 0.3,
            m: self.m / divisions as f64,
            color: self.color.clone(),
            ..*self
        }
    }

    #[inline]
    pub fn plus_willow_explosion(&self, force_base: f64) -> Body {
        let theta = Math::random() * std::f64::consts::PI * 2.;
        let force = Math::random() * force_base;
        Body { 
            vx: theta.cos() * force * 0.35 + self.vx * 0.2,
            vy: (theta.sin() - 1.) * 0.2 * force + self.vy * 0.2,
            m: self.m * 0.7,
            color: self.color.clone(),
            ..*self
        }
    }

    #[inline]
    pub fn with_color(&self, color: JsValue) -> Body {
        Body { color, ..*self }
    }
}

#[derive(Clone)]
pub enum Behaviour {
    Particle, // just a body
    HueParticle(f64, f64), // changes hue with time (initial_hue, frequency)
    Glitter(f64), // a body that fades in and out
    MassiveParticle, // particle with mass? doesn't have self.velocity *= 0.95 every frame
    Chris, // Chrysanthemus
    MultiColorChris,
    Willow,
    Comet(i32), // i32 represents how many particles the commet will emit during it's lifespan
    Crosette,
    CrosetteBranch,
    Pistil,
    Peony,
    Strobe,
}

