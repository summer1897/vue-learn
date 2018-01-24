import axios from 'axios'
import store from '@/store/store'
import router from '@/router/index'
import { Loading, Message } from 'element-ui'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:9000/central';
var _loadinginstace;

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
        return response;
    },
    error => {
    	_loadinginstace.close();
    	Message.error({
    		message: '加载失败'
    	});
    	console.log("error:",error.response);
        if (error.response) {
        	var _statsu = error.response.status;
        	console.log("status code is: ",_statsu);
            switch (_statsu) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(constants.LOGOUT);
                    router.replace({
                        path: constants.LOGIN_URL,
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response)
    });

export default axios;