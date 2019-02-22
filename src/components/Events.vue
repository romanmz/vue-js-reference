<template>
	<div class="section-events">
		<h1>Events</h1>
		
		<hr>
		<h2>Event handlers</h2>
		<p>Use the <code>v-on</code> directive to attach handler functions to a given event.</p>
		<p>You can either call an existing instance method: <code>v-on:click="reverseMessage"</code>, or directly perform some operations: <code>v-on:click="number++"</code>.</p>
		<p>If you need to pass the "event" object to the callback function, use the special <b>$event</b> variable <code>v-on:click="methodName( $event )"</code>.</p>
		<p><output>{{ message }} {{ number }}</output></p>
		<p>
			<button class="button" v-on:click="number++">Increase number</button>
			<button class="button" v-on:click="reverseMessage">Reverse Message</button>
			<button class="button" v-on:click="call( 'Oh hi!', $event )">Say hi!</button>
		</p>
		
		<hr>
		<h2>Event modifiers</h2>
		<p>Event modifiers allows you to quickly add extra actions to an event handler, for example adding the <code>v-on:click.prevent="methodName"</code> modifier will automatically call <code>e.preventDefault()</code> when that event is triggered.</p>
		<p>The available modifiers are:</p>
		<ul>
			<li><code>.stop</code> Triggers <code>e.stopPropagation()</code></li>
			<li><code>.prevent</code> Triggers <code>e.preventDefault()</code></li>
			<li><code>.capture</code> Makes the function run only if the event was triggered on a child element.</li>
			<li><code>.self</code> Makes the function run only if the event was triggered on the element itself.</li>
			<li><code>.once</code> Runs the function only the first time the event is triggered</li>
			<li><code>.passive</code> Triggers the element's default action, and then the bound function (opposite of <code>.prevent</code>).</li>
		</ul>
		<p>You can chain two or more modifiers, the order in which you chain them is the same in which they will be called, so order is important.</p>
		<p>You can also add only the modifiers without specifying a statement or method, the modifiers will still be applied to the element even if no further action was added.</p>
		
		<hr>
		<h2>Key modifiers</h2>
		<p>Key modifiers allows you to quickly assign an action when the user presses a particular key without you having to write the logic yourself everytime.</p>
		<p><output>{{ message }} {{ number }}</output></p>
		<ul>
			<li><label><input v-on:keyup.13="reverseMessage"> <code>.13</code> Triggers only when key '13' (Enter) is pressed</label></li>
			<li><label><input v-on:keyup.enter="reverseMessage"> <code>.enter</code> Triggers only when key 'Enter' is pressed</label></li>
			<li><label><input v-on:keyup.tab="reverseMessage"> <code>.tab</code> Triggers only when key 'Tab' is pressed</label></li>
			<li><label><input v-on:keyup.delete="reverseMessage"> <code>.delete</code> Triggers only when key 'Delete' is pressed</label></li>
			<li><label><input v-on:keyup.esc="reverseMessage"> <code>.esc</code> Triggers only when key 'Esc' is pressed</label></li>
			<li><label><input v-on:keyup.space="reverseMessage"> <code>.space</code> Triggers only when key 'Space bar' is pressed</label></li>
			<li><label><input v-on:keyup.up="number++"> <code>.up</code> Triggers only when key 'Up arrow' is pressed</label></li>
			<li><label><input v-on:keyup.down="number--"> <code>.down</code> Triggers only when key 'Down arrow' is pressed</label></li>
			<li><label><input v-on:keyup.left="reverseMessage"> <code>.left</code> Triggers only when key 'Left arrow' is pressed</label></li>
			<li><label><input v-on:keyup.right="reverseMessage"> <code>.right</code> Triggers only when key 'Right arrow' is pressed</label></li>
		</ul>
		<p>You can configure custom key codes by modifying the global <code>config.keyCodes</code> object like this: <code>Vue.config.keyCodes.f1 = 112</code>.</p>
		<p>You can also use any of the standard key <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values" target="_blank">Key Values</a>, converted to "kebab-case", e.g: for <code>CapsLock</code>, use <code>caps-lock</code>.</p>
		
		<hr>
		<h2>System modifier keys</h2>
		<p>The <code>.ctrl</code>, <code>.alt</code>, <code>.shift</code>, and <code>.meta</code> modifiers trigger the events only if the corresponding key is being pressed by the user when the event happens (so they always have to be coupled with an event or with a different key, they don't trigger the event just by pressing the key like with the regular key modifiers).</p>
		<p>The <code>.exact</code> modifier makes it so the event is triggered only when the user presses that exact combination of keys (without it the event is triggered when the specified keys are pressed even if there's other keys pressed at the same time).</p>
		<p>If the <code>.exact</code> modifier is added with no additional key modifiers, then it will run the event only if there are no system modifier keys pressed at all.</p>
		<p><output>{{ message }} {{ number }}</output></p>
		<ul>
			<li><button class="button" v-on:click.ctrl="number++">.ctrl + click</button></li>
			<li><button class="button" v-on:click.alt="number++">.alt + click</button></li>
			<li><button class="button" v-on:click.shift="number++">.shift + click</button></li>
			<li><button class="button" v-on:click.meta="number++">.meta (⌘) + click</button></li>
			<li><button class="button" v-on:click.meta.exact="number++">.meta (⌘) + click (with no other keys pressed)</button></li>
			<li><button class="button" v-on:click.exact="number++">click (with no system keys pressed at all)</button></li>
		</ul>
		
		<hr>
		<h2>Mouse button identifiers</h2>
		<p>Use the <code>.left</code>, <code>.right</code>, and <code>.middle</code> modifiers to trigger an event only when the user used the corresponding mouse button to trigger it.</p>
		<p><output>{{ message }} {{ number }}</output></p>
		<ul>
			<li><button class="button" v-on:click.left="number++">left click</button></li>
			<li><button class="button" v-on:click.right="number++">right click</button></li>
			<li><button class="button" v-on:click.middle="number++">middle click</button></li>
		</ul>
		
		<hr>
		<h2>Short syntax</h2>
		<p><output>{{ message }} {{ number }}</output></p>
		<p>You can replace <code>v-on</code> with just <code>@</code> for a shorter syntax.</p>
		<p><code>@click="number++"</code> = <button class="button" @click="number++">Shorthand for the "v-on" directive</button></p>
	</div>
</template>

<script>
export default {
	name: 'Events',
	data () {
		return {
			message: 'Hello Vue!',
			number: 5,
		}
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		},
		call: function( message ) {
			alert( message );
		},
	},
}
</script>

<style>
</style>
