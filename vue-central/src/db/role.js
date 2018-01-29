import {fetchGet,fetchPost} from './dao'

export const roleDao = {
	getRolesByPage(url,params) {
		return fetchGet(url,params).then(res => {
			return res;
		});
	},
	getAllAvailableInfos(url,params) {
		return fetchGet(url,params).then(res => {
			return res;
		});
	},
	getLikeName(url,params) {
		return fetchGet(url,params).then(res => {
			return res;
		});
	},
	addRole(url,params) {
		return fetchPost(url,params).then(res => {
			return res;
		});
	},
	deleteRoles(url,params) {
		return fetchGet(url,params).then(res => {
			return res;
		});
	},
	updateRole(url,params) {
		return fetchPost(url,params).then(res => {
			return res;
		});
	}
}