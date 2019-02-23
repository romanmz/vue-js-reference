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
		<p>These attributes are available on both <code>&lt;transition&gt;</code> and <code>&lt;transition-group&gt;</code> tags:</p>
		<ul>
			<li><code>name</code> changes the class names to be added on each animation step, e.g. setting <code>name="fade"</code> will add classes like <code>fade-enter-active</code></li>
			<li><code>enter-class</code>, <code>enter-active-class</code>, etc… lets you define different CSS classes for each animation step instead of the ones generated automatically</li>
			<li><code>appear</code> if set to true, applies transitions to the element on initial render. defaults to false</li>
			<li><code>css</code> defines whether or not to apply the CSS classes to the element. defaults to true</li>
			<li><code>type</code> defines what css property to look for to determine the total length of the transitions, options are <code>transition</code> and <code>animation</code>. defaults to the one with the longest duration</li>
		</ul>
		<p>The following ones are only available on the <code>&lt;transition&gt;</code> element:</p>
		<ul>
			<li><code>mode</code> defines whether to animate both "enter" and "leave" items at the same time, or to do it sequentially with <code>mode="in-out"</code> or <code>mode="out-in"</code></li>
			<li><code>duration</code> you can use this property to define an explicit duration (overrides the <code>type</code> setting), you can pass a single number for both "enter" and "leave" transitions, e.g. <code>1000</code>, or pass an object to set a different duration for each event, e.g. <code>{enter: 500, leave: 800}</code></li>
		</ul>
		<p>And these are available only on the <code>&lt;transition-group&gt;</code> tag:</p>
		<ul>
			<li><code>tag</code> defines what type of element to create as a wrapper, defaults to "span"</li>
			<li><code>move-class</code> overwrites the css class to add during "moving" transitions</li>
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
			<li><code>name="slide" mode="out-in" duration="3000"</code>:
				<span>
					<transition name="slide" mode="out-in" duration="3000">
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
		
		<hr>
		<h2>Listening to Javascript events</h2>
		<p>When using javascript-only animations, it is recommended to add a <code>css="false"</code> attribute to prevent css rules being added and accidentally altering the animation.</p>
		<p>Javascript-based animation:
			<transition :css="false" @enter="transitionEnter" @leave="transitionLeave">
				<strong v-if="toggle" key="yes">Yes!</strong>
				<strong v-else key="no">No!</strong>
			</transition>
		</p>
		<p><button class="button" @click="toggle = !toggle">Toggle elements</button></p>
		
		<hr>
		<h2>Animating items within a collection</h2>
		<p>When a collection of elements within a <code>&lt;transition-group&gt;</code> tag are reordered, Vue automatically animates the items to create a smooth transition on all the elements, but you may still need to tweak the animation using the <code><i>v</i>-move</code> css class.</p>
		<p>
			<button class="button" @click="collectionAdd">Add</button>
			<button class="button" @click="collectionRemove">Remove</button>
			<button class="button" @click="collectionShuffle">Shuffle</button>
		</p>
		<transition-group tag="ul" class="shuffle-list" name="shuffle">
			<li v-for="item in list" :key="item">{{ item }}</li>
		</transition-group>
		
		<hr>
		<h2>Reusable animation settings</h2>
		<p>You can create components with a <code>&lt;transition&gt;</code> tag as the root element, and with one or more <code>&lt;slot&gt;</code> tags, and set attributes with dynamic props</p>
		<bounce-transition>
			<strong v-if="toggle" key="yes">Yes!</strong>
			<strong v-else key="no">No!</strong>
		</bounce-transition>
		<bounce-transition>
			<strong v-if="toggle" key="yes">Also yes, no need to rewrite the same animation settings all over again!</strong>
			<strong v-else key="no">No!</strong>
		</bounce-transition>
		<p><button class="button" @click="toggle = !toggle">Toggle elements</button></p>
		
		
	</div>
</template>

<script>
import Vue from 'vue'

// Example of a simple reusable animation
Vue.component('bounce-transition', {
	template: `
		<transition-group tag="p" name="bounce" appear>
			<slot></slot>
		</transition-group>`,
})

// Export current component
export default {
	name: 'Animations',
	data () {
		return {
			toggle: false,
			velocityJsLoaded: false,
			list: [1,2,3,4,5,6,7,8,9,10],
			listNext: 11,
		}
	},
	mounted() {
		// Load Velocity.js
		let velocityScript = document.createElement('script')
		velocityScript.onload = () => { this.velocityJsLoaded = true }
		velocityScript.async = true
		velocityScript.src = '//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js'
		document.head.appendChild(velocityScript)
	},
	methods: {
		
		// Transition events
		// ------------------------------
		transitionBeforeEnter(element) {},
		transitionEnter(element, done) {
			// call done() to mark the end of the animation, optional when using css-based transitions/animations
			// you can stagger the animations by adding different delays to each individual items (e.g. with a timeout call)
			if( typeof Velocity != 'function') return;
			if( window.getComputedStyle(element).display == 'inline' ) {
				element.style.display = 'inline-block'
			}
			Velocity( element, {scale: 2}, {duration: 500} );
			Velocity( element, {scale: 1}, {complete: done} );
		},
		transitionAfterEnter(element) {},
		transitionEnterCancelled(element) {},
		
		transitionBeforeLeave(element) {},
		transitionLeave(element, done) {
			if( typeof Velocity != 'function') return;
			if( window.getComputedStyle(element).display == 'inline' ) {
				element.style.display = 'inline-block'
			}
			element.style.position = 'absolute'
			Velocity( element, {translateX: '15px', rotateZ: '50deg'}, {duration: 600} );
			Velocity( element, {rotateZ: '100deg'}, {loop: 2} );
			Velocity( element, {rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0}, {complete: done} );
		},
		transitionAfterLeave(element) {},
		transitionLeaveCancelled(element) {},
		
		transitionBeforeAppear(element) {},
		transitionAppear(element, done) {},
		transitionAfterAppear(element) {},
		transitionAppearCancelled(element) {},
		
		// Collection animation
		// ------------------------------
		collectionRandomIndex() {
			return Math.floor( Math.random() * this.list.length );
		},
		collectionAdd() {
			this.list.splice( this.collectionRandomIndex(), 0, this.listNext++ );
		},
		collectionRemove() {
			this.list.splice( this.collectionRandomIndex(), 1 );
		},
		collectionShuffle() {
			this.list.sort( () => Math.random() < Math.random() ? -1 : 1 );
		},
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
	
	// Shuffle animation
	// ------------------------------
	.shuffle-list {
		list-style: none;
		padding: 0;
		
		li {
			display: inline-block;
			line-height: 2.1;
			height: 2em;
			min-width: 2em;
			box-sizing: border-box;
			text-align: center;
			border: 1px solid #CCC;
			margin: .25em;
		}
	}
	.shuffle-enter-active,
	.shuffle-leave-active,
	.shuffle-move {
		transition: opacity 1s, transform 1s;
	}
	.shuffle-enter {
		opacity: 0;
		transform: translateY( -1em );
	}
	.shuffle-leave-active {
		// fix for smoother transitions
		position: absolute;
	}
	.shuffle-leave-to {
		opacity: 0;
		transform: translateY( 1em );
	}
	
	// Bounce animation
	// ------------------------------
	@keyframes bounce-in {
		0% { transform: scale(0); opacity: 0; }
		50% { transform: scale(1.5) }
		100% { transform: scale(1); opacity: 1; }
	}
	.bounce-enter-active { animation: bounce-in .5s }
	.bounce-leave-active { animation: bounce-in .5s reverse; position: absolute; }
	
</style>
