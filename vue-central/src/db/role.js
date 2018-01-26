import {fetchGet,fetchPost} from './dao'

export const roleDao = {
	getAllAvailableInfos(url,params) {
		return fetchGet(url,params).then(res => {
			return res;
		});
	}
}