<template>
	<div class="container">
		<h1>Seite {{ currentPage + 1 }}</h1>
		<Slide :html="currentPageHTML" />
		<div class="button-container">
			<button class="left hallo" @click="decrementPage">Zurück</button>
			<button class="right" @click="incrementPage">Weiter</button>
		</div>
		<div>
			<p>Temporärer Output</p>
			<p>{{ logData }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Slide from "@/components/SlideShowComponents/Slide.vue";
import { mapGetters, mapActions } from "vuex";

@Component({
	components: {
		Slide,
	},
	methods: {
		...mapActions(["decrementPage", "incrementPage", "appendLog"]),
		_decrementPage() {
			return 1;
		},
	},
	computed: mapGetters(["currentPageHTML", "currentPage", "logData"]),
})
export default class SlideShow extends Vue {
	@Prop() private msg!: string;
	currentPageHTML!: string;
	currentPage!: number;
	logData!: string;
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	width: 50vw;
	margin: 0 auto;
}
.button-container {
	display: flex;
	width: 100%;
	button {
		font-size: 1.2rem;
	}
	.right {
		margin-left: auto;
	}
}
</style>
