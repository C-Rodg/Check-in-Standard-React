import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { setAdminFilter, searchRegistrants } from '../actions';
import FilterDropdown from '../components/FilterDropdown';

class AdminTitlebar extends Component {

	constructor(props) {
		super(props);
		console.log(props);
		
		// Set component state
		this.state = { searchText : "" };

		// Bind methods
		this.onFilterSelect = this.onFilterSelect.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}


	onFilterSelect(filter) {		
		this.props.adminFilterSelected(filter);
	}

	handleSearchChange(event) {
		this.setState({searchText : event.target.value });
	}

	onSearchSubmit(event) {
		event.preventDefault();
		this.props.searchRegistrants(this.state.searchText);
	}

	render(){
		let searchText;
		Object.keys(this.props.adminFilters).forEach((val, key) => {
			if(this.props.adminFilters[val].selected){
				searchText = this.props.adminFilters[val].msg;
			}
		});

		return (
			<div className="admin-titlebar container-fluid">
				<div className="admin-titlebar-controls">
					<img src={require("../static/validar-logo.png")} alt="Validar" />
					<span className="titlebar-menu-toggle" onClick={this.props.onMenuToggle} ><i className="material-icons">menu</i></span>
				</div>
				<div className="titlebar-content row">									
					<div className="col-xs-9 admin-search-box-container">
						<form onSubmit={this.onSearchSubmit}>	
							<input className="admin-search-box" type="text" placeholder={searchText} onChange={this.handleSearchChange} value={this.state.searchText}/>
							<i className="material-icons search-icon">search</i>																						
							<FilterDropdown onFilterSelect={this.onFilterSelect} filters={this.props.adminFilters}/>															
						</form>
					</div>						
					<div className="text-right col-xs-3"><span className="walkin-btn"><i className="material-icons mi-37">add</i></span></div>
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
		adminFilterSelected : filter => dispatch(setAdminFilter(filter)),
		searchRegistrants : searchText => dispatch(searchRegistrants(searchText))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminTitlebar);