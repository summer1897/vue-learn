import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:9000/boom'; 


var fileLists = function(companyId) {
		var _data;
		axios.get('boom/file/lists.json/' + companyId)
			 .then(response => {
			 	console.log(response);
			 }).catch(err => {
			 	console.log('request file list fail');
			 });
}
export {fileLists};