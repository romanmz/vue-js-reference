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
	</div>
</template>

<script>

// Simple components for testing
let simpleComponent1 = {
	name: 'simple-component-1',
	template: `<output>Lorem ipsum</output>`,
}
let simpleComponent2 = {
	name: 'simple-component-2',
	template: `<output>Dolor sit amet</output>`,
}

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
	},
	methods: {
		switchCurrentComponent: function() {
			this.currentComponent = this.currentComponent === 'simple-component-1' ? 'simple-component-2' : 'simple-component-1';
		},
	},
}
</script>

<style>
</style>
