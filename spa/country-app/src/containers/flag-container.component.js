import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';
import store from '../store/store';
import '../country.css';

class CountryFlagContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		store.dispatch(getCountries());
		this.props.dispatch(searchCountries(''));
	}
	
	//onToggleLoop = (event) => {...}. 
	search = (event) => {
        this.props.dispatch(searchCountries(event.target.value));
    }
    
    deleteCountry = (id) => {
    	this.props.dispatch(deleteCountry(id));
    }

	render() {
		return (
			<div>
				<div className="search text-center">
					<input type="text" onChange={this.search} />
				</div>
				<CountryFlagList countries={this.props.visibleCountries}  deleteCountry={this.deleteCountry}/>
			</div>
		)
	}
}


const mapStateToProps = function(store) {
	return {
		countries: store.countriesReducer.countries,
		visibleCountries: store.countriesReducer.visibleCountries
	};
};

export default connect(mapStateToProps)(CountryFlagContainer);