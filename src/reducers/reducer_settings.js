import { PING_SERVER_SUCCESS, PING_SERVER_ERROR, GET_EVENT_INFO_SUCCESS, GET_EVENT_INFO_ERROR, GET_EVENT_SETTINGS_SUCCESS, GET_EVENT_SETTINGS_ERROR, LIST_CONFIGURATIONS_SUCCESS, LIST_CONFIGURATIONS_ERROR, GET_REGISTRATION_STATS_SUCCESS, GET_REGISTRATION_STATS_ERROR, GET_PREPRINT_STATS_SUCCESS, GET_PREPRINT_STATS_ERROR, GET_VERSION_SUCCESS, GET_VERSION_ERROR, GET_FULL_VERSION_SUCCESS, GET_FULL_VERSION_ERROR, CREATE_REG_ID_TRACKING_SUCCESS, CREATE_REG_ID_TRACKING_ERROR } from '../actions/settings';

const INITIAL_STATE = {
	ping : null,
	eventInfo : null,
	eventSettings : null,
	listConfigurations : null,
	registrationStats : null,
	preprintStats : null,
	version : null,
	fullVersion : null,
	regIdTracking : null
};

export const settings = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case PING_SERVER_SUCCESS:
			return state;
		case PING_SERVER_ERROR:
			return state;

		case GET_EVENT_INFO_SUCCESS:
			return state;
		case GET_EVENT_INFO_ERROR :
			return state;

		case GET_EVENT_SETTINGS_SUCCESS:
			return state;
		case GET_EVENT_SETTINGS_ERROR: 
			return state;

		case LIST_CONFIGURATIONS_SUCCESS:
			return state;
		case LIST_CONFIGURATIONS_ERROR:
			return state;

		case GET_REGISTRATION_STATS_SUCCESS:
			console.log(action);
			return state;
		case GET_REGISTRATION_STATS_ERROR:
			return state;

		case GET_PREPRINT_STATS_ERROR : 
			return state;
		case GET_PREPRINT_STATS_ERROR : 
			return state;

		case GET_VERSION_SUCCESS :
			return state;
		case GET_VERSION_ERROR : 
			return state;

		case GET_FULL_VERSION_SUCCESS : 
			return state;
		case GET_FULL_VERSION_ERROR:
			return state;

		case CREATE_REG_ID_TRACKING_SUCCESS:
			return state;
		case CREATE_REG_ID_TRACKING_ERROR:
			return state;

		default: 
			return state;
	}	
}