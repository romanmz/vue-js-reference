import Vue from 'vue'
import Router from 'vue-router'
import DynamicText from '@/components/DynamicText'
import AttributeDirectives from '@/components/AttributeDirectives'
import ControlFlow from '@/components/ControlFlow'
import Events from '@/components/Events'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Dynamic Text',
			component: DynamicText,
		},
		{
			path: '/attributes/',
			name: 'Attribute Directives',
			component: AttributeDirectives,
		},
		{
			path: '/control-flow/',
			name: 'Control Flow',
			component: ControlFlow,
		},
		{
			path: '/events/',
			name: 'Events',
			component: Events,
		},
	],
})
