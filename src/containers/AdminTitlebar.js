import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { setAdminFilter, searchRegistrants } from '../actions/registrants';
import FilterDropdown from '../components/FilterDropdown';

const ADMIN_FILTERS = {
	all : {
		id : 'all',
		name : 'All Registrants',
		msg : 'Find a registrant...'
	},
	preprint : {
		id : 'preprint',
		name : 'Pre-Prints',
		msg : 'Find a pre-print registrant...'
	},
	walkin: {
		id : 'walkin',
		name : 'Walk-ins',
		msg : 'Find a checked-in registrant...'
	},
	attendeetype : {
		id : 'attendeetype',
		name : 'Attendee Type',
		msg : 'Search by attendee type...'
	}
};

class AdminTitlebar extends Component {

	constructor(props, context) {
		super(props);
		
		// Set component state
		this.state = { 
			searchText : "",
			searchPlaceholder : ADMIN_FILTERS[this.props.currentFilter].msg 
		};

		// Bind methods
		this.onFilterSelect = this.onFilterSelect.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}



	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps){
			this.setState({
				searchPlaceholder : ADMIN_FILTERS[nextProps.currentFilter].msg
			});
		}
	}

	onFilterSelect(filter) {		
		this.props.adminFilterSelected(filter);
	}

	handleSearchChange(event) {
		this.setState({searchText : event.target.value });
	}

	onSearchSubmit(event) {
		event.preventDefault();
		this.props.searchRegistrants(this.state.searchText, this.props.currentFilter);
		if(!this.context.router.isActive('/admin/search')){
			this.context.router.push('/admin/search');
		}
	}

	render(){
		return (
			<div className="admin-titlebar container-fluid">
				<div className="admin-titlebar-controls">
					<img src={require("../static/validar-logo.png")} alt="Validar" />
					<span className="titlebar-menu-toggle" onClick={this.props.onMenuToggle} ><i className="material-icons">menu</i></span>
				</div>
				<div className="titlebar-content row">									
					<div className="col-xs-9 admin-search-box-container">
						<form onSubmit={this.onSearchSubmit}>	
							<input className="admin-search-box" type="text" placeholder={this.state.searchPlaceholder} onChange={this.handleSearchChange} value={this.state.searchText}/>
							<i className="material-icons search-icon">search</i>																						
							<FilterDropdown onFilterSelect={this.onFilterSelect} filters={ADMIN_FILTERS} selectedFilter={this.props.currentFilter} />															
						</form>
					</div>						
					<div className="text-right col-xs-3"><span className="walkin-btn"><i className="material-icons mi-37">add</i></span></div>
				</div>
			</div>
		);
	}
}

AdminTitlebar.contextTypes = {
	router : PropTypes.func.isRequired
};

// Incoming props from state 'registrants'
const mapStateToProps = (state) => {
	return {
		currentFilter: state.registrants.currentFilter
	};
};

// Incoming props method 'adminFilterSelected' to call action creator
const mapDispatchToProps = (dispatch) => {
	return {
		adminFilterSelected : filter => dispatch(setAdminFilter(filter)),
		searchRegistrants : (searchText, filter) => dispatch(searchRegistrants(searchText, filter))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminTitlebar);