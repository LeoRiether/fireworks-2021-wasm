use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use js_sys::Math;

pub fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

// https://stackoverflow.com/a/56553031
pub fn get_context(canvas_id: &str) -> web_sys::CanvasRenderingContext2d {
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document.get_element_by_id(canvas_id).unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .map_err(|_| ())
        .unwrap();

    let context = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<web_sys::CanvasRenderingContext2d>()
        .unwrap();

    context
}

#[derive(Debug, Clone, Copy)]
pub struct HSL(pub f64, pub f64, pub f64);

use std::fmt;
impl fmt::Display for HSL {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "hsl({:.2},{}%,{}%)", self.0, self.1, self.2)
    }
}

pub fn random_color() -> HSL {
    HSL(Math::random() * 360., 85., 75.)
}

pub fn choose_from<T>(a: &[T]) -> &T {
    let i = (Math::random() * a.len() as f64).floor() as usize;
    &a[i]
}
