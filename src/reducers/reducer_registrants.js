import _ from 'lodash';

import { SET_ADMIN_FILTER, SEARCH_REGISTRANTS_SUCCESS, SEARCH_REGISTRANTS_ERROR } from '../actions/registrants';

const INITIAL_STATE = {
	currentFilter : 'all'
};

export const registrants = (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case SET_ADMIN_FILTER : 
			return Object.assign({}, state, {
				currentFilter : action.payload
			});

		case SEARCH_REGISTRANTS_SUCCESS : 
			console.log(state, action);
			return state;
		case SEARCH_REGISTRANTS_ERROR : 
			console.log(state, action);
			return state;

		default : 
			return state;
	}
};