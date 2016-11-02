import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { adminFilters, searchRegistrants } from './reducer_adminFilters';

// Send to Store
const rootReducer = combineReducers({
	searchRegistrants,
	adminFilters,
	routing
});

export default rootReducer;