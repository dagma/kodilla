var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'images/harry_potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'images/krol_lew.jpg'
	},
	{
		id: 3,
		title: 'Tupcio Chrupcio',
		desc: 'Film o myszce',
		img: 'images/tupcio_chrupcio.jpg'
	},
	{
		id: 4,
		title: 'Rogalik i Pędzipiętek',
		desc: 'Opowieść o przyjaźni',
		img: 'images/rogalik_pedzipietek.jpg'
	},
	{
		id: 5,
		title: 'Bob budowniczy',
		desc: 'Bajka o maszynach budowlanych',
		img: 'images/bob_budowniczy.jpg'
	}
];

var App = React.createClass({ 
	render: function() {
		return ( 
			React.createElement('div', {}, 
				React.createElement(Header), 
				React.createElement(MovieList, {items: movies}) ) 
		); 
	} 
});