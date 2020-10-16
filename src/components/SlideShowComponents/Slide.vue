<template>
	<div class="root">
		<div class="container" v-html="html"></div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Slide extends Vue {
	@Prop() private html!: string;
}
</script>

<style lang="scss">
.container {
	padding-top: 0.1rem;
	h1 {
		font-size: 2rem;
		margin-bottom: 0.7rem;
	}
	h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.3rem;
	}
	p {
		margin-bottom: 0.3rem;
		text-align: left;
	}
	img {
		max-width: 100%;
		margin: 0 auto;
	}
	.big-img {
		width: 97vw;
		position: absolute;
		left: 1.5vw;
		max-height: 90vh;
		margin: 0.5rem 0;
		img {
			max-height: 90vh;
		}
	}
}
</style>
