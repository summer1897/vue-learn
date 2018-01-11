import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Home from '@/components/home'
import UserList from '@/components/user/list'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'history',
  base: '/boom/',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
      	{
  	  		path: '',
  	  		name: 'Home',
  	  		component: Home
  		  },
        {
          name: 'UserList',
          path: '/user/list',
          component: UserList
        }
      ]
    }
  ]
})
