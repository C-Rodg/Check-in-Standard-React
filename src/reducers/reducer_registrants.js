import _ from 'lodash';

import { SET_ADMIN_FILTER, SEARCH_REGISTRANTS_SUCCESS, SEARCH_REGISTRANTS_ERROR, RESET_SEARCH_LIST, LOAD_REGISTRANT_RECORD_SUCCESS, LOAD_REGISTRANT_RECORD_ERROR, CLEAR_CURRENT_REGISTRANT } from '../actions/registrants';

const INITIAL_STATE = {
	currentFilter : 'all',
	currentRegistrant : null,
	registrantList : [],
	searchError : false,
	searching : false,
	walkInMode : false
};

export const registrants = (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case SET_ADMIN_FILTER : 
			return Object.assign({}, state, {
				currentFilter : action.payload
			});

		case SEARCH_REGISTRANTS_SUCCESS :			
			return Object.assign({}, state, {
				registrantList : action.payload,
				searchError : false,
				searching : true
			});
		case SEARCH_REGISTRANTS_ERROR :
			return Object.assign({}, state, {
				registrantList : [],
				searchError : true,
				searching : true
			});

		case RESET_SEARCH_LIST : 	
			return Object.assign({}, state, {
				registrantList : [],
				searchError : false,
				searching : false
			});

		case LOAD_REGISTRANT_RECORD_SUCCESS :			
			return Object.assign({}, state, {
				currentRegistrant : action.payload
			});
		case LOAD_REGISTRANT_RECORD_ERROR :
			return Object.assign({}, state);

		case CLEAR_CURRENT_REGISTRANT :
			return Object.assign({}, state, {
				currentRegistrant : null,
				walkInMode : false
			});

		default : 
			return state;
	}
};