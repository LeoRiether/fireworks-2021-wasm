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

let calls = 0;
let time = 0;
let history = [];
function measure(fn) {
	const before = performance.now();
	fn();
	const after = performance.now();
	calls++;
	time += after - before;

	if (calls == 360) {
		history.push(time / calls);
		calls = 0;
		time = 0;
	}
}

window['measureHistory'] = history;

////////////////////////////////////////////////////////////////////

let focused = true;
let lastTime = performance.now();
const loop = () => {
	if (focused)
		setTimeout(loop, mspf);
	const now = performance.now();
	const dt = (now - lastTime) / 1000;

	measure(() => world.loopity_loop(now, dt));
	// world.loopity_loop(now, dt);

	lastTime = performance.now();
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

