import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000/repository'; 


export function fetchGet(url,params) {
	return new Promise((resolve,reject) => {
		axios.get(url,params)
			 .then(response => {
			 	resolve(response.data);
			 	// console.log("_data: ",_data);
			 }).catch(err => {
			 	reject(err);
			 	console.log('get request file list fail',err);
			 });
	});
}

export function fetchPost(url,params) {
	console.log("params: ",params);
	return new Promise((resolve,reject) => {
		axios.post(url,params)
			 .then(response => {
			 	console.log("response successfully");
			 	resolve(response.data);
			 }).catch(err => {
			 	reject(err);
			 	console.log("post request file list fail");
			 });
	});
}

export const fileLists = function(roleId) {return fetchGet("/file/lists.json/"+roleId);}
export const modifyFileName = function(file) {return fetchPost("/file/file_name_modify.json",file);}
export const deleteFile = function(id) {return fetchGet("/file/delete.json/"+id);}