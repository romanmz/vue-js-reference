import Vue from 'vue'
import Router from 'vue-router'
import DynamicText from '@/components/DynamicText'
import AttributeDirectives from '@/components/AttributeDirectives'
import ControlFlow from '@/components/ControlFlow'
import Events from '@/components/Events'
import Forms from '@/components/Forms'
import Components from '@/components/Components'
import ComponentsData from '@/components/ComponentsData'
import ComponentsModel from '@/components/ComponentsModel'
import ComponentsContent from '@/components/ComponentsContent'
import ComponentsDynamic from '@/components/ComponentsDynamic'
import Animations from '@/components/Animations'
import RenderFunction from '@/components/RenderFunction'
import ReusableSettings from '@/components/ReusableSettings'

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
		{
			path: '/forms/',
			name: 'Forms',
			component: Forms,
		},
		{
			path: '/components/',
			name: 'Components',
			component: Components,
		},
		{
			path: '/components/data/',
			name: 'Components Data',
			component: ComponentsData,
		},
		{
			path: '/components/model/',
			name: 'Components Model',
			component: ComponentsModel,
		},
		{
			path: '/components/content/',
			name: 'Components Content',
			component: ComponentsContent,
		},
		{
			path: '/components/dynamic/',
			name: 'Dynamic Components',
			component: ComponentsDynamic,
		},
		{
			path: '/animations/',
			name: 'Animations',
			component: Animations,
		},
		{
			path: '/render-function/',
			name: 'Render Function',
			component: RenderFunction,
		},
		{
			path: '/reusable-settings/',
			name: 'Reusable Settings',
			component: ReusableSettings,
		},
	],
})
