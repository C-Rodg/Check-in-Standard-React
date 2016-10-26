import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as types from '../actions/types';

const menuOpen = (state = false, action) => {
	console.log(state, action);
	switch (action.type) {
		case types.TOGGLE_MENU_OPEN:
			return !state;
		default:
			return state;
	}
};


// Send to Store
const rootReducer = combineReducers({
	//menuOpen,
	routing
});

export default rootReducer;