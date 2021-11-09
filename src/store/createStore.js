import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@poemkit/reducers/index.js';

export default () => {
	
	const _initialState = {}; //JSON
	const _reducer = rootReducer; //Function
	const _enhancer = applyMiddleware(thunk); //Function
	const store = createStore(_reducer, _initialState, _enhancer);
	
    return store;
};
