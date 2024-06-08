import { ACTION_TYPE } from '../actions';

const initialUserState = [];

export const userReducer = (state = initialUserState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_DEVS:
			return [...payload];
		default:
			return state;
	}
};
