<template>
	<div class="container" v-html="html"></div>
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
	height: 95vh;
	max-height: 95vh;
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
	}
	img {
		max-width: 100%;
		margin: 0 auto;
	}
}
</style>
