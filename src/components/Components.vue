<template>
	<div class="section-components">
		<h1>Components</h1>
		
		<hr>
		<h2>Registering a component</h2>
		<p>Components are custom HTML elements you can register with encapsulated functionality, which then you can reuse on other places of your application.</p>
		<p>Use the <code>Vue.component()</code> method to register a new component, or load a <code>.vue</code> file if you're using webpack.</p>
		<p>Vue components are also Vue instances, so they accept the same options (including lifecycle hooks) as the main Vue instance, except that it also allows a "props" property (see below).</p>
		<p>Components MUST be registered before running a <code>new Vue()</code> instance that contains the custom element.</p>
		
		<h3>The <code>props</code> property</h3>
		<p>For better encapsulation of code, components need to white-list the properties they can receive from the parent (a component should never try to access the parent's data directly).</p>
		<p>When defining the template for the component, you can only use properties defined as <code>data</code> or <code>props</code>, if there's overlap then <code>props</code> will be used over <code>data</code>.</p>
		
		<h3>Using local components</h3>
		<p>Using <code>Vue.component()</code> registers a component globally, but you may want to have some components be available only on certain parts of the application.</p>
		<p>To create a local component, simply create a plain object with the normal Vue settings, including the <code>template</code> property, then you manually pass this object to any <code>Vue</code> instances that need to use it by listing it on the <code>components</code> property.</p>
		<p>Also include a <code>name</code> property to define the default name of the component (equivalent to the first argument of <code>Vue.component()</code>). This name can be overriden by the Vue instance that loads it in its <code>components</code> property.</p>
		<local-component></local-component>
		
		<h3>Using <code>.vue</code> single-file components</h3>
		<p>The normal workflow of defining global components with <code>Vue.component()</code> and initialising an app with <code>new Vue()</code> works fine on small projects, but on bigger projects the disadvantages of that workflow become apparent:</p>
		<ul>
			<li>Global component definitions can cause conflicts with previous definitions</li>
			<li>You can only define templates as a string property, which can be ugly and lacks syntax highlighting</li>
			<li>You can't encapsulate CSS in the same way as HTML and scripts</li>
			<li>The lack of transpiling process prevents you from using modern Js syntax</li>
		</ul>
		<p>All of this can be solved by using <code>.vue</code> files with webpack's vue-loader package, which also has some additional advantages:</p>
		<ul>
			<li>It supports the use of scoped CSS</li>
			<li>It allows you to precompile the CSS and Javascript of all components into single files</li>
		</ul>
		<p>Read the <a href="https://vue-loader.vuejs.org/en/">vue-loader</a> and <a href="https://vuejs-templates.github.io/webpack/">Vue.js webpack</a> documentation.</p>
		<p>You may also need to install the scss loader, just run <code>$ npm i sass-loader node-sass --save-dev</code>.</p>
		
		<hr>
		<h2>Passing classes and styles</h2>
		<p><code>class</code> names added to the template markup of a component will always be included on the final input, if the html tag that calls the component has its own classes, then all classes from both the component and the html will be included.</p>
		<p>The <code>style</code> attribute works the same.</p>
		
		<hr>
		<h2>Changing the root element of the component</h2>
		<p>If for some reason having a custom component in your markup is causing issues (generally markup validation issues), you can add a standard HTML tag instead, and then have Vue convert it to the correct component by passing a <code>is</code> attribute with the name of the component, e.g: <code>&lt;section is="todo-item"&gt;</code>.</p>
		
		<hr>
		<h2>Direct DOM manipulation</h2>
		<p>In general you shouldn't be doing direct DOM manipulation, but in case you need to you'll need to wait for the next Vue's "tick" to make sure you're accessing the most up to date version of the DOM element.</p>
		<p>For this you need to call the <code>Vue.nextTick()</code> static method, or the <code>this.$nextTick()</code> instance method, both take a callback function as an argument, which will be triggered once it's safe to perform DOM manipulations.</p>
		
		<h3>Making child elements available for scripting</h3>
		<p>If you want certain elements within a component to be made easily available for scripting, add a <code>ref</code> attribute to them with a unique value. You can then access them from the component code by inspecting the <code>this.$refs</code> property.</p>
		
		<h3>Testing DOM elements selection and manipulation</h3>
		<p ref="dom-element">This is a regular paragraph with a <code>ref</code> attribute.</p>
		<local-component ref="component-element"></local-component>
		<p>
			<button class="button" @click="checkRefs">Check marked elements</button>
			<button class="button" @click="updatedRefs">Update marked elements</button>
		</p>
		
	</div>
</template>

<script>

// Create local component
let simpleParagraph = {
	name: 'simple-paragraph',
	template: '<p><output>{{ text }}</output></p>',
	data() {
		return {
			text: 'This is a local component!',
		};
	},
};

// Export current component
export default {
	name: 'Components',
	components: {
		'local-component': simpleParagraph,
	},
	data () {
		return {
		}
	},
	methods: {
		checkRefs() {
			console.log( this.$refs );
		},
		updatedRefs() {
			this.$nextTick(()=>{
				this.$refs['dom-element'].innerHTML += ' UPDATED!'
				this.$refs['component-element'].$el.innerHTML += ' UPDATED!'
			})
		}
	},
}
</script>

<style>
</style>
