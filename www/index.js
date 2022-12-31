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

// Thanks, StackOverflow
// and past me (https://github.com/LeoRiether/Fireworks2019.5JS/blob/master/countdown.js)
let offset = 0;

const worldTimeAPI = {
    url: "https://worldtimeapi.org/api/timezone/Etc/UTC",
    timeParam: "utc_datetime",
};

const worldClockAPI = {
    url: "http://worldclockapi.com/api/json/utc/now",
    timeParam: "currentDateTime",
};

const anotherWorldTimeAPI = {
    url: "https://myworldtimeapi.herokuapp.com/Antarctica/Troll",
    timeParam: "utc_datetime",
};

const getOffsetWith = API => new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", API.url);
    xhr.responseType = 'json';

    xhr.onload = () => {
        let server = new Date(xhr.response[API.timeParam]);
        res(server - new Date());
    };

    xhr.onerror = rej;

    xhr.send();
});

const getOffset = () =>
    getOffsetWith(anotherWorldTimeAPI)
        .catch(() => {
            console.log("myworldtimeapi query failed! Trying worldclocktime instead");
            return getOffsetWith(worldTimeAPI);
        })
        .catch(() => {
            console.log("worldtimeapi query failed! Trying worldclockapi instead");
            return getOffsetWith(worldClockAPI);
        });

export function init_clock() {
    getOffset()
        .then(o => offset = o) // wtf don't set a global variable in async code like this
        .then(() => console.log('offset found: ', offset))
        .catch(() => console.log('getOffset() failed'));
}

init_clock();

export function date() {
    let d = new Date();
    d.setTime(d.getTime() + offset);
    return d;
}

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

	// measure(() => world.loopity_loop(now, dt));
	world.loopity_loop(now, dt);

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

////////////////////////////////////////////////////////////////////

const targetDate = new Date(2023, 0, 1, 0, 0, 0, 0); // why the fuck are months 0-indexed?
let lastSTo = -1000;
function update_countdown() {
	let msTo = targetDate - date();
	let sTo = ~~(msTo / 1000);
	if (focused)
		world.update_countdown(performance.now(), sTo);
	
	if (lastSTo != 0) {
		setTimeout(update_countdown, 250);
	}
	lastSTo = sTo;
}

setTimeout(update_countdown, 250);

////////////////////////////////////////////////////////////////////

window.addEventListener('mousedown', e => {
	world.push_lerper(performance.now(), e.clientX, e.clientY, true);
});

////////////////////////////////////////////////////////////////////

if (location.hostname == 'localhost') {
	let ui = document.createElement('canvas');
	ui.id = 'ui';
	ui.style = 'position: fixed; top: 0; left: 0; z-index: 10;';
	[ui.width, ui.height] = window_dimensions();
	document.body.appendChild(ui);
	let ctx = ui.getContext('2d');

	let down = false;
	window.addEventListener('keyup', e => {
		if (e.key == ' ') down = !down;
	});

	const dist = ([x0, y0], [x1, y1]) => Math.hypot(x0 - x1, y0 - y1);

	let points = [];

	window.addEventListener('mousemove', e => {
		if (!down) return;
		let point = [e.clientX, e.clientY];
		if (points.length == 0 || dist(points[points.length-1], point) > 5) {
			points.push(point);
			ctx.fillStyle = 'white';
			ctx.beginPath();
			ctx.arc(point[0], point[1], 2, 0, Math.PI * 2.0);
			ctx.fill();
		}
	});

	window['points'] = () => {
		let min = points[0];
		let maxy = points[0][1];
		for (let [x, y] of points) {
			min = [Math.min(x, min[0]), Math.min(y, min[1])];
			maxy = Math.max(maxy, y);
		}
		let height = maxy - min[1];
		let n = points.map(([x, y]) => [(x - min[0]) / height, (y - min[1]) / height]);
		const fmt = x => x.toFixed(5);
		return `&[${n.map(([x, y]) => `(${fmt(x)}, ${fmt(y)})`).join(',')}],`;
	};
}
