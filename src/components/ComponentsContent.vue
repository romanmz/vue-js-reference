<template>
	<div class="section-components-content">
		<h1>Components Content</h1>
		
		<hr>
		<h2>Content distribution with <code>&lt;slot&gt;</code></h2>
		<p>In addition to passing attributes and data to a component, you can also pass HTML content to be rendered from within the component, you just need to configure the component to indicate where and how to use the passed content.</p>
		<p>To pass down content you just include it inside the tags of the custom component, e.g. <code>&lt;my-component&gt;&lt;p&gt;My custom content&lt;/p&gt;&lt;/my-component&gt;</code>.</p>
		
		<h3>Simple distribution</h3>
		<p>In the template definition of the component, you add a <code>&lt;slot&gt;</code> tag to indicate where to output the content received from the parent.</p>
		<p>If you include content inside the tag then that content will be displayed by default if the component doesn't receive any custom content from the parent.</p>
		<simple-content></simple-content>
		<simple-content>
			<p><strong>Passing down custom content!</strong></p>
		</simple-content>
		
		<h3>Multiple distribution</h3>
		<p>You can also set up your component to render content passed down from the parent into multiple places, to get this working:</p>
		<ul>
			<li>The <code>&lt;slot&gt;</code> tags on the component template need to have a unique <code>name</code> attribute, e.g: <code>&lt;slot name="header"&gt;</code></li>
			<li>On the content being passed down from the parent, add a <code>slot</code> attribute with the name of a registered slot to have that content display in that position, e.g: <code>&lt;div slot="header"&gt;&lt;/div&gt;</code></li>
			<li>You can leave only one unnamed <code>&lt;slot&gt;</code> tag, which will serve as a catch-all to display all the content that was not targeted towards any position in particular</li>
			<li>If you don't include a nameless slot, then any content not targeted towards any positions will be lost</li>
		</ul>
		<multiple-content></multiple-content>
		<multiple-content>
			<template slot="header">
				<p><b>Custom header!</b></p>
			</template>
			<template slot="footer">
				<p><b>Custom footer!</b></p>
			</template>
			<p><b>Custom content!</b></p>
			<p><b>Lorem ipsum</b></p>
			<p><b>Dolor sit amet</b></p>
		</multiple-content>
		
		<hr>
		<h2>Exposing internal component data with <code>slot-scope</code></h2>
		<p>If you use variables in the template definition of a component, those variables will refer to the internal component data. In the same way, if you use variables in the content passed down from a parent, then those variables will refer to the parent's data.</p>
		<p>There could be cases where you want to define content in the parent element, but have it refer to the internal data of the component, to make that possible:</p>
		<ul>
			<li>In the template definition of the component, bind data to the <code>&lt;slot&gt;</code> tag where you want the internal data to be available, e.g: <code>&lt;slot name="header" :title="this.title"&gt;</code></li>
			<li>Then on the parent element you have to indicate that you'll be using the component's data by adding a <code>slot-scope</code> attribute to the same element that is targeting a template position using <code>slot</code>, the value you assign to the attribute will become the name of the object that holds the exposed component data, e.g: <code>slot="header" slot-scope="componentData"</code></li>
			<li>Finally, on the content to be passed down to the component you can access the parent data as usual, e.g. <code v-pre>{{ title }}</code>. But you now also have access to the component's internal data, e.g. <code v-pre>{{ componentData.title }}</code></li>
		</ul>
		<exposed-content></exposed-content>
		<exposed-content>
			<template slot="header" slot-scope="componentData">
				<p>Parent data: <b>{{ title }}</b></p>
				<p>Internal data: <b>{{ componentData.title }}</b></p>
			</template>
		</exposed-content>
	</div>
</template>

<script>

// Component with simple content distribution
import Vue from 'vue'
Vue.component('simple-content', {
	template: `
		<section class="content-component">
			<header>
				<p>Template header</p>
			</header>
			<main>
				<slot>
					<p>No custom content received, displaying default content!.</p>
				</slot>
			</main>
			<footer>
				<p>Template footer</p>
			</footer>
		</section>`,
});

// Component with multiple content distribution
Vue.component('multiple-content', {
	template: `
		<section class="content-component">
			<header>
				<slot name="header">
					<p>Template header</p>
				</slot>
			</header>
			<main>
				<slot>
					<p>No custom content received, displaying default content!.</p>
				</slot>
			</main>
			<footer>
				<slot name="footer">
					<p>Template footer</p>
				</slot>
			</footer>
		</section>`,
});

// Component with exposed internal data
Vue.component('exposed-content', {
	data () {
		return {
			title: 'Internal Title',
		}
	},
	template: `
		<section class="content-component">
			<header>
				<slot name="header" :title="this.title">
					<p>{{ this.title }}</p>
				</slot>
			</header>
			<main>
				<slot>
					<p>No custom content received, displaying default content!.</p>
				</slot>
			</main>
		</section>`,
});

// Export current component
export default {
	name: 'ComponentsContent',
	data () {
		return {
			title: 'Parent Title',
		}
	},
}
</script>

<style>
	.content-component {
		font-size: 1.4rem;
		margin: 0 0 2rem;
		border: 2px solid #EEE;
	}
	.content-component header,
	.content-component footer {
		padding: 0.5em 1em;
		background: #EEE;
	}
	.content-component main {
		padding: 0.5em 1em;
	}
	.content-component p {
		margin-bottom: 0;
	}
</style>
