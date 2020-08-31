<template>
	<div class="hello">
		<h1>Page 1</h1>
		<Slide :html="currentPageHTML" />
		<div class="button-container">
			<button @click="decrementPage">Zurück</button>
			<button @click="incrementPage">Weiter</button>
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
		...mapActions(["decrementPage", "incrementPage"]),
	},
	computed: mapGetters(["currentPageHTML"]),
})
export default class SlideShow extends Vue {
	@Prop() private msg!: string;
	currentPageHTML!: string;
	currentPage = 0;
}
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.hallo {
	display: flex;
	flex-direction: column;
}
.button-container {
	margin-top: auto;
}
</style>
