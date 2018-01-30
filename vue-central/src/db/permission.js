import {fetchGet,fetchPost} from './dao'

export const permissionDao = {
    getAllTreeNodes(url,params) {
        return fetchGet(url,params).then(res => {
            return res;
        });
    }
};
