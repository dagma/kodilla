

var app = React.createElement('div', {className: 'app'},
				React.createElement(Counter),
				React.createElement(Counter2),
				React.createElement(Counter3),
			);
ReactDOM.render(app, document.getElementById('app'));