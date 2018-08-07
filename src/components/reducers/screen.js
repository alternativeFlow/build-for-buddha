import { SET_SCREEN_SUCCESS } from '../types';

export default function screen(state = {}, action = {}) {
	switch (action.type) {
		case SET_SCREEN_SUCCESS:
			return action.screen;
		default: 
			return state;
	}
}