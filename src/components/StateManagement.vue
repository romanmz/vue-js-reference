<template>
	<div class="section-state-management">
		<h1>State Management</h1>
		
		<hr>
		<h2>State management with <code>vuex</code></h2>
		<p>Multiple components within the same application often share the same source data, to manage this you could create a global data object and have the components refer to that same object, however this would make debugging difficult as data can change at any time from any place without leaving a trace.</p>
		<p>To solve this, a flux-inspired state management library for Vue was developed: <a href="https://vuex.vuejs.org/">vuex.vuejs.org</a>.</p>
		<p>To install with npm: <code>$ npm i vuex --save</code></p>
		<p>To use a "state" object you initialize it with <code>new Vuex.Store()</code>.</p>
		
		<h3>Vuex.Store settings</h3>
		<ul>
			<li><code>strict</code> throws errors whenever the state is changed directly without using mutations, do not enable on production</li>
			<li><code>state</code> represents the actual application data to manage, similar to a component's <code>data</code></li>
			<li><code>getters</code> are similar to a component's <code>computed</code> properties, but you can't enable them as setters. They receive the current "state" of the store as their first argument</li>
			<li><code>mutations</code> are similar to a component's setters, they represent data updates to be performed immediately to the store's "state", but instead of calling them directly you need to trigger them with the store instance <code>commit</code> method. Mutation functions receive the current "state" of the store as their first argument</li>
			<li><code>actions</code> are similar to mutations, the differences are:
				<ul>
					<li>Actions can be asynchronous (mutations can't), so you can return a <code>Promise</code> object or write it as an <code>async</code> function</li>
					<li>Actions receive a "context" object instead of a "state" object</li>
					<li>You trigger actions with the <code>dispatch</code> method instead of <code>commit</code></li>
				</ul>
			</li>
			<li><code>namespaced</code> used for modules (see section below)</li>
			<li><code>modules</code> list of modules to load (see section below)</li>
		</ul>
		
		<h3>Vuex store instance methods</h3>
		<p>You could update the store state by directly accessing the <code>state</code> property, but this is bad practice as it doesn't keep track of where the changes are coming from, it will also throw errors when on strict mode, so use the available instance methods instead:</p>
		<ul>
			<li><code>commit</code> lets you trigger the available store mutation methods, you can pass the name of the mutation as the first argument and the parameters object as the 2nd argument, e.g. <code>store.commit( 'mymutation', {number: 1} )</code>, or you can pass a single object with the mutation name as the <code>type</code> property, e.g. <code>store.commit({ type: 'mymutation', number: 2 })</code></li>
			<li><code>dispatch</code> lets you trigger the available store actions, the syntax is the same as the <code>commit</code> method and will always return a <code>Promise</code> object</li>
			<li><code>replaceState</code> updates the entire store state</li>
			<li><code>watch</code> adds a listener function that will be triggered any time a given function's return value changes</li>
			<li><code>subscribe</code> adds a listener function that will be triggered any time a store mutation runs</li>
			<li><code>subscribeAction</code> same as <code>subscribe</code> but for actions instead of mutations</li>
			<li><code>registerModule</code> registers a dynamic module</li>
			<li><code>unregisterModule</code> unregisters a dynamic module</li>
			<li><code>hotUpdate</code> swaps new actions and mutations when using hot-reload</li>
		</ul>
		
		<h3>Mapping the store properties into component properties</h3>
		<p>You could use the store object as a global variable, but it's best practice to pass it to the main Vue instance of your application as a <code>state</code> property, this will make it automatically available on any components loaded by the application as <code>this.$store</code>.</p>
		<p>If you want to manipulate multiple state properties directly from within a component you need to map out the state properties, getters, mutations and actions manually. This can be time consuming and redundant, so Vuex has some static methods to make this task easier and cleaner.</p>
		<ul>
			<li><code>Vuex.mapState()</code> converts store state properties into functions you can pass as <code>computed</code> properties of a component</li>
			<li><code>Vuex.mapGetters()</code> converts store getters into functions you can pass as <code>computed</code> properties of a component</li>
			<li><code>Vuex.mapMutations()</code> converts store mutations into functions you can pass as <code>methods</code> of a component</li>
			<li><code>Vuex.mapActions()</code> converts store actions into functions you can pass as <code>methods</code> of a component</li>
		</ul>
		<p>All methods take arguments with the same syntax:</p>
		<ul>
			<li>An object with keys representing the name of the new component property/method to create, and values matching the store element to map, e.g. <code>Vuex.mapState({ newPropertyName: 'statePropertyName' })</code></li>
			<li>Or it can be a simple array with the names of the required store elements, which will be mapped out to the component with the same name, e.g. <code>Vuex.mapGetters([ 'getterName1', 'getterName2' ])</code></li>
			<li>When using the object syntax on <code>Vuex.mapState()</code> you also have the option to pass a callback function as a value to dynamically modify the state data before returning it, e.g. <code>Vuex.mapState({ newPropertyName: state => state.propertyName * 2 })</code>. This is not available on the other methods</li>
		</ul>
		
		<hr>
		<h2>Testing Store Data</h2>
		<p>On the main instance:</p>
		<div class="component-test">
			<ul>
				<li>User ID: <output>{{ userId }}</output></li>
				<li>User Name: <output>{{ userName }}</output></li>
				<li>Comments Count: <output>{{ commentsCount }}</output></li>
			</ul>
			<p>
				<button class="button" @click="changeName({first: 'Jane', last:'Doe'})">Change name</button>
				<button class="button" @click="increaseComments">Add comments</button>
			</p>
		</div>
		<p>On the child component:</p>
		<user-profile></user-profile>
		
		<hr>
		<h2>Modules</h2>
		<p>[pending]</p>
		
	</div>
</template>

<script>


// Creating a Vuex Store object
// ------------------------------
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use( Vuex );
const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
		userId: 1,
		userFirstName: 'John',
		userLastName: 'Smith',
		commentsCount: 12,
	},
	getters: {
		userName( state, getters ) {
			return `${state.userFirstName} ${state.userLastName}`;
		},
	},
	mutations: {
		changeName( state, data ) {
			if( state.userFirstName != 'John' && state.userLastName != 'Smith' ) {
				data.first = 'John'
				data.last = 'Smith'
			}
			state.userFirstName = data.first;
			state.userLastName = data.last;
		},
		addComment( state ) {
			state.commentsCount++;
		},
	},
	actions: {
		increaseComments( ctx ) {
			return new Promise((resolve, reject)=>{
				ctx.commit( 'addComment' )
				setTimeout( ()=>{ctx.commit( 'addComment' )}, 1000 );
				setTimeout( ()=>{ctx.commit( 'addComment' ); resolve()}, 2000 );
			})
		},
	},
});


