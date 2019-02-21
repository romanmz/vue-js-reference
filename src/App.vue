<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style src="./assets/scss/global.scss" lang="scss"></style>
<style>
	#app {
		margin: 2rem auto;
		padding: 0 2rem;
		max-width: 120rem;
	}
</style>
