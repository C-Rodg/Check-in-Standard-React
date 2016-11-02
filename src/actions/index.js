import axios from 'axios';
import * as types from './types';

export function setAdminFilter(filter) {
	return {
		type : types.SET_ADMIN_FILTER,
		payload : filter.id
	};
}

function searchRegistrantsSuccess(response) {
	console.log('success', response);
	return {
		type : types.SEARCH_REGISTRANTS_SUCCESS,
		payload : response
	};
}

function searchRegistrantsError(err) {
	console.log('error', err);
	return {
		type: types.SEARCH_REGISTRANTS_ERROR,
		payload : err
	};
}

export function searchRegistrants(searchText) {
	axios.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
	axios.defaults.headers.common['Accept'] = 'application/json';
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	let appUrl = 'http://crodgers.corp.validar.com/checkin-react/Services/Methods.asmx/SearchRegistrants'; 
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
		axios.post(appUrl, testObj)
			.then((response) => {
				dispatch(searchRegistrantsSuccess(response));
			})
			.catch((err) => {
				dispatch(searchRegistrantsError(err));
			});
	}
}