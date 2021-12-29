import * as wasm from "fireworks-2021-wasm";

const fps = 45;
const mspf = 1000 / fps;

// these are never right, for some reason
const window_dimensions = () => [
	document.documentElement.clientWidth || window.innerWidth,
	document.documentElement.clientHeight || window.innerHeight,
];

let world = wasm.World.new(...window_dimensions());

const canvas = document.getElementById('world');
[canvas.width, canvas.height] = window_dimensions();

window.addEventListener('resize', () => {
	world.resize(...window_dimensions());
	[canvas.width, canvas.height] = window_dimensions();
});

window['world'] = world;

////////////////////////////////////////////////////////////////////

let focused = true;
let lastTime = performance.now();
const loop = () => {
	const now = performance.now();
	const dt = (now - lastTime) / 1000;

	world.loopity_loop(now, dt);

	lastTime = performance.now();
	if (focused)
		setTimeout(loop, mspf);
};

window.addEventListener('focus', () => {
	focused = true;
	lastTime = performance.now();
	setTimeout(loop, mspf);
});
window.addEventListener('blur', () => {
	focused = false;
});

loop();

