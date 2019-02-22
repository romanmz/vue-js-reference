<template>
	<div class="section-control-flow">
		<h1>Control Flow</h1>
		
		<hr>
		<h2>Conditional Directives</h2>
		
		<h3><code>v-if</code>, <code>v-else-if</code> and <code>v-else</code> Directives</h3>
		<p>Use these directives to show or hide content based on a given instance property, you can add those directives on a regular element, or on a &lt;template&gt; tag if you need them to apply to multiple elements at once:</p>
		<template v-if="toggle1">
			<p><strong>Optional Content 1</strong></p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra interdum dictum. Aliquam eget lacus id justo elementum aliquam sit amet eu nulla.</p>
		</template>
		<template v-else-if="toggle2">
			<p><strong>Optional Content 2</strong></p>
			<p>Nunc tempus, arcu ac scelerisque consectetur, diam elit cursus sapien, sit amet sollicitudin lorem justo a est. Praesent sed mattis nulla.</p>
		</template>
		<template v-else>
			<p><strong>Optional Content 3</strong></p>
			<p>Curabitur pulvinar lacinia aliquet. Pellentesque accumsan scelerisque hendrerit. Vivamus mollis, nibh ac elementum ultricies, neque nisl elementum nisl.</p>
		</template>
		
		<h3><code>Key</code> Attribute</h3>
		<p>When toggling between elements Vue will try to reuse existing elements as much as possible to avoid having to constantly generate and inject new elements, in some cases this may cause some info to be incorrectly transferred from one state to the other, to make sure an element is always refreshed from scratch, add a <code>key</code> attribute with a unique value to it.</p>
		
		<h3><code>v-show</code> Directive</h3>
		<p>You can also use the <code>v-show</code> directive which does something similar but with some small differences:</p>
		<ul>
			<li>the element will always exist in the DOM and will be toggled using just CSS</li>
			<li>you can't use any 'else' statements.</li>
			<li><code>v-show</code> has higher initial rendering costs and lower toggle costs, while <code>v-if</code> is the opposite</li>
		</ul>
		<p>Example: <span v-show="toggle1">Toggle this element</span>.</p>
		
		<hr>
		<ul>
			<li><label>Toggle 1 <input type="checkbox" v-model="toggle1"></label></li>
			<li><label>Toggle 2 <input type="checkbox" v-model="toggle2"></label></li>
		</ul>
		
		<hr>
		<h2>Loops</h2>
		<h3><code>v-for</code> with arrays and objects</h3>
		<p>Use the <code>v-for</code> directive to iterate over a collection of items in an array like this <code>v-for="(value, i) in array"</code>.</p>
		<p>You can also iterate over objects, which will include the property names in the loop <code>v-for="(value, key, i) in object"</code>.</p>
		<p>When the data changes in the linked array/object, the markup is reused in the same way as in <code>v-for</code> directives, you can also add a key to force the object to be re-rendered, but instead of passing a simple <code>key</code> attribute you need to use the <code>v-bind</code> directive: <code>v-bind:key="unique-key"</code>.</p>
		<p>You can apply methods to the collection to filter or modify the items before outputting them.</p>
		<p>Example: <code>v-for="(todo, i) in getOddItems( todos )" :key="todo.id"</code> =</p>
		<ul>
			<li v-for="(todo, i) in getOddItems( todos )" :key="todo.id">
				<input v-model="todo.text"> Item: {{ i }} – ID: {{ todo.id }} – {{ todo.text }}
			</li>
		</ul>
		
		<h3><code>Vue.set()</code> to update data</h3>
		<p>Vue will automatically update the markup of looped elements to reflect any changes in the data, but it cannot detect changes made with the subscript syntax <code>myArray[index] = value</code>.</p>
		<p>To update an object without issues, use the <code>Vue.set( myArray, index, value )</code> method, or the standard js method <code>myArray.splice( index, itemsToDiscard, itemsToInsert )</code>.</p>
		
		<h3><code>v-for</code> with integers</h3>
		<p>You can loop through simple integer values <code>v-for="n in 10"</code>:</p>
		<p><output v-for="n in 10"> Item {{ n }} </output></p>
		
		<h3>Combining <code>v-for</code> and <code>v-if</code></h3>
		<p>If an element has both a <code>v-for</code> and <code>v-if</code> directives, then the loop will run as usual, but only items matching the <code>v-if</code> directive will be rendered.</p>
		<p>If you need to toggle the whole list on and off, add the <code>v-if</code> directive to the parent element.</p>
	</div>
</template>

<script>
export default {
	name: 'ControlFlow',
	data () {
		return {
			toggle1: true,
			toggle2: true,
			todos: [
				{ id: 1, text: 'Learn JavaScript' },
				{ id: 2, text: 'Learn Vue' },
				{ id: 3, text: 'Build something awesome' },
				{ id: 4, text: 'Conquer the world' },
				{ id: 5, text: 'Travel the galaxy' },
			],
		}
	},
	methods: {
		getOddItems: function( items ) {
			return items.filter( (todo, i) => i%2 === 0 );
		},
	},
}
</script>

<style>
</style>
