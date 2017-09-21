import Axios from 'axios'

export default {
	fetch (requestPath,_this) {
		var _data = '';
		Axios.get(requestPath)
				.then(function (response) {
					console.log(response.data);
					// _data = response.data;
					this.resources = response.data;
					// return JSON.stringify(response);
				}.catch(function (error){
					console.log('error');
					console.log(error);
				});
		// console.log("resources in ResourceDao",JSON.stringify(_data));
		// return JSON.stringify(_data);
					
	}
}