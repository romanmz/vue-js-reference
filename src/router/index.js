import Vue from 'vue'
import Router from 'vue-router'
import Basics from '@/components/Basics'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Basics',
			component: Basics,
		},
	],
})
