import axios from 'axios'

axios.defaults.baseURL = "http://localhost:9000/central";

export const fetchGet = function(url,params) {
	return new Promise((resolve,reject) => {
		axios.get(url,params)
			 .then(response => {
			 	resolve(response.data);
			 }).catch(err => {
			 	reject(err);
			 });
	})
}

export const fetchPost = function(url,params) {
	return new Promise((resolve,reject) => {
		axios.post(url,params)
			 .then(response => {
			 	resolve(response.data);
			 }).catch(err => {
			 	reject(err);
			 });
	})
}

