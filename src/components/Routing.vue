<template>
	<div class="section-routing">
		<h1>Routing</h1>
		
		<hr>
		<h2>Routing with <code>vue-router</code></h2>
		<p>Routing refers to serving different content/templates depending on the current url. For simple scenarios you can build the logic with the default component settings, but for more advanced cases you can use the vue-router library: <a href="https://router.vuejs.org/">router.vuejs.org</a></p>
		<p>To install with npm: <code>npm i vue-router --save</code></p>
		<p>To use a router object you initialize it with <code>new VueRouter()</code> and to actually get it working you pass it to the <code>router</code> property of the Vue instance or component that needs it.</p>
		
		<h3>VueRouter settings</h3>
		<ul>
			<li><code>base</code> the base url folder for the app, e.g. <code>/app/</code></li>
			<li><code>linkActiveClass</code> the class name to add to menu items when they represent the current or ancestor pages</li>
			<li><code>linkExactActiveClass</code> the class name to add to menu items when they represent the current page</li>
			<li><code>parseQuery</code> Custom query string parse / stringify functions</li>
			<li><code>mode</code> Can be 'hash' or 'history', for 'history' mode you'll need to <a href="https://router.vuejs.org/en/essentials/history-mode.html">configure the correct rewrite rules</a></li>
			<li><code>fallback</code> Whether or not to fallback to 'hash' mode if 'history' mode fails</li>
			<li><code>scrollBehavior</code> callback function to handle the scroll position after switching to another route, the callback function receives three arguments:
				<ul>
					<li><code>to</code> the new route that was loaded</li>
					<li><code>from</code> the previous route</li>
					<li><code>savedPosition</code> is only received when using the back/next buttons of the browser, return it to maintain the current scrolling position</li>
					<li>Return an object with a <code>selector</code> property to scroll down to that element, with an optional <code>offset</code> property, e.g. <code>{selector: '#my-heading', offset: {x: 0, y: 10}}</code></li>
					<li>Or return a simple object with an absolute scrolling position, e.g. <code>{x: 0, y: 0}</code></li>
					<li>You can also return a <code>Promise</code> object</li>
				</ul>
			</li>
		</ul>
		
		<h3>VueRouter instance methods</h3>
		<ul>
			<li><code>beforeEach</code> registers a callback function that runs before each route is resolved</li>
			<li><code>beforeResolve</code> similar to <code>beforeEach</code> but runs after all in-component guards and async route components have been resolved, but still before the route is resolved</li>
			<li><code>afterEach</code> registers a callback function that runs after each route has been resolved</li>
			<li><code>push</code> navigates to the specified route, you can pass a string or an object with the same format as the route settings object</li>
			<li><code>replace</code> same as <code>push</code> but without registering the change on the browser history</li>
			<li>Plus a few others like <code>go</code>, <code>back</code>, <code>forward</code>, etc.</li>
		</ul>
		
		<h3>Route objects</h3>
		<p>The <code>routes</code> property takes an array of route objects, each object can have these settings:</p>
		<ul>
			<li><code>path</code> The url to enable, e.g. <code>/about-us/</code></li>
			<li><code>component</code> The component to display at this route</li>
			<li><code>components</code> In case you have set up more than one <code>&lt;router-view&gt;</code> tags, you can target different components to each of them by passing an object with key names matching the view names</li>
			<li><code>name</code> You can give the route a friendly name you can use to refer to it programmatically, useful for working with routes that can take parameters</li>
			<li><code>props</code>
				<ul>
					<li>If set to <code>true</code>, any path segments beginning with <code>:</code> will be passed as <code>props</code> for the matching component, e.g. with the path set to <code>/users/:id/</code>, if you go to <code>/users/5/</code> the router will send a prop named <code>id</code> with a value of <code>5</code> to the component.</li>
					<li>You can also pass an object, or a function that returns an object, to hardcode the props to be sent to the component for this particular route</li>
				</ul>
			</li>
			<li><code>children</code> If the component contains its own <code>&lt;router-view&gt;</code> tags, you can define child routes to target those internal views</li>
			<li><code>redirect</code>
				<ul>
					<li>If set to a string, redirects directly to that path</li>
					<li>You can also pass an object with a key <code>name</code> matching another registered route, with an optional <code>params</code> object</li>
					<li>Or it can be a function that returns either a string or an object</li>
				</ul>
			</li>
			<li><code>alias</code> defines another path that loads the same route</li>
			<li><code>meta</code> an object of meta data to make available for the component from <code>this.$route.matched</code></li>
			<li><code>beforeEnter</code> Runs before this individual route is loaded</li>
		</ul>
		
		<h3>Route-related component properties</h3>
		<ul>
			<li><code>this.$router</code>: Holds a reference to the registered router instance</li>
			<li><code>this.$route</code>: You can inspect this property to obtain information about the current route. When switching between routes that share the same component, the component lifecycle hooks may not be triggered, so to detect route changes within the same component watch for changes to the <code>$route</code> property or use the following hooks:</li>
			<li><code>beforeRouteEnter</code>: Runs before the route that loads the component is confirmed. <code>this</code> is not available on this guard, but you can pass a callback function to the <code>next</code> function, which will receive the component instance as an argument</li>
			<li><code>beforeRouteUpdate</code>: Runs when the route changes to another path that uses the same component</li>
			<li><code>beforeRouteLeave</code> Runs when the route is about to change to another one that uses a different component</li>
		</ul>
		
		<h3>The <code>next()</code> function</h3>
		<p>The navigation guard functions receive a <code>next</code> function you need to manually trigger from within those functions to make sure the route is actually resolved</p>
		<p>You can use it in four different ways:</p>
		<ul>
			<li><code>next()</code> confirm the requested navigation</li>
			<li><code>next( false )</code> abort navigation, go back to the previous page</li>
			<li><code>next( '/' )</code> redirect to another route</li>
			<li><code>next( Error )</code> throws an error</li>
		</ul>
		
		<hr>
		<h2>Routing components</h2>
		<h3>The <code>&lt;router-view&gt;</code> component</h3>
		<p>Use it as a placeholder to be replaced with the actual components for each route.</p>
		<p>You can include multiple placeholders as long as you identify them with a <code>name</code> attribute, you can only leave one unnamed (which will be automatically named "default")</p>
		<h3>The <code>&lt;router-link&gt;</code> component</h3>
		<p>Use router link components to autogenerate navigation links.</p>
		<p>Possible attributes are:</p>
		<ul>
			<li><code>to</code> the path to link to (required)</li>
			<li><code>replace</code> if set to true, visits to this link won't be registered on the history</li>
			<li><code>append</code> makes it a relative link instead of absolute</li>
			<li><code>tag</code> specifies the tag to use to create the links, defaults to <code>a</code></li>
			<li><code>active-class</code> the class name to apply to current page and ancestor links, defaults to <code>router-link-active</code></li>
			<li><code>exact-active-class</code> the class name to apply to current page links, defaults to <code>router-link-exact-active</code></li>
			<li><code>exact</code> adds the active class only when strictly matching the same route, for example if the current page has a trailing slash but the route doesn't then it's not a match</li>
			<li><code>event</code> specifies the event on the link that will trigger the navigation, defaults to <code>click</code></li>
		</ul>
		
		<hr>
		<h2>Testing route options</h2>
		<div class="routes-example">
			<div>
				<ul>
					<li><router-link to="/home">Home Page</router-link></li>
					<li><router-link to="/foo">Simple Page</router-link></li>
					<li><router-link to="/user/4">User #4</router-link></li>
					<li><router-link to="/redirect">Redirect</router-link></li>
					<li><router-link to="/alias">Alias</router-link></li>
				</ul>
			</div>
			<router-view></router-view>
			<router-view name="sidebar"></router-view>
		</div>
		
	</div>
