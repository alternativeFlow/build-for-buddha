import {SET_SCREEN_SUCCESS} from '../types';

export const setScreenSuccess = (screen) => {
	return {
		type: SET_SCREEN_SUCCESS,
		screen
	};
};

export const setScreen = (screen) => (dispatch) => {
	dispatch(setScreenSuccess(screen));
};