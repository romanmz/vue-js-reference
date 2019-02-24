<template>
	<div class="section-reusable-settings">
		<h1>Reusable Settings</h1>
		
		<hr>
		<h2>Mixins</h2>
		<p>You can create reusable default settings by passing "mixin" objects to the <code>mixins</code> property of Vue instances and components.</p>
		<p>If there's a conflict between the mixin and the instance settings, then the instance data will be used. The only exception are lifecycle hooks, which are all run one after the other (mixin hooks first, instance hooks later).</p>
		<p>This function was defined in a mixin, and then passed to the current component: <button class="button" @click="shuffleCard">Shuffle Card</button></p>
		<p>You can also define global mixins with the <code>Vue.mixin()</code> method, which will make all Vue instances and components inherit the components of that mixin automatically, but this is not best practice.</p>
		
	</div>
</template>

<script>

// Mixins
// ------------------------------
let cardMixin = {
	data() {
		return {
			currentNumber: 1,
			currentSuit: '♣',
		}
	},
	computed: {
		currentCard() {
			return {
				number: this.currentNumber,
				suit: this.currentSuit,
			}
		},
		numbers() {
			return [1,2,3,4,5,6,7,8,9,10,11,12,13]
		},
		suits() {
			return ['♣','♦','♥','♠']
		},
	},
	methods: {
		shuffleCard() {
			let numberIndex = Math.floor( Math.random() * this.numbers.length );
			let suitIndex = Math.floor( Math.random() * this.suits.length );
			this.currentNumber = this.numbers[numberIndex]
			this.currentSuit = this.suits[suitIndex]
			console.log( this.currentCard )
		},
	},
};

// ------------------------------
// Export current component
export default {
	name: 'ReusableSettings',
	mixins: [cardMixin],
}
</script>

<style>
</style>