</template>

<script>


// Simple components
// ------------------------------
const HomeMain = { template: '<div><h3>Home Page</h3><p>Vivamus tempor enim sit amet ipsum facilisis, nec venenatis quam euismod. Maecenas vestibulum lorem aliquam, volutpat neque vel, vulputate nulla.</p></div>' };
const HomeSide = { template: '<div><p>Sidebar navigation</p></div>' };
const SimpleContent = { template: '<div><h3>Simple Page</h3><p>Ut nec ornare nibh. Morbi ornare tellus in ante finibus porttitor. Vivamus tincidunt elit et arcu dictum, vitae pharetra tortor ornare. Quisque lobortis sit amet ipsum et rhoncus.</p></div>' };


// Components with <router-view>
// ------------------------------
const UserPage = {
	props: ['id'],
	template: `
		<div>
			<h3>User #{{ id }}</h3>
			<router-view :id="id"></router-view>
			<router-view :id="id" name="footer"></router-view>
		</div>`,
	watch: {
		'$route': (to, from) => {
			console.log( 'COMPONENT: route updated' )
		},
	},
	beforeRouteEnter(to, from, next) {
		console.log( 'COMPONENT: before route enter' )
		next()
	},
	beforeRouteUpdate(to, from, next) {
		console.log( 'COMPONENT: before route update' )
		next()
	},
	beforeRouteLeave(to, from, next) {
		console.log( 'COMPONENT: before route leave' )
		next()
	},
};
const UserPageHome = {
	props: ['id'],
	template: `
		<div>
			<p>Landing page for User #{{ id }}
				<router-link :to="editPath">Edit User</router-link>
			</p>
		</div>`,
	computed: {
		editPath() {
			return `/user/${this.id}/edit`
		}
	}
}
const UserEditContent = {
	template: '<div><p>User edit screen</p></div>'
}
const UserEditFooter = {
	props: ['id'],
	template: '<footer><router-link :to="returnPath">Go back</router-link></footer>',
	computed: {
		returnPath() {
			return `/user/${this.id}`
		}
	}
}


// Vue Router object
// ------------------------------
import VueRouter from 'vue-router'
const router = new VueRouter({
	routes: [
		{
			path: '/home',
			components: {
				default: HomeMain,
				sidebar: HomeSide,
			},
			beforeEnter(to, from, next) {
				console.log( 'ROUTE: before enter' )
				next()
			},
		},
		{
			path: '/foo',
			component: SimpleContent,
			alias: '/alias',
		},
		{
			path: '/user/:id',
			component: UserPage,
			props: true,
			children: [
				{
					name: 'user',
					path: '',
					component: UserPageHome,
				},
				{
					path: 'edit',
					components: {
						default: UserEditContent,
						footer: UserEditFooter,
					},
				},
			],
		},
		{
			path: '/redirect',
			redirect: '/foo',
		},
	],
});
router.beforeEach((to, from, next) => {
	console.log( 'ROUTER: before each' )
	next()
})
router.beforeResolve((to, from, next) => {
	console.log( 'ROUTER: before resolve' )
	next()
})
router.afterEach((to, from) => {
	console.log( 'ROUTER: after each' )
})


// Export current component
// ------------------------------
export default {
	name: 'Routing',
	router: router,
}
</script>

<style lang="scss">
.routes-example {
	display: grid;
	grid-template-columns: auto 3fr 1fr;
	
	> * {
		padding: 1em;
	}
	> :nth-child( 1 ),
	> :nth-child( 3 ) {
		background: #EEE;
	}
	footer {
		padding: 1em 0;
		border-top: 1px solid #999;
	}
}
</style>
