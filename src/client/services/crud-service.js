import axios from 'axios';

//get project config
import { API } from '@/config/websiteConfig.js';


class CRUDService {
	constructor() {
		this.url = API.CRUD_SERVICE;
		this.config = {};
	}
	initData() {
		return axios.get(API.CRUD_DATA_INIT, {}, this.config);
	}	
	getAll() {
		return axios.get(`${this.url}`, {}, this.config);
	}
	get(id) {
		return axios.get(`${this.url}?type=get&id=${id}`, {}, this.config);
	}
	create(data) {
		this.config = {
			headers: { 'Content-Type':  'multipart/form-data' }
		};

        //console.log( data.entries() );

		return axios.post(`${this.url}?type=create`, data, this.config);
	}
	update(id, data) {
		this.config = {
			headers: { 'Content-Type':  'multipart/form-data' }
		};

        //console.log( data.entries() );

		return axios.post(`${this.url}?type=update&id=${id}`, data, this.config);
	}
	remove(id) {
		return axios.delete(`${this.url}?type=remove&id=${id}`, {}, this.config);
	}
}


export default new CRUDService;

