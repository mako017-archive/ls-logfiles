<template>
	<div class="container">
		<div class="slide-container">
			<Slide v-if="showPrompt && currentPrompt" :html="currentPrompt" />
			<Slide v-else :html="currentPageHTML" />
		</div>
		<div class="button-container">
			<button v-if="currentPage - 1 >= 1" class="left" @click="_decrementPage">Zurück</button>
			<button class="right" @click="_incrementPage">{{ contBtn }}</button>
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
	methods: mapActions(["decrementPage", "incrementPage", "appendLog", "sendResults"]),
	computed: mapGetters(["currentPageHTML", "currentPage", "currentPrompt", "logData", "pagesLength", "contBtn", "showPrompt"]),
})
export default class SlideShow extends Vue {
	timestamp!: number;
	currentPageHTML!: string;
	currentPage!: number;
	currentPrompt!: string;
	logData!: string;
	pagesLength!: number;
	decrementPage!: () => void;
	incrementPage!: () => void;
	sendResults!: () => void;
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
		if (this.currentPage + 1 >= this.pagesLength) {
			if (confirm("Bist Du sicher, dass Du das Lernprogramm beenden möchtest?")) {
				this.sendResults();
			}
			return;
		}
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
	height: 90vh;
}
.container {
	display: flex;
	flex-direction: column;
	width: 50vw;
	margin: 0 auto;
}
.prompt {
	text-align: right;
	color: orangered;
	font-size: 1.7rem;
	margin-bottom: 0.5rem;
}
.button-container {
	display: flex;
	margin-left: auto; // width: 100%;
	button {
		font-size: 2.2rem;
		background-color: gray;
		color: white;
		border: none;
		&:hover {
			cursor: pointer;
		}
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
