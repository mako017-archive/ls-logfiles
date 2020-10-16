<template>
	<div id="app">
		<SlideShow msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SlideShow from "@/components/SlideShow.vue";
import { mapActions } from "vuex";

@Component({
	components: {
		SlideShow,
	},
	methods: mapActions(["getURL"]),
})
export default class App extends Vue {
	getURL!: () => void;

	mounted() {
		this.getURL();
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
