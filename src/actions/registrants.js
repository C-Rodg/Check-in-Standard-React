import { axios, CC_URL } from './utilities_httpRequest';

//---------------------------- TYPES ------------------------------------------//

// Filters
export const SET_ADMIN_FILTER = 'SET_ADMIN_FILTER';

// Search Registrants
export const SEARCH_REGISTRANTS_SUCCESS = 'SEARCH_REGISTRANTS_SUCCESS';
export const SEARCH_REGISTRANTS_ERROR = 'SEARCH_REGISTRANTS_ERROR';

// Close/Reset Search
export const RESET_SEARCH_LIST = 'RESET_SEARCH_LIST';

// Load Registrant
export const LOAD_REGISTRANT_RECORD_SUCCESS = 'LOAD_REGISTRANT_RECORD_SUCCESS';
export const LOAD_REGISTRANT_RECORD_ERROR = 'LOAD_REGISTRANT_RECORD_ERROR';

// Clear Registrant
export const CLEAR_CURRENT_REGISTRANT = 'CLEAR_CURRENT_REGISTRANT';

//-------------------------- ACTION CREATORS ----------------------------------//

export function setAdminFilter(filter) {	
	return {
		type : SET_ADMIN_FILTER,
		payload : filter
	};
}

export function searchRegistrants(searchText, filter) {
	let query;
	if(filter === 'all'){
		query = {
			Operator: 'OR',
			Expressions: [{
				Column : "LastName",
				Comparison: "Contains",
				Value : searchText
			}, {
				Column : "Company",
				Comparison : "Contains",
				Value : searchText
			}, {
				Column : "Email",
				Comparison : "Contains",
				Value : searchText
			}, {
				Column : "FirstName",
				Comparison : "Contains",
				Value : searchText
			}, {
				Column : "RegistrantId",
				Comparison : "Equals",
				Value : searchText
			}]
		};
	} else if (filter === 'attendeetype') {
		query = {
			Expressions: [{
				Column : "AttendeeType",
				Comparison : "Equals",
				Value : searchText
			}]
		};
	} else if (filter === 'preprint' || filter === 'walkin') {
		query = {
			Operator : "AND",
			SubGroups : [{
				Operator : "OR",
				Expressions : [{
					Column : "LastName",
					Comparison : "Contains",
					Value : searchText
				}, {
					Column : "Email",
					Comparison : "Contains",
					Value : searchText
				}, {
					Column : "FirstName",
					Comparison : "Contains",
					Value : searchText
				}, {
					Column : "Company",
					Comparison : "Contains",
					Value : searchText
				}]
			}, {
				Operator : "OR",
				Expressions : [{
					Column : filter,
					Comparison : "Equals",
					Value : 1
				}]
			}]
		};
	}
	
	let inputArg = {
		"top" : null,
		"searchGroup" : query,
		"orderBy": [{Column : "Firstname", OrderByDirection : "Ascending"}]
	};

	return function(dispatch) {
		axios.post(`${CC_URL}SearchRegistrants`, inputArg)
			.then((response) => {
				dispatch(searchRegistrantsSuccess(response));
			})
			.catch((err) => {
				dispatch(searchRegistrantsError(err));
			});
	};
}

function searchRegistrantsSuccess(response) {
	return {
		type : SEARCH_REGISTRANTS_SUCCESS,
		payload : response.data.d.Registrants
	};
}

function searchRegistrantsError(err) {
	return {
		type : SEARCH_REGISTRANTS_ERROR,
		payload : err
	};
}

export function resetSearchList(data) {
	return {
		type : RESET_SEARCH_LIST
	};
}

export function loadRegistrant(registrant) {
	if(registrant === null){
		return {
			type : LOAD_REGISTRANT_RECORD_ERROR,
			payload : "Invalid registrant object"
		};
	}
	console.log(registrant);
	return {
		type : LOAD_REGISTRANT_RECORD_SUCCESS,
		payload : registrant
	};
}

export function clearCurrentRegistrant(){
	return {
		type : CLEAR_CURRENT_REGISTRANT
	};
}