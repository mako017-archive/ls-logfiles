<template>
	<div class="container">
		<h1>Seite {{ currentPage + 1 }}</h1>
		<Slide :html="currentPageHTML" />
		<div class="button-container">
			<button class="left hallo" @click="_decrementPage">Zurück</button>
			<button class="right" @click="_incrementPage">Weiter</button>
		</div>
		<div>
			<p>Temporärer Output</p>
			<p>{{ logData }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slide from "@/components/SlideShowComponents/Slide.vue";
import { mapGetters, mapActions } from "vuex";

@Component({
	components: {
		Slide,
	},
	methods: mapActions(["decrementPage", "incrementPage", "appendLog"]),
	computed: mapGetters(["currentPageHTML", "currentPage", "logData", "pagesLength"]),
})
export default class SlideShow extends Vue {
	timestamp!: number;
	currentPageHTML!: string;
	currentPage!: number;
	logData!: string;
	pagesLength!: number;
	decrementPage!: () => void;
	incrementPage!: () => void;
	appendLog!: (log: string) => void;

	private _decrementPage(): void {
		if (this.currentPage < 1) return;
		const newTime = new Date().getTime();
		const RT = newTime - this.timestamp;
		this.timestamp = newTime;
		this.appendLog(RT + ":PrevPage;");
		this.decrementPage();
	}
	private _incrementPage(): void {
		if (this.currentPage + 1 >= this.pagesLength) return;
		const newTime = new Date().getTime();
		const RT = newTime - this.timestamp;
		this.timestamp = newTime;
		this.appendLog(RT + ":NextPage;");
		this.incrementPage();
	}

	mounted() {
		this.timestamp = new Date().getTime();
	}
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
