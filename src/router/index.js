import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import MyVuex from '@/components/Vuex'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		}, {
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
		},{
			path: '/index',
			name: 'Index',
			component: Index
		},{
			path: '/vuex',
			name: 'Vuex',
			component: MyVuex
		}
	]
})
