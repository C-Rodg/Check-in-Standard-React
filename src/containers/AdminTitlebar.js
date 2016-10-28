import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { setAdminFilter } from '../actions';
import FilterDropdown from '../components/FilterDropdown';

class AdminTitlebar extends Component {

	constructor(props) {
		super(props);
		console.log(props);
		
		// Bind methods
		this.onFilterSelect = this.onFilterSelect.bind(this);
	}


	onFilterSelect(filter) {		
		this.props.adminFilterSelected(filter);
	}

	onSearchSubmit(event) {
		event.preventDefault();
		// TODO: SEARCH FOR REGISTRANTS
	}

	render(){
		let searchText;
		Object.keys(this.props.adminFilters).forEach((val, key) => {
			if(this.props.adminFilters[val].selected){
				searchText = this.props.adminFilters[val].msg;
			}
		});

		return (
			<div className="admin-titlebar frow nowrap flex-align-center">
				<img src={require("../static/validar-logo.png")} alt="Validar" />
				<span className="titlebar-menu-toggle" onClick={this.props.onMenuToggle} ><i className="material-icons">menu</i></span>
				<div className="titlebar-content">
					<div className="frow row-end">										
						<div className="col-xs-3-4 admin-search-box-container">
							<form onSubmit={this.onSearchSubmit}>	
								<input className="admin-search-box" type="text" placeholder={searchText}/>
								<i className="material-icons search-icon">search</i>																						
								<FilterDropdown onFilterSelect={this.onFilterSelect} filters={this.props.adminFilters}/>															
							</form>
						</div>						
						<div className="text-right col-xs-1-12"><span className="walkin-btn"><i className="material-icons mi-37">add</i></span></div>
					</div>
				</div>
			</div>
		);
	}
}

// Incoming props from state 'adminFilters'
const mapStateToProps = (state) => {
	return {
		adminFilters: state.adminFilters
	};
};

// Incoming props method 'adminFilterSelected' to call action creator
const mapDispatchToProps = (dispatch) => {
	return {
		adminFilterSelected : filter => dispatch(setAdminFilter(filter))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminTitlebar);