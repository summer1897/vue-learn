import {fetchPost} from './dao'

export const loginDao = {
	login(url,params) {
		return fetchPost(url,params).then(res => {
			return res;
		})
	}
}