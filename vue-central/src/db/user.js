import {fetchGet,fetchPost} from './dao'

export const user = {
	getUserMenus(url,params) {
		return fetchGet(url,params).then(res => {
			// console.log(res.data);
			return res.data;
		});
	}
}
