import axios from 'axios';

//get project config
import { API } from '@uixkit.react/config';

// Authority 
import authHeader from '@uixkit.react/helpers/auth-header.js';



class UserService {
	
    /**
     * Get User Name
     */
	getUserName() {
		return axios.post(API.USER_AUTHENTICATE, { 
					headers: { ...authHeader(), 'content-type': 'application/json' },
					withCredentials: true
				}).then(function (response) {
					const jsonData = response.data;
					return jsonData.data ? jsonData.data.name : null;
				});
		
	}

    /**
     * Get User ID
     */
	getUserID() {
		return axios.post(API.USER_AUTHENTICATE, { 
					headers: { ...authHeader(), 'content-type': 'application/json' },
					withCredentials: true
				}).then(function (response) {
					const jsonData = response.data;
					return jsonData.data ? jsonData.data.user_id : null;
				});
		
	}
	
}


export default new UserService;

