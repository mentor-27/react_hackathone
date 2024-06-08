import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { appReducer, devsReducer } from './reducers';

const reducer = combineReducers({
	app: appReducer,
	devs: devsReducer,
});

const composeEnhancers =
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) ||
	compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
