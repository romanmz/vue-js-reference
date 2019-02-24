<template>
	<div class="section-vue-instance">
		<h1>Vue Instance</h1>
		
		<hr>
		<h2>Settings object structure</h2>
		<pre>
{
    <strong>// general settings</strong>
    el: '#selector',
    name: 'ComponentName',
    functional: true/false,
    template: '&lt;div&gt;HTML content&lt;/div&gt;',
    render: createElement => {},
    components: { component1, component2 },
    
    <strong>// data and methods</strong>
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: [],
    data: () => ({})
    computed: {propertyName: ()=>{}},
    methods: {methodName: ()=>{}},
    watch: {propertyName: (newValue, oldValue)=>{}}
    
    <strong>// extended functionality</strong>
    router: vueRouter,
    store: vuexStore,
    mixins: [mixin1, mixin2],
    directives: {directive1, directive2},
    filters: {filter1, filter2},
    
    <strong>// Instance <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram">lifecycle</a> hooks</strong>
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    
    <strong>// Router hooks</strong>
    beforeRouteEnter() {},
    beforeRouteUpdate() {},
    beforeRouteLeave() {},
}</pre>
	</div>
</template>

<script>
export default {
	name: 'VueInstance',
}
</script>

<style lang="scss" scoped="">
	// Add the "scoped" attribute to make sure the css rules defined here are only applied to the current component
	// you can use sass code by adding the lang="scss" attribute
	// Import scss fragments by including the path relative to the current file
	@import '../assets/scss/abstracts/variables.scss';
</style>
