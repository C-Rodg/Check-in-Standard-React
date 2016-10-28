import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { adminFilters } from './reducer_adminFilters';

// Send to Store
const rootReducer = combineReducers({
	adminFilters,
	routing
});

export default rootReducer;