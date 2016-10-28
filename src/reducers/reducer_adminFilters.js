import _ from 'lodash';

import { SET_ADMIN_FILTER } from '../actions/types';

const initialState = {
	all : {
		id : 'all',
		name : "All Registrants",
		selected : true,
		msg : "Find a registrant..."
	},
	preprint : {
		id : 'preprint',
		name: "Pre-Prints",
		selected : false,
		msg : "Find a pre-print registrant..."
	},
	walkin : {
		id : 'walkin',
		name : "Walk-ins",
		selected : false,
		msg : "Find a walk-in registrant..."
	},
	checkedin : {
		id : 'checkedin',
		name : "Checked-in",
		selected : false,
		msg : "Find a checked-in registrant..."
	},
	attendeetype : {
		id : 'attendeetype',
		name : "Attendee Type",
		selected : false,
		msg : "Search by attendee type..."
	}
};

export const adminFilters = (state = initialState, action) => {
	switch(action.type){
		case SET_ADMIN_FILTER : 
			// Generate new state WITHOUT MUTATING original	
			let newState = _.cloneDeep(state);	
			Object.keys(newState).forEach((key) => {
				if(key === action.payload) {
					newState[key].selected = true;
				} else {
					newState[key].selected = false;
				}
			});
			return newState;
		default:
			return state;
	}
};