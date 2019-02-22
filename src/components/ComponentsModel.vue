<template>
	<div class="section-components-model">
		<h1>Components Model</h1>
		
		<hr>
		<h2>Communication between a component and a parent element</h2>
		<p>To allow a component to be bound to a data source, you need to enable the <code>v-model</code> directive on a custom component:</p>
		<ol>
			<li>White-list a <code>value</code> property on the component <code>props</code> list</li>
			<li>Emit an <code>input</code> event, passing the updated value as an argument</li>
		</ol>
		<p><output>{{ number }}</output></p>
		<number-input v-model="number"></number-input>
		
		<h3>Using a different prop name or event</h3>
		<p>If you want to use a different <code>props</code> name and/or trigger the changes on an event different than <code>input</code>, you can add a <code>model</code> property on the component to map out these changes.</p>
		<p>This property is an object with a <code>prop</code> property that defines the variable name the bound value will receive when sent to the component, and an <code>event</code> property which defines which event will be used to send the data out of the component.</p>
		<p>For example: <code>model: {prop: 'checked', event: 'change'}</code>.</p>
		<p><output>{{ boolean }}</output></p>
		<boolean-input v-model="boolean"></boolean-input>
		
		<hr>
		<h2>Communication between components</h2>
		<p>If you need to have components that don't have a parent-child relationship to communicate with each other, you can create an empty Vue instance and trigger/listen events from that instance:</p>
		<ol>
			<li>Create an empty Vue instance on the main scope: <code>let bus = new Vue();</code></li>
			<li>Emit an event from within component 1: <code>bus.$emit( 'price-updated', 1 );</code></li>
			<li>Listen to the event from within component 2: <code>bus.$on( 'price-updated', newPrice => alert(newPrice) )</code></li>
		</ol>
		
		<hr>
		<h2><code>props</code> validation</h2>
		<p>When defining the <code>props</code> of a component you can pass an object instead of an array, this lets you add validation rules for each property.</p>
		<p>The keys of the object represent the names of the white-listed properties, and the values represent their validation rules, the options are:</p>
		<ul>
			<li>Pass a data type to indicate that the passed property needs to be of that type: <code>props: {number: Number}</code></li>
			<li>Pass an array with data types to allow either of those types: <code>props: {number: [Number, String]}</code></li>
			<li>Pass <code>null</code> to allow any data type: <code>props: {number: null}</code></li>
			<li>Pass an object to define extra validation rules:
				<ul>
					<li><code>type</code> defines which data type is expected (same as the previous rules)</li>
					<li><code>required</code> is a boolean value that indicates whether or not the property is required</li>
					<li><code>default</code> sets a default value for the property in case none is passed by the component tag</li>
					<li><code>validator</code> sets a callback function that is applied to the passed value, in which you can run your own custom validation rules, it needs to return a boolean value</li>
				</ul>
			</li>
		</ul>
		<p>Vue will emit warnings whenever a property validation rule fails.</p>
		<ul>
			<li>Fails validation (required property missing, defaults to 25): <code>&lt;required-input&gt;</code> = <required-input></required-input></li>
			<li>Fails validation (number must be at least 10): <code>&lt;required-input number="5"&gt;</code> = <required-input number="5"></required-input></li>
			<li>Passes validation: <code>&lt;required-input number="10"&gt;</code> = <required-input number="10"></required-input></li>
		</ul>
	</div>
</template>

<script>

// Component with default model
import Vue from 'vue'
Vue.component('number-input', {
	props: ['value'],
	template: `
		<p class="number-input">
			<label>
				Number input:
				<input type="number" :value="value" @input="updateValue">
			</label>
		</p>`,
	methods: {
		updateValue: function(e) {
			this.$emit( 'input', Number( e.target.value ) );
		},
	},
});

// Component with custom model
Vue.component('boolean-input', {
	model: {
		prop: 'checked',
		event: 'change',
	},
	props: ['checked'],
	template: `
		<p class="boolean-input">
			<label>
				Boolean input:
				<input type="checkbox" :checked="checked" @input="updateValue">
			</label>
		</p>`,
	methods: {
		updateValue: function(e) {
			this.$emit( 'change', e.target.checked );
		},
	},
});

// Component with props validation
Vue.component('required-input', {
	props: {
		number: {
			type: [Number, String],
			required: true,
			default: 25,
			validator: value => value >= 10,
		},
	},
	template: '<output class="required-input">{{ number }} * 2 = {{ number * 2 }}</output>',
});

// Export current component
export default {
	name: 'ComponentsModel',
	data () {
		return {
			number: 10,
			boolean: false,
		}
	},
}
</script>

<style>
	.number-input,
	.boolean-input {
		padding: 0.5em 1em;
		border-radius: 3px;
		background: #EEE;
	}
</style>
