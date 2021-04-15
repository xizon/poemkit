import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from '@uixkit.react/router/index.js';

//
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@uixkit.react/reducers/index.js';


//All we need to do is grab the initial state from window.__PRELOADED_STATE__ and pass 
//it to our createStore() function as the initial state.
const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;


const store = createStore(rootReducer, state, applyMiddleware(thunk));

//
ReactDOM.hydrate(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector('#app')
);

