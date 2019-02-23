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
		<h3>Examples of default animations</h3>
		<ul>
			<li>Single element:
				<transition>
					<strong v-if="toggle">Element with transition!</strong>
				</transition>
			</li>
			<li>Multiple elements:
				<transition-group>
					<strong v-if="toggle" key="yes">Yes!</strong>
					<strong v-else key="no">No!</strong>
				</transition-group>
			</li>
		</ul>
		<p><button class="button" @click="toggle = !toggle">Toggle elements</button></p>
		
		<hr>
		<h2>Extra settings</h2>
		<ul>
			<li><code>name</code> changes the class names to be added on each animation step, e.g. setting <code>name="fade"</code> will add classes like <code>fade-enter-active</code></li>
			<li><code>mode</code> defines whether to animate both "enter" and "leave" items at the same time, or to do it sequentially with <code>mode="in-out"</code> or <code>mode="out-in"</code>. <strong>NOTE:</strong> this is not available on the <code>&lt;transition-group&gt;</code> tag</li>
			<li><code>enter-class</code>, <code>enter-active-class</code>, etc… lets you define different CSS classes for each animation step instead of the ones generated automatically</li>
			<li><code>appear</code> if set to true, applies transitions to the element on initial render. defaults to false</li>
			<li><code>css</code> defines whether or not to apply the CSS classes to the element. defaults to true</li>
			<li><code>type</code> defines what css property to look for to determine the total length of the transitions, options are <code>transition</code> and <code>animation</code>, or you can pass a number to set it manually. defaults to the css property with the longest duration</li>
		</ul>
		<h3>Examples of custom animations</h3>
		<ul>
			<li><code>name="slide"</code>:
				<transition-group name="slide">
					<strong v-if="toggle" key="yes">Yes!</strong>
					<strong v-else key="no">No!</strong>
				</transition-group>
			</li>
			<li><code>name="slide" mode="out-in"</code>:
				<span>
					<transition name="slide" mode="out-in">
						<strong v-if="toggle" key="yes">Yes!</strong>
						<strong v-else key="no">No!</strong>
					</transition>
				</span>
			</li>
			<li><code>name="slide" appear</code>:
				<transition-group name="slide" appear>
					<strong v-if="toggle" key="yes">Yes!</strong>
					<strong v-else key="no">No!</strong>
				</transition-group>
			</li>
		</ul>
		<p><button class="button" @click="toggle = !toggle">Toggle elements</button></p>
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
	
	// Default animation
	// ------------------------------
	// Container
	span > .v-leave-active {
		position: absolute;
	}
	// Enter
	.v-enter-active { transition: opacity 1s }
	.v-enter { opacity: 0 }
	.v-enter-to {}
	// Leave
	.v-leave-active { transition: opacity 2s }
	.v-leave {}
	.v-leave-to { opacity: 0 }
	// Appear
	.v-appear-active {}
	.v-appear {}
	.v-appear-to {}
	// Move
	.v-move {}
	
	// Slide animation
	// ------------------------------
	// Container
	span > .slide-leave-active {
		position: absolute;
	}
	// Enter
	.slide-enter-active { display: inline-block; transition: opacity 1s, transform 1s; }
	.slide-enter { opacity: 0; transform: translateX( -10rem ) }
	.slide-enter-to {}
	// Leave
	.slide-leave-active { display: inline-block; transition: opacity 2s, transform 2s; }
	.slide-leave {}
	.slide-leave-to { opacity: 0; transform: translateX( 10rem ) }
	// Appear
	.slide-appear-active {}
	.slide-appear {}
	.slide-appear-to {}
	// Move
	.slide-move {}
	
</style>
