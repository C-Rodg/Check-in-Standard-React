import { axios, CC_URL } from './utilities_httpRequest';

//---------------------------- TYPES ------------------------------------------//

export const PING_SERVER_SUCCESS = 'PING_SERVER_SUCCESS';
export const PING_SERVER_ERROR = 'PING_SERVER_ERROR';

export const GET_EVENT_INFO_SUCCESS = 'GET_EVENT_INFO_SUCCESS';
export const GET_EVENT_INFO_ERROR = 'GET_EVENT_INFO_ERROR';

export const GET_EVENT_SETTINGS_SUCCESS = 'GET_EVENT_SETTINGS_SUCCESS';
export const GET_EVENT_SETTINGS_ERROR = 'GET_EVENT_SETTINGS_ERROR';

export const LIST_CONFIGURATIONS_SUCCESS = 'LIST_CONFIGURATIONS_SUCCESS';
export const LIST_CONFIGURATIONS_ERROR = 'LIST_CONFIGURATIONS_ERROR';

export const GET_REGISTRATION_STATS_SUCCESS = 'GET_REGISTRATION_STATS_SUCCESS';
export const GET_REGISTRATION_STATS_ERROR = 'GET_REGISTRATION_STATS_ERROR';

export const GET_PREPRINT_STATS_SUCCESS = 'GET_PREPRINT_STATS_SUCCESS';
export const GET_PREPRINT_STATS_ERROR = 'GET_PREPRINT_STATS_ERROR';

export const GET_VERSION_SUCCESS = 'GET_VERSION_SUCCESS';
export const GET_VERSION_ERROR = 'GET_VERSION_ERROR';

export const GET_FULL_VERSION_SUCCESS = 'GET_FULL_VERSION_SUCCESS';
export const GET_FULL_VERSION_ERROR = 'GET_FULL_VERSION_ERROR';

export const CREATE_REG_ID_TRACKING_SUCCESS = 'CREATE_REG_ID_TRACKING_SUCCESS';
export const CREATE_REG_ID_TRACKING_ERROR = 'CREATE_REG_ID_TRACKING_ERROR';

//-------------------------- ACTION CREATORS ----------------------------------//

export function getRegistrationStats(data) {
	return function(dispatch) {
		axios.post(`${CC_URL}GetRegistrationStats`, {})
			.then((response) => {
				dispatch(getRegistrationStatsSuccess(response));
			})
			.catch((err) => {
				dispatch(getRegistrationStatsError(err));
			});
	};
}

function getRegistrationStatsSuccess(response) {
	return {
		type : GET_REGISTRATION_STATS_SUCCESS,
		payload : response.data.d
	};
}

function getRegistrationStatsError(err) {
	return {
		type : GET_REGISTRATION_STATS_ERROR,
		payload : err
	};
}