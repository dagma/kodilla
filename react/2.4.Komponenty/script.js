var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'harry_potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'krol_lew.jpg'
	},
	{
		id: 3,
		title: 'Tupcio Chrupcio',
		desc: 'Film o myszce',
		img: 'tupcio_chrupcio.jpg'
	},
	{
		id: 4,
		title: 'Rogalik i Pędzipiętek',
		desc: 'Opowieść o przyjaźni',
		img: 'rogalik_pedzipietek.jpg'
	},
	{
		id: 5,
		title: 'Bob budowniczy',
		desc: 'Bajka o maszynach budowlanych',
		img: 'bob_budowniczy.jpg'
	}
];

var Header = React.createClass({
	render: function() {
		return React.createElement('h1', {}, 'Lista filmów');
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc);
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title} ),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement('img', { src: this.props.movie.img })
		);
	}
});

var MovieList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},
	render: function(){
		var movies = this.props.items.map(function(movie){
			 return React.createElement(Movie, {movie: movie, key: movie.id});
		});
		return React.createElement('ul', {}, movies);
	}
});

var App = React.createClass({ 
	render: function() {
		return ( 
			React.createElement('div', {}, 
				React.createElement(Header), 
				React.createElement(MovieList, {items: movies}) ) 
		); 
	} 
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));