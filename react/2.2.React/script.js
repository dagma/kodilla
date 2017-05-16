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
		desc: 'Bajka maszynach budowlanych',
		img: 'bob_budowniczy.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', { key: movie.id },
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', { src: movie.img })
	);
});

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));