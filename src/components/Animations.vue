<template>
	<div class="section-animations">
		<h1>Animations</h1>
		
		<hr>
		<h2>Basics</h2>
		<p>To animate a single element wrap it inside a <code>&lt;transition&gt;</code> tag, this applies the animation logic directly to the element without generating extra markup. If you need to animate multiple elements as part of a single group, use the <code>&lt;transition-group&gt;</code> tag instead, which will generate a containing element to make it easy to handle multiple elements being animated at the same time.</p>
		<p>Elements contained within these tags will trigger js events whenever they are toggled on or off with <code>v-if</code>, <code>v-show</code> or when switching dynamic components. You can also indicate that a component should trigger transition logic when they are first rendered on the page.</p>
		<p>Vue doesn't actually animate the elements, it only triggers js events you can listen to to add your own effects, and it also applies special css classes to each element at each stage of the transition so you can define the animation logic using pure CSS.</p>
		<p>Elements inside <code>&lt;transition-group&gt;</code>s need to have unique <code>key</code> attributes.</p>
		<h3>List of JS events</h3>
		<ul>
			<li>"Enter" event: <code>before-enter</code>, <code>enter</code>, <code>after-enter</code> and <code>enter-cancelled</code></li>
			<li>"Leave" event: <code>before-leave</code>, <code>leave</code>, <code>after-leave</code> and <code>leave-cancelled</code> (v-show only)</li>
			<li>"Appear" event: <code>before-appear</code>, <code>appear</code>, <code>after-appear</code> and <code>appear-cancelled</code></li>
		</ul>
		<h3>List of CSS classes</h3>
		<ul>
			<li><code>v-enter-active</code>: set during the whole "enter" animation. Use it to define the properties to be animated and total duration</li>
			<li><code>v-enter</code>: set briefly at the beginning of the "enter" animation. Use it to define the intial style of the element</li>
			<li><code>v-enter-to</code>: set during the rest of the "enter" animation. Use it to define the final style of the element</li>
			<li><code>v-leave-active</code></li>
			<li><code>v-leave</code></li>
			<li><code>v-leave-to</code></li>
			<li><code>v-appear-active</code></li>
			<li><code>v-appear</code></li>
			<li><code>v-appear-to</code></li>
			<li><code>v-move</code>: set when animating position changes of elements within a &lt;transition-group&gt;</li>
		</ul>
		<h3>Examples of basic animations</h3>
		<ul>
			<li>Single element: <transition><strong v-if="toggle">Element with transition!</strong></transition></li>
			<li>Multiple elements: <transition-group class="transition-group"><strong v-if="toggle" key="yes">Yes!</strong><strong v-else key="no">No!</strong></transition-group></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Animations',
	data () {
		return {
			toggle: false,
		}
	},
}
</script>

<style lang="scss">
	
	// Default animations
	// ------------------------------
	span > .v-leave-active {
		position: absolute;
	}
	// Enter
	.v-enter-active { transition: all 1s }
	.v-enter { opacity: 0; transform: scale( 2 ) }
	.v-enter-to {}
	// Leave
	.v-leave-active { transition: all 2s }
	.v-leave {}
	.v-leave-to { opacity: 0 }
	// Appear
	.v-appear-active {}
	.v-appear {}
	.v-appear-to {}
	// Move
	.v-move {}
	
</style>