// Creating a component for testing
// ------------------------------
const UserProfile = {
	template: `
		<div class="component-test">
			<ul>
				<li>User ID: <output>{{ userId }}</output></li>
				<li>User Name: <output>{{ userName }}</output></li>
				<li>Comments Count: <output>{{ commentsCount }}</output></li>
			</ul>
			<p>
				<button class="button" @click="changeName({first: 'Jane', last:'Doe'})">Change name</button>
				<button class="button" @click="increaseComments">Add comments</button>
			</p>
		</div>`,
	computed: {
		...Vuex.mapState(['userId', 'commentsCount']),
		...Vuex.mapGetters(['userName']),
	},
	methods: {
		...Vuex.mapMutations(['changeName']),
		...Vuex.mapActions(['increaseComments']),
	},
}


// Export current component
// ------------------------------
export default {
	name: 'StateManagement',
	store: store,
	components: { UserProfile },
	computed: {
		...Vuex.mapState(['userId', 'commentsCount']),
		...Vuex.mapGetters(['userName']),
	},
	methods: {
		...Vuex.mapMutations(['changeName']),
		...Vuex.mapActions(['increaseComments']),
	},
}
</script>

<style lang="scss">
	.component-test {
		margin: 0 0 2rem;
		padding: 1.5em;
		background: #eee;
		border-radius: 5px;
		
		> :last-child {
			margin-bottom: 0;
		}
	}
</style>
