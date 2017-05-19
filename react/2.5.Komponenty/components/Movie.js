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