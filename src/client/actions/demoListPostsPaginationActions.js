import axios from 'axios';

//get project config
import { API } from '@uixkit.react/config/websiteConfig.js';


export function actionCreatorOfGetDataInitial() {
	// The function defined by async will return the value of a `Promise()` object resolve by default, 
	// so the `then()` can be used directly, and the returned value is the params of the `then()`
	return async (dispatchFunction) => {

		const res = await axios.get(API.RECEIVE_PAGE_LIST);

		//The Redux store has a method called `store.dispatch()`.
		const action = {
			type: 'RECEIVE_PAGE_LIST',
			payload: res.data
		}

		dispatchFunction(action);

	}
}

export function actionCreatorOfGetDataByPage(page) {
	// The function defined by async will return the value of a `Promise()` object resolve by default, 
	// so the `then()` can be used directly, and the returned value is the params of the `then()`
	return async (dispatchFunction) => {

		const res = await axios.get(API.RECEIVE_PAGE_LIST.replace('{page}', page));

		//The Redux store has a method called `store.dispatch()`.
		const action = {
			type: 'RECEIVE_PAGE_LIST',
			payload: res.data
		}

		dispatchFunction(action);

	}
}




/** //////////////////////////////////////// */
/*
	If the API asynchronous request failed asynchronously (usually a 403 permission error), the error report `502 Proxy Error` of the Express Server will be skipped, and cannot use server-side rendering (SSR) features.
	The test on the local server is correct, this error usually occurs on the cloud server.
*/
/*
let res = {data: []};

// You should catch your potential promise rejection to avoid causing `502 Proxy Error` 
// errors when requesting from the express server
try {
	res = await axios.get( API.RECEIVE_DEMO_LIST );
} catch (err) {
	console.warn(err);
}

*/