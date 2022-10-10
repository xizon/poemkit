import axios from 'axios';

//get project config
import { API } from '@/config/websiteConfig.js';

// Authority 
import isAdmin from '@/services/is-admin.js';
import authHeader from '@/services/auth-header.js';



class UserService {
	constructor() {
		this.url = API.USER_AUTHENTICATE;
		this.config = {};
	}
	
    /**
     * Get User Name
     */
	getUserName() {
		if ( !isAdmin() ) return null;

		this.config = { 
			headers: { 
				...authHeader(), 
				'Content-Type': 'application/json'  
			}
		};
		
		return axios.post(this.url, {}, this.config).then(function (response) {
					const jsonData = response.data;
					return jsonData.data ? jsonData.data.name : null;
				});
		
	}

	
}


export default new UserService;

