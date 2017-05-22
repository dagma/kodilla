var Counter3 = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {className: 'box'},
			React.createElement('span', {}, 'Licznik: ' + this.state.counter),
			React.createElement('button', {type: 'submit', onClick: this.increment}, 'Dodaj'),
			React.createElement('button', {type: 'submit', onClick: this.decrement}, 'Odejmij'),
		);
	}
});