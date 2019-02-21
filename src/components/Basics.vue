<template>
	<div class="section-basics">
		<h1>Vue.js Basics</h1>

		<h2>Interpolations</h2>
		<p>Use <code v-pre>{{ brackets }}</code> to add dynamic text: <output>{{ message }}</output></p>
		<p>You can run javascript code inside the brackets to modify the content before outputting it, for example:</p>
		<p>Math operations: <code v-pre>{{ number + 1 }}</code> = <output>{{ number + 1 }}</output></p>
		<p>Boolean conditionals: <code v-pre>{{ ok ? 'Yes' : 'No' }}</code> = <output>{{ ok ? 'Yes' : 'No' }}</output></p>
		<p>Javascript functions: <code v-pre>{{ message.substring(0, 5) }}</code> <output>{{ message.substring(0, 5) }}</output></p>

		<h2>Text Directives</h2>
		<p>You can also use the <code>v-text</code> directive instead of brackets to output content: <output><span v-text="message"></span></output></p>
		<p>If you need to display HTML content, then use the <code>v-html</code> directive instead: <output><span v-html="messageHTML"></span></output></p>
	</div>
</template>

<script>
export default {
	name: 'Vue.js Basics',
	data () {
		return {
			message: 'This is a dynamic message!',
			messageHTML: 'This is a message with <abbr title="HyperText Markup Language">HTML<abbr>!',
			number: 5,
			ok: true,
		}
	},
}
</script>

<style>
</style>
