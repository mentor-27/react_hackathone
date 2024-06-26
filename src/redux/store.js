import { createStore, combineReducers, compose } from 'redux';
import { devsReducer } from './reducers';

const reducer = combineReducers({
	devs: devsReducer,
});

const composeEnhancers =
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) ||
	compose;

export const store = createStore(reducer, composeEnhancers());
