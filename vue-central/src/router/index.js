import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '@/components/AppLayout'
import AppUserManager from '@/components/user/AppUserManager'
import AppTreeMenu from '@/components/permission/AppTreeMenu'
import PageNotFound from '@/components/error/AppPageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: AppLayout,
      children: [
      	{
      		name: 'AppUserManager',
      		path: '/user/list',
      		component: AppUserManager
      	}
      ]
    }
  ]
})
