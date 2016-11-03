import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

// Import Reducers
import { registrants } from './reducer_registrants';
import { settings } from './reducer_settings';

// Send to Store
const rootReducer = combineReducers({
	settings,
	registrants,
	routing
});

export default rootReducer;