var Counter = React.createClass({
	getDefaultProps: function() {
		console.log('Pobieranie ustawionych własności');
	},
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	componentWillMount() {
		console.log('componentWillMount - tuż przed render');
	},
	componentDidMount() {
		console.log('componentDidMount - zaraz po render, operacje manipulacji np. jQuery');
	},
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps - aktualizacja stanu na podstawie nadchodzących właściwości');
	},
	shouldComponentUpdate(){
		console.log('shouldComponentUpdate - optymalizacja komponentu');
		return true;
	},
	componentWillUpdate(){
		console.log('componentWillUpdate - gdy shouldComponentUpdate zwróci true');
	},
	componentDidUpdate(){
		console.log('componentDidUpdate - manipulacje na drzewie DOM');
	},
	componentWillUnmount(){
		console.log('componentWillUnmount - odpinanie timerów');
	},
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter -1
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

