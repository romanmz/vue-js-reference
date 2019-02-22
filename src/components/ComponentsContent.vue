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
Vue.component( 'multiple-content', {
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

// Export current component
export default {
	name: 'ComponentsContent',
	data () {
		return {
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
