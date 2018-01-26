import axios from 'axios'
import store from '@/store/store'
import router from '@/router/index'
import { Loading, Message } from 'element-ui'
import {constants} from '@/constant/constant'

// axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:9000/central';
var _loadinginstace;

function checkResponse(response) {
    if (response && response.data) {
        var _status = response.data.code;
        // console.log('status:',response.data.code);
        switch(_status) {
            case 400:
                console.log('400 error');
                break;
            case 401:
                console.log('401 error');
                break;
            case 403:
                console.log('403 error');
                break;
            case 404:
                console.log('404 error');
                break;
            case 405:
                console.log('405 error');
                break;
            case 500:
                console.log('500 error');
                break;
            case 502:
                console.log('502 error');
                break;
            case 503:
                console.log('503 error');
                break;
            case 504:
                console.log('504 error');
                break;
        }
    }
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
    	// element ui Loading方法
 		_loadinginstace = Loading.service({ fullscreen: true });
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
    	_loadinginstace.close();
    	Message.error({
    		message: '加载超时'
    	});
        return Promise.reject(err);
});

// http response 拦截器
axios.interceptors.response.use(
    response => {
    	_loadinginstace.close();
        // console.log('response: ',response);
        checkResponse(response);
        return response;
    },
    error => {
    	_loadinginstace.close();
    	Message.error({
    		message: '加载失败'
    	});
        router.replace({
                        path: constants.LOGIN_URL,
                        query: {redirect: router.currentRoute.fullPath}
                    });
        return Promise.reject(error.response)
});

export default axios;