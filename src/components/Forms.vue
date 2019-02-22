<template>
	<div class="section-forms">
		<h1>Forms</h1>
		
		<hr>
		<h2>Input Bindings</h2>
		<p>Use the <code>v-model</code> directive to bind a form element to an instance property, any changes to the data made by the user will be reflected immediately across the application.</p>
		<ul>
			<li>String input: <output>{{ stringInput }}</output></li>
			<li>Boolean input: <output>{{ booleanInput }}</output></li>
			<li>Multiple choice: <output>{{ multipleChoice }}</output></li>
			<li>Single choice: <output>{{ singleChoice }}</output></li>
		</ul>
		<p><label class="label">Text input: <input type="text" v-model="stringInput"></label></p>
		<p><label class="label">Checkbox input: <input type="checkbox" v-model="booleanInput"></label></p>
		<p class="label">Multiple choice:</p>
		<div class="multi-column-grid">
			<div>
				<ul>
					<li><label><input type="checkbox" value="Checkbox 1" v-model="multipleChoice"> Checkbox 1</label></li>
					<li><label><input type="checkbox" value="Checkbox 2" v-model="multipleChoice"> Checkbox 2</label></li>
					<li><label><input type="checkbox" value="Checkbox 3" v-model="multipleChoice"> Checkbox 3</label></li>
				</ul>
			</div>
			<div>
				<select v-model="multipleChoice" multiple>
					<option>Checkbox 1</option>
					<option>Checkbox 2</option>
					<option>Checkbox 3</option>
				</select>
			</div>
		</div>
		<p class="label">Single choice:</p>
		<div class="multi-column-grid">
			<div>
				<ul>
					<li><label><input type="radio" value="Radio 1" v-model="singleChoice"> Radio 1</label></li>
					<li><label><input type="radio" value="Radio 2" v-model="singleChoice"> Radio 2</label></li>
					<li><label><input type="radio" value="Radio 3" v-model="singleChoice"> Radio 3</label></li>
				</ul>
			</div>
			<div>
				<select v-model="singleChoice">
					<option disabled value="">Please select one</option>
					<option>Radio 1</option>
					<option>Radio 2</option>
					<option>Radio 3</option>
				</select>
			</div>
		</div>
		
		<hr>
		<h2>Value bindings:</h2>
		<p>When attaching a property to a checkbox input, the values that will be passed by default are boolean true and false.</p>
		<p>You can assign different values to each state with the <code>true-value</code> and <code>false-value</code> attributes.</p>
		<p><output>{{ booleanInput }}</output></p>
		<p><label><input type="checkbox" true-value="yay" false-value="nay" v-model="booleanInput"> Custom checkbox values</label></p>
		
		<hr>
		<h2>Modifiers:</h2>
		<p>You can add modifiers to the <code>v-model</code> directive to modify the behaviour of the inputs.</p>
		<ul>
			<li><code>.lazy</code> syncs the input with the data after the <code>change</code> event (as opposed to the default behaviour which is after <code>input</code>)</li>
			<li><code>.number</code> typecasts the data as a number</li>
			<li><code>.trim</code> automatically trims the input string before syncing it</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Events',
	data () {
		return {
			stringInput: 'Hello Vue!',
			booleanInput: true,
			multipleChoice: [],
			singleChoice: '',
		}
	},
}
</script>

<style scoped>
	.label {
		font-weight: bold;
	}
	.multi-column-grid ul {
		margin: 0;
	}
</style>
