class Timelist{
	constructor(display) {
		this.display = display;
	}

	addTimeToList(time) {
		console.log(this.display);
		this.display.innerHTML += '<li>' + time + '</li>'; 
	}

	resetList() {
		this.display.innerHTML = '';
	}
}

class Stopwatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	resetCounter() {
		this.stop();
		this.reset();
		this.print(this.times);
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	stop() {
		this.running = false;
		clearInterval(this.watch);
	}

	start() {
		if (!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	addTimeToList() {
		this.stop();
		timeslist.addTimeToList(this.format(this.times));
	}

	resetList() {
		this.stop();
		timeslist.resetList();
	}

	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
		this.times.miliseconds += 1;
		if(this.times.miliseconds >= 100) {
			this.times.seconds += 1;
			this.times.miliseconds = 0;
		}
		if(this.times.seconds >= 60) {
			this.times.minutes += 1;
			this.times.seconds = 0;
		}
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

const stopwatch = new Stopwatch(
	document.querySelector('.stopwatch')
);

const timeslist = new Timelist(
	document.querySelector('.results')
);

function init(){
     document.getElementById("start").addEventListener("click", function(){
         stopwatch.start();
     },false);
     document.getElementById("stop").addEventListener("click", function(){
         stopwatch.stop();
     },false);
     document.getElementById("reset").addEventListener("click", function(){
         stopwatch.resetCounter();
     },false);
     document.getElementById("add").addEventListener("click", function(){
         stopwatch.addTimeToList();
     },false);
     document.getElementById("resetList").addEventListener("click", function(){
         stopwatch.resetList();
     },false);
}

window.onload=init;