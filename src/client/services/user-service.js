import axios from 'axios';

//get project config
import { API } from '@/config/websiteConfig.js';

// Authority 
import authHeader from '@/services/auth-header.js';



class UserService {
	
    /**
     * Get User Name
     */
	getUserName() {
		if (JSON.stringify(authHeader()) === '{}') return null;
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
		if (JSON.stringify(authHeader()) === '{}') return null;
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

