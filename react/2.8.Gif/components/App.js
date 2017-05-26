var GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
var GIPHY_API_URL = 'http://api.giphy.com';
App = React.createClass({

	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},
	handleSearch: function(searchingText) {
		var self = this;
		self.setState({
			loading: true
		});
		self.getGif(searchingText, function(gif) {
			self.setState({
				loading: false,
				gif: gif,
				searchingText: searchingText
			}); 
		}).bind(this); 
	},
	
	httpGet: function(url) {
		return new Promise (
			function (resolve, rejected) {
				const xhr = new XMLHttpRequest();
				xhr.open('GET', url); 
				xhr.onload = function() {
					if (this.status === 200) {
						var data = JSON.parse(xhr.responseText).data;
						var gif = {
							url: data.fixed_width_downsampled_url, sourceUrl: data.url
						};
						resolve(gif);						
					} else {
						reject(new Error(this.statusText));
					}
				}
				xhr.onerror = function () { 
					reject(new Error( `XMLHttpRequest Error: ${this.statusText}`)); 
				};
				xhr.send();
			}
		);
	},
	getGif: function(searchingText, callback) {
		var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; // 2.
		this.httpGet(url)
		.then(response => {
			callback(response);
		})
		.catch(error => console.log('error: ' + error));
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
					url={this.state.gif.url} 
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}
});