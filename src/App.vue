<template>
	<div id="app">
		<header class="app-header">
			<ol class="main-nav">
				<li><router-link to="/">Vue Instance</router-link></li>
				<li><router-link to="/dynamic-text/">Dynamic Text</router-link></li>
				<li><router-link to="/attributes/">Attribute Directives</router-link></li>
				<li><router-link to="/control-flow/">Control Flow</router-link></li>
				<li><router-link to="/events/">Events</router-link></li>
				<li><router-link to="/forms/">Forms</router-link></li>
				<li><router-link to="/components/">Components</router-link>
					<ul>
						<li><router-link to="/components/data/">Components Data</router-link></li>
						<li><router-link to="/components/model/">Components Model</router-link></li>
						<li><router-link to="/components/content/">Components Content</router-link></li>
						<li><router-link to="/components/dynamic/">Dynamic Components</router-link></li>
					</ul>
				</li>
				<li><router-link to="/animations/">Animations</router-link></li>
				<li><router-link to="/render-function/">Render Function</router-link></li>
				<li><router-link to="/reusable-settings/">Reusable Settings</router-link></li>
				<li><router-link to="/routing/">Routing</router-link></li>
				<li><router-link to="/state-management/">State Management</router-link></li>
				<li><router-link to="/server-side-rendering/">Server-side Rendering</router-link></li>
			</ol>
		</header>
		<main class="app-main">
			<router-view/>
		</main>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style src="./assets/scss/global.scss" lang="scss"></style>
<style lang="scss">
	#app {
		margin: 2rem auto;
		padding: 0 2rem;
		max-width: 120rem;
		display: grid;
		grid-template-columns: 26rem auto;
	}
	.app-header {
		margin-right: 4rem;
	}
	.main-nav {
		.router-link-exact-active {
			font-weight: bold;
		}
	}
</style>
