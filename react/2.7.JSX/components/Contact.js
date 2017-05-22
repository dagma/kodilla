Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			<div class='contactItem'>
				<img class="contactImage" src="http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"  />
				<p class="contactLabel">Imię {this.props.item.firstName}</p>
				<p class="contactLabel">Nazwisko {this.props.item.lastName}</p>
				<a href="{this.props.item.email}" class="contactEmail">Imię {this.props.item.email}</a>
			</div>

		);
	},
});