<template>
	<div class="section-render-function">
		<h1>Render Function</h1>
		
		<hr>
		<h2>Using the <code>render</code> function</h2>
		<p>When creating a Vue instance or component, you can define template programmatically with the <code>render</code> function.</p>
		<p>If you use this option, then the regular <code>template</code> definition will be ignored.</p>
		<p>The render function will receive a <code>createElement</code> function which you can use to create the DOM elements</p>
		<h3>Arguments accepted by the <code>createElement</code> function</h3> 
		<ol>
			<li>The tag name of the element to be created
				<ul>
					<li>As a string, e.g. <code>'h1'</code></li>
					<li>An object with component settings</li>
					<li>A function that returns either of the previous two</li>
				</ul>
			</li>
			<li>An object with settings to be added to the tag (optional)
				<ul>
					<li><code>class</code>: equivalent to <code>v-bind:class</code></li>
					<li><code>style</code>: equivalent to <code>v-bind:style</code></li>
					<li><code>attrs</code>: regular HTML attributes</li>
					<li><code>domProps</code>: DOM properties</li>
					<li><code>props</code>: same as in the component definition settings</li>
					<li><code>on</code>: list of attached event handlers (modifiers not supported)</li>
					<li><code>nativeOn</code>: list of handlers for native events (for components only)</li>
					<li><code>directives</code>: list of directives to add to the tag (each directive is an object with <code>name</code>, <code>expression</code>, <code>value</code>, <code>arg</code> and <code>modifiers</code>)</li>
					<li><code>key</code>: same as adding the attribute on the html code</li>
					<li><code>ref</code>: same as adding the attribute on the html code</li>
					<li><code>slot</code>: assigns the element to a component slot</li>
					<li><code>scopedSlots</code>
						<ul>
							<li>creates child elements that are assigned to component slots</li>
							<li>this property has to be an object, with each key representing the slot to be targeted (<code>default</code> or custom)</li>
							<li>each slot takes a callback function which will receive a data object which contains the scoped data exposed by the component</li>
							<li>the callback function needs to return a single VNode, or an array</li>
							<li>e.g. <code>scopedSlots: {default: props => createElement( 'span', props.text )}</code></li>
						</ul>
					</li>
				</ul>
			</li>
			<li>Child elements (optional)</li>
		</ol>
		<h3>Features not supported by <code>render</code></h3>
		<p>The following template features are not available since you can easily replicate them with plain js:</p>
		<ul>
			<li><code>v-if</code>, <code>v-else-if</code>, <code>v-else</code></li>
			<li><code>v-for</code></li>
			<li><code>v-model</code></li>
		</ul>
		<p>The only supported event handler modifiers are:</p>
		<ul>
			<li><code>&.click</code>  == <code>click.passive</code></li>
			<li><code>!.click</code>  == <code>click.capture</code></li>
			<li><code>~.click</code>  == <code>click.once</code></li>
			<li><code>~!.click</code> == <code>click.once.capture</code></li>
		</ul>
		<h3>Accessing child elements from within <code>render</code></h3>
		<p>If you need to access the tags contained within the element being rendered, use the <code>this.$slots</code> property.</p>
		<h3>Component test:</h3>
		<repeat-content repeat="3">This is repeated content</repeat-content>
		
	</div>
</template>

<script>

// Example of component with 'render' function
let repeatContent = {
	props: {
		repeat: {
			type: [Number, String],
			required: true,
		},
	},
	render( createElement ) {
		let children = [];
		for(let i=0; i<this.repeat; i++) {
			children.push( createElement( 'li', null, this.$slots.default ) )
		}
		return createElement( 'ul', {class: `repeat-${this.repeat}`}, children )
	},
}

// Export current component
export default {
	name: 'RenderFunction',
	components: {repeatContent},
}
</script>

<style>
</style>
