import React from 'react';

class Title extends React.Component {
	get data() {
		return this.props.data.map(data => <li key={data.id}>{data.text}</li>);
	}

	render() {
		return (
			<div>
				<h1>Lista rzeczy do zrobienia</h1>
				<ul>{this.data}</ul>
			</div>

		)
	}
}

export default Title;