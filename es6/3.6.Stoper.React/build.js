"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.reset();
		_this.state = {
			running: false,
			display: '.stopwatch',
			currentTime: _this.format(_this.times),
			timeList: []
		};
		return _this;
	}

	_createClass(App, [{
		key: "onClickHandle",
		value: function onClickHandle(event) {
			this.start();
		}
	}, {
		key: "onStopHandle",
		value: function onStopHandle(event) {
			this.stop();
		}
	}, {
		key: "onResetHandle",
		value: function onResetHandle(event) {
			this.stop();
			this.reset();
			this.setState({ currentTime: this.format(this.times) });
		}
	}, {
		key: "onAddListHandle",
		value: function onAddListHandle(event) {
			this.stop();
			this.setState({ timeList: this.state.timeList.concat(this.state.currentTime) });
		}
	}, {
		key: "onResetListHandle",
		value: function onResetListHandle(event) {
			this.stop();
			this.setState({ timeList: [] });
		}
	}, {
		key: "start",
		value: function start() {
			var _this2 = this;

			if (!this.state.running) {
				this.state.running = true;
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
		}
	}, {
		key: "stop",
		value: function stop() {
			this.setState({ running: false });
			clearInterval(this.watch);
		}
	}, {
		key: "step",
		value: function step() {
			if (!this.state.running) return;
			this.calculate();
			this.setState({ currentTime: this.format(this.times) });
		}
	}, {
		key: "calculate",
		value: function calculate() {
			this.times.miliseconds += 1;
			if (this.times.miliseconds >= 100) {
				this.times.seconds += 1;
				this.times.miliseconds = 0;
			}
			if (this.times.seconds >= 60) {
				this.times.minutes += 1;
				this.times.seconds = 0;
			}
		}
	}, {
		key: "format",
		value: function format(times) {
			return pad0(this.times.minutes) + ":" + pad0(this.times.seconds) + ":" + pad0(Math.floor(this.times.miliseconds));
		}
	}, {
		key: "reset",
		value: function reset() {
			this.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"nav",
					{ className: "controls" },
					React.createElement(
						"a",
						{ href: "#", className: "button", id: "start", onClick: function onClick(event) {
								return _this3.onClickHandle(event);
							} },
						"Start"
					),
					React.createElement(
						"a",
						{ href: "#", className: "button", id: "stop", onClick: function onClick(event) {
								return _this3.onStopHandle(event);
							} },
						"Stop"
					),
					React.createElement(
						"a",
						{ href: "#", className: "button", id: "reset", onClick: function onClick(event) {
								return _this3.onResetHandle(event);
							} },
						"Reset"
					)
				),
				React.createElement(
					"div",
					{ className: "stopwatch" },
					this.state.currentTime
				),
				React.createElement(
					"nav",
					{ className: "controls-list" },
					React.createElement(
						"a",
						{ href: "#", className: "button button-add", id: "add", onClick: function onClick(event) {
								return _this3.onAddListHandle(event);
							} },
						"Zapisz czas"
					),
					React.createElement(
						"a",
						{ href: "#", className: "button button-add", id: "resetList", onClick: function onClick(event) {
								return _this3.onResetListHandle(event);
							} },
						"Wyczy\u015B\u0107 list\u0119"
					)
				),
				React.createElement(Timelist, { timeList: this.state.timeList })
			);
		}
	}]);

	return App;
}(React.Component);

var Timelist = function (_React$Component2) {
	_inherits(Timelist, _React$Component2);

	function Timelist() {
		_classCallCheck(this, Timelist);

		return _possibleConstructorReturn(this, (Timelist.__proto__ || Object.getPrototypeOf(Timelist)).apply(this, arguments));
	}

	_createClass(Timelist, [{
		key: "render",
		value: function render() {
			var rows = this.props.timeList.map(function (time, key) {
				return React.createElement(
					"li",
					null,
					key,
					": ",
					time
				);
			});
			return React.createElement(
				"ul",
				{ className: "results" },
				rows
			);
		}
	}]);

	return Timelist;
}(React.Component);

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
