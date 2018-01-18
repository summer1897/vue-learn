import {fetchGet,fetchPost} from './dao'

export const userDao = {
	getUserMenus(url,params) {
		return fetchGet(url,params).then(res => {
			// console.log(res.data);
			return res.data;
		});
	},
	getUserList(url,params) {
		return fetchGet(url,params).then(res => {
			return res.data;
		});
	},
	getLikeUserName(url,params) {
		return fetchGet(url,params).then(res => {
			return res.data;
		});
	}
}
