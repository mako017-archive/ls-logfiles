<template>
	<div class="hello">
		<h1>Page 1</h1>
		<Slide :html="pages" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Slide from "@/components/SlideShowComponents/Slide.vue";
import { mapGetters } from "vuex";

@Component({
	components: {
		Slide,
	},
	computed: mapGetters(["pages"]),
})
export default class SlideShow extends Vue {
	@Prop() private msg!: string;
	pages!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
