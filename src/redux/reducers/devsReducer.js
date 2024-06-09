import { ACTION_TYPE } from '../actions';

const initialDevsState = [];

export const devsReducer = (state = initialDevsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_DEVS:
			return [...payload];
		default:
			return state;
	}
};
