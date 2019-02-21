import Vue from 'vue'
import Router from 'vue-router'
import DynamicText from '@/components/DynamicText'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Dynamic Text',
			component: DynamicText,
		},
	],
})
