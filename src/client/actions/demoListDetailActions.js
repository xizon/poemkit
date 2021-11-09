import axios from 'axios';

//get project config
import { API } from '@poemkit/config/websiteConfig.js';

const actionCreators = (id) => {

	// The function defined by async will return the value of a `Promise()` object resolve by default, 
	// so the `then()` can be used directly, and the returned value is the params of the `then()`
	return async (dispatchFunction) => {

		const res = await axios.get(API.RECEIVE_DEMO_LISTDETAIL.replace('{id}', id));

		//The Redux store has a method called `store.dispatch()`.
		const action = {
			type: 'RECEIVE_DEMO_LISTDETAIL',
			payload: res.data
		}

		dispatchFunction(action);

	}
}

export default actionCreators;




/** //////////////////////////////////////// */
/*
	If the API asynchronous request failed asynchronously (usually a 403 permission error), the error report `502 Proxy Error` of the Express Server will be skipped, and cannot use server-side rendering (SSR) features.
	The test on the local server is correct, this error usually occurs on the cloud server.
*/
/*
let res = {
	data: [
		{
			"name": "",
			"capital": "",
			"population": "",
			"subregion": "",
			"languages": [
				{
					"name": ""
				}
			],
			"flag": ""
		}
	]

};

// You should catch your potential promise rejection to avoid causing `502 Proxy Error` 
// errors when requesting from the express server
try {
	res = await axios.get( API.RECEIVE_DEMO_LISTDETAIL.replace( '{id}', id ) );
} catch (err) {
	console.warn(err);
}

*/