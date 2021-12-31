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
}

impl Body {
    // TODO: is the acceleration constant, or does the firework accelerate up a bit?
    #[inline]
    pub fn update(&mut self, behaviour: &Behaviour, dt: f64) {
        self.x += self.vx * dt;

        let a = G * self.m; // I know this is not how it works, just pretend it does because of air resistence or something
        self.y += self.vy * dt + 0.5 * a * dt * dt;
        self.vy += a * dt;

        use Behaviour::*;
        match behaviour {
            Particle => {
                self.vx *= 0.95;
                self.vy *= 0.95;
            }

            _ => {}
        }
    }

    #[inline]
    pub fn plus_explosion(&self, divisions: i32, force_base: f64) -> Body {
        let theta = Math::random() * std::f64::consts::PI * 2.;
        let force = Math::random() * force_base;
        Body { 
            vx: Math::cos(theta) * force + self.vx * 0.2,
            vy: Math::sin(theta) * force + self.vy * 0.2,
            m: self.m / divisions as f64,
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
            ..*self
        }
    }
}

#[derive(Clone)]
pub struct Shape {
    pub r: f64,
    pub color: JsValue,
}

impl Shape {
    #[inline]
    pub fn draw(&self, ctx: &CanvasRenderingContext2d, x: f64, y: f64) {
        ctx.begin_path();
        ctx.set_fill_style(&self.color);
        ctx.arc(x, y, r, 0.0, std::f64::consts::PI * 2.0).unwrap();
        ctx.fill();
    }
}

#[derive(Clone)]
pub enum Behaviour {
    Particle, // just a body
    Glitter(f64), // a body that fades in and out
    Chris, // Chrysanthemus
    MultiColorChris,
    // Willow,
    /// i32 represents how many particles the commet will emit during it's lifespan
    Comet(i32),
    Crosette,
    CrosetteBranch,
    Pistil,
    // Peony,
    Strobe,
}


