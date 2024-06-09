const initialAppState = {};

export const appReducer = (state = initialAppState, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
