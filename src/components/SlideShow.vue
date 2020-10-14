<template>
	<div class="container">
		<div class="slide-container">
			<Slide :html="currentPageHTML" />
		</div>
		<div class="button-container">
			<button v-if="currentPage >= 1" class="left" @click="_decrementPage">Zurück</button>
			<button v-if="currentPage + 1 < pagesLength" class="right" @click="_incrementPage">Weiter</button>
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
.slide-container {
	height: 95vh;
}
.container {
	display: flex;
	flex-direction: column;
	width: 50vw;
	margin: 0 auto;
}
.button-container {
	display: flex;
	margin-left: auto; // width: 100%;
	button {
		font-size: 1.2rem;
	}
	.right {
		margin-left: 0.5rem;
	}
}
@media screen and (max-width: 480px) {
	.container {
		width: 96vw;
	}
}
</style>
