App = React.createClass({

	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},
	handleSearch: function(searchingText) { // 1.
		this.setState({
			loading: true // 2.
		});
		this.getGif(searchingText, function(gif) { // 3.
			this.setState({ // 4
				loading: false, // a 
				gif: gif, // b 
				searchingText: searchingText // c 
			}); 
		}).bind(this); 
	},
	
	getGif: function(searchingText, callback) { // 1. 
		const GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
		const GIPHY_API_URL = 'http://api.giphy.com';
		var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; // 2.
		var xhr = new XMLHttpRequest(); // 3.
		xhr.open('GET', url); 
		xhr.onload = function() {
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText).data; // 4.
				var gif = { // 5. 
					url: data.fixed_width_downsampled_url, sourceUrl: data.url
				}; 
				callback(gif); // 6.
			}
		};
		xhr.send();
	},
	render: function() {
		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
			<div style={styles}>
				<h1>wyszukiwarka GIFów!</h1>
				<p>znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
				<Search onSearch={this.handleSearch}/>
				<Gif 
					loading={this.state.loading} 
					url={this.state.url} 
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}
});