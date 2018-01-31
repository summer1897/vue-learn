import axios from 'axios'

function fetchGet(url,params) {
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

function fetchPost(url,params) {
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

export const db = {
  get(url,params) {
    return fetchGet(url,params).then(res => {
      return res;
    });
  },
  post(url,params) {
    return fetchPost(url,params).then(res => {
      return res;
    });
  }
}
