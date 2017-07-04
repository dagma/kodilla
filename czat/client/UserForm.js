import React, {Component} from 'react';

//import styles from './UserForm.css';

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {name: ''};
	}

	render() {
		return (
			<form className={styles.UserFrom}>
				<input 
					className={styles.UserInput}
					placeholder='Write your nickname and press enter'

				/>
			</form>
		);
	}
}

export default UserFrom;