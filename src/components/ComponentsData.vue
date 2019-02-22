<template>
	<div class="section-components-data">
		<h1>Components Data</h1>
		
		<hr>
		<h2>Passing data</h2>
		<p>Yo may want to pass data from a parent element to a child component, to do this you have a few options:</p>
		
		<h3>Using simple <code>attribute=value</code> pairs</h3>
		<p>Attribute names that match one of the defined component <code>props</code> will pass down their values as simple static data, and won't be added to the generated markup.</p>
		<p>The rest of the attributes will just be added to the parent element of the component as is.</p>
		<p>Example: <code>text="Buy lactose-free milk" completed="true" extra-attr="foo"</code> =</p>
		<todo-item text="Buy lactose-free milk" completed="true" extra-attr="foo" use-local="true"></todo-item>
		
		<h3>Using data binding in a property <code>v-bind:property</code></h3>
		<h4>Simple reference (not recommended)</h4>
		<ul>
			<li>The component will make a local copy of the data, independent from other components</li>
			<li>Any changes will be kept locally and will not update the parent's data</li>
			<li>If the parent's data changes at any point, all components will be reset to match the new parent data (this can happen at unexpected times, which is why this is not best practice)</li>
		</ul>
		<p>Example: <code>:text="message"</code> =</p>
		<todo-item :text="message"></todo-item>
		<p><label>Main Message: <input type="text" v-model="message"></label></p>
		
		<h4>Making a local copy of the data</h4>
		<p>If you want to keep the data independent on each component and not worry about losing the changes at unexpected times, then make a local copy with a different property name inside the <code>data()</code> call.</p>
		<p>Example: <code>:text="message"</code> (with internal logic to copy <code>message</code> to another data property) =</p>
		<todo-item :text="message" use-local="true"></todo-item>
		<p><label>Main Message: <input type="text" v-model="message"></label></p>
		
		<h4>Synced reference</h4>
		<p>If you actually want to mutate the parent's data from within an individual component:</p>
		<ol>
			<li>Add the <code>.sync</code> modifier to the binding directive</li>
			<li>Call the <code>this.$emit( 'update:propertyName', newValue )</code> method somewhere within the component</li>
		</ol>
		<p>Example: <code>:text.sync="message"</code> (with internal logic to trigger the <code>this.$emit()</code> method) =</p>
		<todo-item :text.sync="message" use-synced="true"></todo-item>
		<p><label>Main Message: <input type="text" v-model="message"></label></p>
		
		<h4>Objects and arrays</h4>
		<p>Objects work differently since they are passed as reference (as per js default behaviour), so you can do a simple data binding and whenever the object properties are updated the changes will be reflected everywhere the object is being used.</p>
		<p>Example: <code>:text="messageObject"</code></p>
		<todo-item :text="messageObject"></todo-item>
		<p><label>Main Message Object: <input type="text" v-model="messageObject.text"></label></p>
		
		<h3>Using general data binding with <code>v-bind</code></h3>
		<p>If you pass an object using <code>v-bind</code> without targeting a specific property, then all properties of the object will be passed down to the component</p>
		<ul>
			<li>Properties registered on the component as <code>props</code> will be made available for scripting</li>
			<li>Any other properties will be added to the component's parent element as regular <code>attribute=value</code> pairs</li>
		</ul>
		
		<hr>
		<h2>Emitting data</h2>
		<p>A custom component can emit events using the <code>this.$emit( 'eventname', data )</code> method. To listen to those events when using the component:</p>
		<ul>
			<li>You can attach listeners with the <code>v-on</code> directive on the component call, like with any other elements and events, e.g: <code>&lt;my-component v-on:eventname="callback"&gt;</code></li>
			<li>By default this only works with events specifically emitted by the custom component, native events are not triggered, e.g: this would not work <code>&lt;my-component v-on:click="callback"&gt;</code></li>
			<li>If you do need to listen to native events, you have to add the <code>.native</code> modifier, e.g: <code>&lt;my-component v-on:click.native="callback"&gt;</code></li>
		</ul>
		<p><output>{{ message }}</output></p>
		<todo-item text="Emit event on input" v-on:todoupdate="catchEvent" v-on:click.native="clickEvent"></todo-item>
	</div>
</template>

<script>

// Registering a new component
import Vue from 'vue'
Vue.component('todo-item', {
	props: ['text', 'completed', 'useLocal', 'useSynced'],
	template: `
		<div class="todo-item margin-1">
			<template v-if="typeof text == 'object'">
				<label><input type="checkbox" v-model="completed"> {{ text.text }}</label> &nbsp; <input type="text" @input="emitEvent" v-model="text.text">
			</template>
			<template v-else-if="useLocal">
				<label><input type="checkbox" v-model="completed"> {{ localText }}</label> &nbsp; <input type="text" @input="emitEvent" v-model="localText">
			</template>
			<template v-else-if="useSynced">
				<label><input type="checkbox" v-model="completed"> {{ text }}</label>      &nbsp; <input type="text" @input="emitEvent" v-model="text">
			</template>
			<template v-else>
				<label><input type="checkbox" v-model="completed"> {{ text }}</label>      &nbsp; <input type="text" @input="emitEvent" v-model="text">
			</template>
		</div>`,
	data: function() {
		return {
			localText: this.text,
		}
	},
	methods: {
		emitEvent: function() {
			if( this.useSynced ) {
				this.$emit( 'update:text', this.text );
			}
			this.$emit( 'todoupdate', this.text );
		},
	},
});

// Export current component
export default {
	name: 'ComponentsData',
	data () {
		return {
			message: 'This is a dynamic message!',
			messageObject: {
				text: 'Another dynamic text!',
			},
		}
	},
	methods: {
		catchEvent: function() {
			this.message = 'emitted event!';
		},
		clickEvent: function() {
			this.message = 'native event!';
		},
	},
}
</script>

<style>
	.todo-item {
		padding: 1em;
		color: white;
		background: #333;
		border-radius: 3px;
	}
	.todo-item input {
		color: #333;
	}
</style>
