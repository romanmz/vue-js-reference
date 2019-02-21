<template>
	<div class="section-dynamic-text">
		<h1>Dynamic Text</h1>
		
		<hr>
		<h2>Text Interpolation</h2>
		<p>Use <code v-pre>{{ brackets }}</code> to add dynamic text: <output>{{ message }}</output></p>
		<p>You can run javascript code inside the brackets to modify the content before outputting it, for example:</p>
		<ul>
			<li>Math operations: <code v-pre>{{ +number + 1 }}</code> = <output>{{ +number + 1 }}</output></li>
			<li>Boolean conditionals: <code v-pre>{{ isActive ? 'Yes' : 'No' }}</code> = <output>{{ isActive ? 'Yes' : 'No' }}</output></li>
			<li>Javascript functions: <code v-pre>{{ message.substring(0, 5) }}</code> <output>{{ message.substring(0, 5) }}</output></li>
		</ul>
		
		<hr>
		<h2>Text Directives</h2>
		<p>You can use the <code>v-text</code> directive instead of brackets to output content: <output><span v-text="message"></span></output></p>
		<p>If you need to display HTML content, then use the <code>v-html</code> directive instead: <output><span v-html="messageHTML"></span></output></p>
		<p>Use the <code>v-once</code> directive to display and lock content with its initial value: <output v-once>{{ message }}</output></p>
		<p>To output content as is without and avoid accidentaly converting text inside brackets, use <code>v-pre</code>: <output v-pre>{{ message }}</output></p>
		
		<hr>
		<ul>
			<li><label>Message <input type="text" v-model="message"></label></li>
			<li><label>HTML Message <input type="text" v-model="messageHTML"></label></li>
			<li><label>Number <input type="number" v-model="number"></label></li>
			<li><label><input type="checkbox" v-model="isActive"> Is Active</label></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'DynamicText',
	data () {
		return {
			message: 'This is a dynamic message!',
			messageHTML: 'This is a message with <abbr title="HyperText Markup Language">HTML<abbr>!',
			number: 5,
			isActive: true,
		}
	},
}
</script>

<style scoped>
	input[type="text"],
	input[type="number"] {
		width: 30rem;
		max-width: 100%;
	}
</style>
