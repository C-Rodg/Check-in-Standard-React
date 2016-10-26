import * as types from './types';

export function toggleMenuOpen() {
	console.log("TOGGLING!");
	return {
		type : types.TOGGLE_MENU_OPEN
	};
}