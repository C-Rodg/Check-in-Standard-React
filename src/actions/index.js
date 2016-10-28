import * as types from './types';

export function setAdminFilter(filter) {
	return {
		type : types.SET_ADMIN_FILTER,
		payload : filter.id
	};
}