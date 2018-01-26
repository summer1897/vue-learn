import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:9000/central";

export const fetchGet = function(url,params) {
	return new Promise((resolve,reject) => {
		axios.get(url,params)
			 .then(response => {
			 	resolve(response.data);
			 }).catch(err => {
			 	// console.log('axios get method exception: ',err);
			 	reject(err);
			 });
	});
}

export const fetchPost = function(url,params) {
	return new Promise((resolve,reject) => {
		var _headers = {headers: {"Content-Type": "application/json"}};
		axios.post(url,params,_headers)
			 .then(response => {
			 	// console.log("fetchPost:",response.data);
			 	resolve(response.data);
			 }).catch(err => {
			 	// console.log('axios post method exception: ',err);
			 	reject(err);
			 });
	});
}

