import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import 'swiper'

Vue.use(VueRouter)
Vue.use(Resource);

const routes = [{
		path: '/index',
		component: resolve => require(['./App'], resolve),
		children: [{
			path: 'my',
			component: resolve => require(['./components/my/index'], resolve)
		}, {
			path: 'articleList',
			component: resolve => require(['./components/article-list/index'], resolve)
		}, {
			path: 'eatList',
			component: resolve => require(['./components/eat-list/index'], resolve)
		}, {
			path: 'travelList',
			component: resolve => require(['./components/travel-list/index'], resolve)
		}]
	}, {
		path: '/add',
		component: resolve => require(['./components/article-write/index'], resolve),
	}]

const router = new VueRouter({
	routes
})
const app = new Vue({
	router
}).$mount('#app')