import Vue from 'vue'
import store from '@/store/store'
import Router from 'vue-router'
import {constants} from '@/constant/constant'
import AppLayout from '@/components/AppLayout'
import AppUserManager from '@/components/user/AppUserManager'
import AppRoleManager from '@/components/role/AppRoleManager'
import AppPermissionManager from '@/components/permission/AppPermissionManager'
import AppTreeMenu from '@/components/permission/AppTreeMenu'
import PageNotFound from '@/components/error/AppPageNotFound'
import AppLogin from '@/components/AppLogin'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'AppLayout',
      meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: AppLayout,
      children: [
        {
          name: 'AppUserManager',
          path: '/user/list.vhtml',
          component: AppUserManager
        },
        {
          name: 'AppRoleManager',
          path: '/role/list.vhtml',
          component: AppRoleManager
        },
        {
          name: 'AppPermissionManager',
          path: '/permission/list.vhtml',
          component: AppPermissionManager
        }
      ]
    },
    {
      path: constants.LOGIN_URL,
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/error/404.vhtml',
      name: 'PageNotFound',
      component: PageNotFound
    }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem(constants.ACCESS_TOKEN)) {
    // console.log('token',window.localStorage.getItem(constants.ACCESS_TOKEN));
    store.commit(constants.LOGIN, 
      window.localStorage.getItem(constants.ACCESS_TOKEN));
}

const router = new Router({
  routes
});

router.beforeEach((to,from,next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
      if (store.state.token) {
        next();
      } else {
        console.log('full path: ',to.fullPath);
        next({
          path: constants.LOGIN_URL,
          query: {redirect: to.fullPath}
        });
      }
  } else {
    next();
  }
});

export default router;
