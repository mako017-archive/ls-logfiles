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

<style></style>
