<template>
	<div class="section-components-dynamic">
		<h1>Dynamic Components</h1>
		
		<hr>
		<h2>Switching components</h2>
		<p>We've learned about the <code>is</code> attribute to indicate that the current tag needs to be replaced with a given component, e.g. <code>&lt;div is="my-component"&gt;</code>.</p>
		<p>Like with any other attributes, you can make this dynamic by adding a <code>v-bind</code> directive, e.g. <code>:is="currentComponent"</code>.</p>
		<ul>
			<li><code>simple-component-1</code> = <simple-component-1></simple-component-1></li>
			<li><code>simple-component-2</code> = <simple-component-2></simple-component-2></li>
			<li><code>component :is="currentComponent"</code> = <component :is="currentComponent"></component></li>
		</ul>
		<p>This way if the value used to determine the component to load changes during runtime, the component gets re-rendered automatically:</p>
		<p><button class="button" @click="switchCurrentComponent">Switch current component</button></p>
		<p>When using dynamic components you can use any tag as placeholder, but best practice is to use <code>&lt;component&gt;</code>.</p>
		
		<h3>Preserving state</h3>
		<p>By default, whenever you switch components their data is destroyed and created from scratch every time. If you want to preserve the state of a component, wrap it inside a <code>&lt;keep-alive&gt;</code> tag.</p>
		<ul>
			<li>without <code>&lt;keep-alive&gt;</code> = <component :is="currentComponent" show-input="1"></component></li>
			<li>with <code>&lt;keep-alive&gt;</code> = <keep-alive><component :is="currentComponent" show-input="1"></component></keep-alive></li>
		</ul>
		
		<hr>
		<h2>Asynchronous components</h2>
		<p>There can be cases where components are expensive or need to wait for external data to load, to handle those cases you can create an asynchronous component by passing a function instead of an object.</p>
		<p>That function works as a "promise", meaning it's going to receive two callback functions you need to trigger whenever the component is ready to be rendered, or if it failed to load the necessary data. If the promise is resolved then you pass the configuration object for the component as a response.</p>
		<ul>
			<li>Async component that succeeds: <async-component></async-component></li>
			<li>Async component that fails: <async-component-failed></async-component-failed></li>
		</ul>
		
		<h3>Advanced settings</h3>
		<p>In the previous examples, the component doesn't display anything while it waits for the async function to be resolved, or if the data fails to be loaded correctly.</p>
		<p>To fix this, you can create a holder component by passing a function that returns a configuration object with the following settings:</p>
		<ul>
			<li><code>component</code>: the async component we want to load (you need to pass it as a <code>Promise</code>)</li>
			<li><code>loading</code>: the component to display while we wait for a response from the async component</li>
			<li><code>error</code>: the component to display in case there's an error with the async component</li>
			<li><code>delay</code>: how long to wait (in ms) before showing the "loading" component. Defaults to 200ms</li>
			<li><code>timeout</code>: if a timeout limit is provided (in ms), and the async component fails to load within that time, then the request will be cancelled and the error component will be displayed</li>
		</ul>
		<ul>
			<li>Async holder that succeeds: <async-holder></async-holder></li>
			<li>Async holder that fails: <async-holder-failed></async-holder-failed></li>
		</ul>
	</div>
</template>

<script>

// Simple components for testing
let simpleComponent1 = {
	name: 'simple-component-1',
	props: ['showInput'],
	data () {
		return {
			text: 'Lorem ipsum',
		}
	},
	template: `
		<span>
			<output>{{ text }}</output>
			<input v-if="showInput" type="text" v-model="text">
		</span>`,
}
let simpleComponent2 = {
	name: 'simple-component-2',
	props: ['showInput'],
	data () {
		return {
			text: 'Dolor sit amet ipsum',
		}
	},
	template: `
		<span>
			<output>{{ text }}</output>
			<input v-if="showInput" type="text" v-model="text">
		</span>`,
}

// Asynchronous components
let asyncComponent = (resolve, reject) => {
	setTimeout( ()=>{
		resolve({
			template: '<output>I am an asynchronous component!</output>',
		});
	}, 2000 );
}
let asyncComponentFailed = (resolve, reject) => {
	setTimeout( ()=>{
		reject( Error('component could not be loaded') );
	}, 2000 );
}

// Asynchronous holder
let asyncLoading = {
	template: `<code>LOADING!</code>`,
}
let asyncError = {
	template: `<code><strong>An Error Occurred!</strong></code>`,
}
let asyncHolder = ()=>({
	component: new Promise( asyncComponent ),
	loading: asyncLoading,
	error: asyncError,
	delay: 200,
	timeout: 3000,
})
let asyncHolderFailed = ()=>({
	component: new Promise( asyncComponentFailed ),
	loading: asyncLoading,
	error: asyncError,
	delay: 200,
	timeout: 3000,
})

// Export current component
export default {
	name: 'ComponentsDynamic',
	data () {
		return {
			currentComponent: 'simple-component-1',
		};
	},
	components: {
		simpleComponent1,
		simpleComponent2,
		asyncComponent,
		asyncComponentFailed,
		asyncHolder,
		asyncHolderFailed,
	},
	methods: {
		switchCurrentComponent() {
			this.currentComponent = this.currentComponent === 'simple-component-1' ? 'simple-component-2' : 'simple-component-1';
		},
	},
}
</script>

<style>
</style>
