class App extends React.Component {
	constructor() {
		super();
		this.reset();
		this.state = {
			running: false,
			display: '.stopwatch',
			currentTime: this.format(this.times),
			timeList: []
		};
	}

	onClickHandle(event) {
		this.start();
	}

	onStopHandle(event) {
		this.stop();
	}

	onResetHandle(event) {
		this.stop();
		this.reset();
		this.setState({currentTime : this.format(this.times)});
	}

	onAddListHandle(event) {
		this.stop();
		this.setState({timeList: this.state.timeList.concat(this.state.currentTime)});
	}

	onResetListHandle(event) {
		this.stop();
		this.setState({timeList: []});
	}

	start() {
		if (!this.state.running) {
			this.state.running = true;
			this.watch = setInterval(() => this.step(), 10);
		} 
	}

	stop() {
		this.setState({running: false});
		clearInterval(this.watch);
	}

	step() {
		if (!this.state.running) return;
		this.calculate();
		this.setState({currentTime: this.format(this.times)});
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

	format(times) {
		return `${pad0(this.times.minutes)}:${pad0(this.times.seconds)}:${pad0(Math.floor(this.times.miliseconds))}`;
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}
	render() {
		return (
			<div>
				<nav className="controls">
						<a href="#" className="button" id="start" onClick={event => this.onClickHandle(event)}>Start</a>
						<a href="#" className="button" id="stop" onClick={event => this.onStopHandle(event)}>Stop</a>
						<a href="#" className="button" id="reset" onClick={event => this.onResetHandle(event)}>Reset</a>
				</nav>
				<div className="stopwatch">{this.state.currentTime}</div>
				<nav className="controls-list">
						<a href="#" className="button button-add" id="add" onClick={event => this.onAddListHandle(event)}>Zapisz czas</a>
						<a href="#" className="button button-add" id="resetList" onClick={event => this.onResetListHandle(event)}>Wyczyść listę</a>
				</nav>
				<Timelist timeList = {this.state.timeList}/>				
			</div>
		);
	}
}


class Timelist extends React.Component {
	render() {
		var rows = this.props.timeList.map((time, key) =>
				<li>{key}: {time}</li>
			);
		return (
			<ul className="results">{rows}</ul>
		);
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);