import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const vueRouter = new VueRouter({
	routes: [
		{
			name: 'home',
			path: '/index.html',
			component: require('../components/Hello')
		}
	]
})

export default vueRouter