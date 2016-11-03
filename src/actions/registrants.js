import { axios, CC_URL } from './utilities_httpRequest';

//---------------------------- TYPES ------------------------------------------//

// Filters
export const SET_ADMIN_FILTER = 'SET_ADMIN_FILTER';

// Search Registrants
export const SEARCH_REGISTRANTS_SUCCESS = 'SEARCH_REGISTRANTS_SUCCESS';
export const SEARCH_REGISTRANTS_ERROR = 'SEARCH_REGISTRANTS_ERROR';

//-------------------------- ACTION CREATORS ----------------------------------//

export function setAdminFilter(filter) {	
	return {
		type : SET_ADMIN_FILTER,
		payload : filter
	};
}

export function searchRegistrants(searchText) {
	let appUrl = 'SearchRegistrants'; 
	let adminQuery = {
		Operator : "OR",
		Expressions: [
		{
			"Column" : "LastName",
			"Comparison" : "Contains",
			"Value" : searchText
		}, {
			"Column" : "Company",
			"Comparison" : "Contains",
			"Value" : searchText
		}, {
			"Column" : "Email",
			"Comparison" : "Contains",
			"Value" : searchText
		}, {
			"Column" : "FirstName",
			"Comparison" : "Contains",
			"Value" : searchText
		}
		]
	};
	let testObj = {
		"top" : 5,
		"searchGroup" : adminQuery,
		"orderBy": [{Column : "Firstname", OrderByDirection : "Ascending"}]
	};

	return function(dispatch) {
		axios.post(`${CC_URL}SearchRegistrants`, testObj)
			.then((response) => {
				dispatch(searchRegistrantsSuccess(response));
			})
			.catch((err) => {
				console.log("FOUND AN ERROR IN SEARCH REGS");
				dispatch(searchRegistrantsError(err));
			});
	}
}

function searchRegistrantsSuccess(response) {
	console.log('success', response);
	return {
		type : SEARCH_REGISTRANTS_SUCCESS,
		payload : response
	};
}

function searchRegistrantsError(err) {
	console.log('error', response);
	return {
		type : SEARCH_REGISTRANTS_ERROR,
		payload : err
	};
}