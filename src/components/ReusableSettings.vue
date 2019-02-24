<template>
	<div class="section-reusable-settings">
		<h1>Reusable Settings</h1>
		
		<hr>
		<h2>Mixins</h2>
		<p>You can create reusable default settings by passing "mixin" objects to the <code>mixins</code> property of Vue instances and components.</p>
		<p>If there's a conflict between the mixin and the instance settings, then the instance data will be used. The only exception are lifecycle hooks, which are all run one after the other (mixin hooks first, instance hooks later).</p>
		<p>This function was defined in a mixin, and then passed to the current component: <button class="button" @click="shuffleCard">Shuffle Card</button></p>
		<p>You can also define global mixins with the <code>Vue.mixin()</code> method, which will make all Vue instances and components inherit the components of that mixin automatically, but this is not best practice.</p>
		
		<hr>
		<h2>Custom directives</h2>
		<p>You can create your own custom directives like <code>v-model</code>, <code>v-show</code>, etc…, to register global directives use the <code>Vue.directive()</code> method, to register them only for particular instances or components create a configuration object and pass it to their <code>directives</code> property.</p>
		<p>Any new directives you create are always prefixed with <code>v-</code>.</p>
		<p>The configuration object for a custom directive accepts the following callback functions:</p>
		<ul>
			<li><code>bind</code> is called when the directive is first bound to the element, runs only once</li>
			<li><code>inserted</code> runs every time the element is inserted into its parent node</li>
			<li><code>update</code> runs after the element has been updated, but not necessarily after the children have been updated as well</li>
			<li><code>componentUpdated</code> runs after both the element and all its children have been updated</li>
			<li><code>unbind</code> is called when the directive is unbound from the element, runs only once</li>
		</ul>
		<p>Another option is to pass a single callback function instead of an object, which will be bound automatically to the <code>bind</code> and <code>update</code> events.</p>
		<p>All callbacks receive at least three arguments: the DOM element, a binding object, and a vnode</p>
		<p>The <code>binding</code> object contains the following properties:</p>
		<ul>
			<li><code>name</code>: the name of the triggered directive (without the <code>v-</code> prefix)</li>
			<li><code>value</code>: the value passed to the attribute (resolved expression)</li>
			<li><code>expression</code>: the value passed to the attribute (unresolved expression)</li>
			<li><code>arg</code>: the argument passed to the directive, if any (keywords added after the <code>:</code> character)</li>
			<li><code>modifiers</code> the list of modifiers passed to the directive, if any (keywords added after the <code>.</code> character)</li>
		</ul>
		<p><output v-describe v-log:foo.bar="123">Testing callback functions on a custom directive</output></p>
		
	</div>
</template>

<script>

// Mixins
// ------------------------------
let cardMixin = {
	data() {
		return {
			currentNumber: 1,
			currentSuit: '♣',
		}
	},
	computed: {
		currentCard() {
			return {
				number: this.currentNumber,
				suit: this.currentSuit,
			}
		},
		numbers() {
			return [1,2,3,4,5,6,7,8,9,10,11,12,13]
		},
		suits() {
			return ['♣','♦','♥','♠']
		},
	},
	methods: {
		shuffleCard() {
			let numberIndex = Math.floor( Math.random() * this.numbers.length );
			let suitIndex = Math.floor( Math.random() * this.suits.length );
			this.currentNumber = this.numbers[numberIndex]
			this.currentSuit = this.suits[suitIndex]
			console.log( this.currentCard )
		},
	},
};


// Custom directives
// ------------------------------
let describeMixin = {
	bind( el, binding, vnode ) {},
	inserted( el, binding, vnode ) {
		console.log( `Tag name: ${el.tagName}. Number of children: ${vnode.children.length}` );
	},
	update( el, binding, vnode, oldVnode ) {},
	componentUpdated( el, binding, vnode, oldVnode ) {},
	unbind( el, binding, vnode ) {},
}
let logMixin = (el, binding, vnode) => { console.log( binding ) }


// ------------------------------
export default {
	name: 'ReusableSettings',
	mixins: [cardMixin],
	directives: {describe: describeMixin, log: logMixin},
}
</script>

<style>
</style>
