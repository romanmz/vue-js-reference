<template>
	<div class="section-attribute-directives">
		<h1>Attribute Directives</h1>
		
		<hr>
		<h2>Text Attributes</h2>
		<p>To add dynamic content to an attribute, use the <code>v-bind</code> directive, followed by a colon and the name of the type of attribute you want to add.</p>
		<p>For example, to add a dynamic "title" attribute you can write <code>v-bind:title="message"</code> = <output v-bind:title="message">This element has a "title" attribute</output></p>
		
		<hr>
		<h2>Class Attribute</h2>
		<p>There's 4 ways to make the "class" attribute dynamic:</p>
		<ol>
			<li>Pass an object where each key is the class to be added, and the value is a boolean property that toggles that class on or off: <code>v-bind:class="{'is-active': isActive, 'is-completed': isCompleted}"</code> = <output v-bind:class="{'is-active': isActive, 'is-completed': isCompleted}">Class attribute with object</output></li>
			<li>You can also pass an array with property names, and the string value of those properties will be added directly as class names in the element: <code>v-bind:class="[textColor, bgColor]"</code> = <output v-bind:class="[textColor, bgColor]">Class attribute with array</output></li>
			<li>You can mix the array and object syntax at the same time: <code>v-bind:class="[bgColor, {'is-completed': isCompleted}]"</code> = <output v-bind:class="[bgColor, {'is-completed': isCompleted}]">Class attribute with mixed syntax</output></li>
			<li>Or you can simply pass the name of an instance property, if the property returns a string then it will be applied as is like with any other attribute, or you can pass arrays or objects to get the same behaviour as the previous examples. <code>v-bind:class="classAttribute"</code> = <output v-bind:class="classAttribute">Class attribute with instance property</output></li>
		</ol>
		
		<hr>
		<h2>Inline Styles</h2>
		<p>You have 3 options to handle the "style" attribute of an element:</p>
		<ol>
			<li>Pass an object where each key is the css property to add, and the value is the property name whose value should be used as is: <code>v-bind:style="{'color': dynamicColor, 'font-size': dynamicFontSize+'px'}"</code> = <output v-bind:style="{'color': dynamicColor, 'font-size': dynamicFontSize+'px'}">Inline styles with object</output></li>
			<li>Pass an array with objects, styles added on later objects will override previous ones: <code>v-bind:style="[{'color': dynamicColor}, {'color':'violet'}]"</code> = <output v-bind:style="[{'color': dynamicColor}, {'color':'violet'}]">Inline styles with object</output></li>
			<li>Or refer to an instance property which should output a string to be used as is, or an object or array to get the same behaviour as the previous examples. <code>v-bind:style="styleAttribute"</code> = <output v-bind:style="styleAttribute">Inline styles with instance property</output></li>
		</ol>
		<p>If you pass an array of strings as a value for a css property, vue will add only the last property in the list that is supported by the current browser. <code>v-bind:style="{display: ['-ms-grid', 'grid']}"</code> = <output v-bind:style="{display: ['-ms-grid', 'grid']}">Property with multiple values</output></p>
		
		<hr>
		<h2>Short Syntax</h2>
		<p>You can replace <code>v-bind</code> with just <code>:</code> for a shorter syntax. <code>:title="message"</code> = <output :title="message">Shorthand for the "v-bind" directive</output></p>
		
		<hr>
		<ul>
			<li><label>Message <input type="text" v-model="message"></label></li>
			<li><label><input type="checkbox" v-model="isActive"> Is Active</label></li>
			<li><label><input type="checkbox" v-model="isCompleted"> Is Completed</label></li>
			<li>
				<label>Text Colour
					<select v-model="textColor">
						<option></option>
						<option>yellow-color</option>
						<option>green-color</option>
					</select>
				</label>
			</li>
			<li>
				<label>Background Colour
					<select v-model="bgColor">
						<option></option>
						<option>blue-bg</option>
						<option>purple-bg</option>
					</select>
				</label>
			</li>
			<li>
				<label>Dynamic Colour
					<select v-model="dynamicColor">
						<option></option>
						<option>red</option>
						<option>yellow</option>
						<option>#F90</option>
					</select>
				</label>
			</li>
			<li><label>Dynamic Font Size <input type="number" v-model="dynamicFontSize"></label></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AttributeDirectives',
	data () {
		return {
			message: 'This is a dynamic message!',
			// Classes
			isActive: true,
			isCompleted: true,
			textColor: '',
			bgColor: '',
			// Styles
			dynamicColor: 'yellow',
			dynamicFontSize: '14',
		}
	},
	computed: {
		classAttribute: function() {
			return {
				'is-active': this.isActive,
				'is-completed': this.isCompleted,
			}
		},
		styleAttribute: function() {
			return {
				'color': this.dynamicColor,
				'font-size': this.dynamicFontSize+'px',
			}
		},
	},
}
</script>

<style scoped>
.is-active {
	box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.is-completed {
	text-decoration: line-through;
}
.yellow-color {
	color: #FE0;
}
.green-color {
	color: #0C0;
}
.blue-bg {
	background-color: #009;
}
.purple-bg {
	background-color: #906;
}
</style>
