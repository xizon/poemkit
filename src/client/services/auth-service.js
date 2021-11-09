import axios from 'axios';

//get project config
import { API } from '@poemkit/config/websiteConfig.js';


class AuthService {
	
    /**
     * Login
     */
	login(formData) {

		return axios.post(API.LOGIN_REQUEST, formData)
				.then(function (response) {

					const jsonData = response.data;


					// Save user from local storage
					if ( jsonData.code === 200 ) {

						localStorage.setItem('user',JSON.stringify({
							token: jsonData.data.token
						}));

					}


					// Dispatch auth actions (login) to Redux Thunk Middleware 
					// which uses `AuthService` to call API.
					//------------------------------------------
					//dispatch({type: 'TYPENAME', payload: jsonData});



					//Callback Data must be returned, otherwise res cannot be accepted after 
					//calling the `login(formData).then((res) =>{})` method of this function
					//------------------------------------------
					return jsonData;

				}).catch(function (error) {

					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						reject(error.response.status);

					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						reject(error.request);

					} else {
						// If there was a problem, we need to
						// dispatch the error condition
						reject(error.message);
					}

				});


	}
	
	/*---
	!!! Asynchronous Version:
	
	async login(formData) {

		const httpRequest = () => {
			return new Promise( (resolve,reject) => {
				
				axios.post(API.LOGIN_REQUEST, formData)
				.then(function (response) {

					const jsonData = response.data;
					

					// Save user from local storage
					if ( jsonData.code === 200 ) {

						localStorage.setItem('user',JSON.stringify({
							token: jsonData.data.token
						}));

						
					}
					
					resolve(response);

				}).catch(function (error) {
					
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						reject(error.response.status);

					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						reject(error.request);

					} else {
						// If there was a problem, we need to
						// dispatch the error condition
						reject(error.message);
					}
					
					
					
				});
		
			
			});
		};


		
		const getApiData = await httpRequest(); //The value here is passed from resolve()
		
		
		// Dispatch auth actions (login) to Redux Thunk Middleware 
		// which uses `AuthService` to call API.
		//------------------------------------------
		//dispatch({type: 'TYPENAME', payload: getApiData.data});

		
		
		//Callback Data must be returned, otherwise res cannot be accepted after 
		//calling the `login(formData).then((res) =>{})` method of this function
		//------------------------------------------
		return getApiData.data;
		

	}
	
	
	---*/
	
	
    /**
     * Register (!!! This feature has not been implemented for demo. )
     */
	register(username, email, password) {
		return axios.post( API.SIGNUP_REQUEST, {
			username,
			email,
			password
		});
	}
	
	

    /**
     * Remove user from local storage
     */
	logout() {
		localStorage.removeItem('user');
	}

	
 
}


export default new AuthService;



