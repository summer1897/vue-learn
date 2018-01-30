// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import axios from '@/db/http'
import ElementUI from 'element-ui'
import EasyScroll from 'easyscroll'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EasyScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
  	Bus: new Vue()
  }
})
