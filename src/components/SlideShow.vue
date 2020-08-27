<template>
	<div class="hello">
		<h1>Page 1</h1>
		<Slide html="<h2>Hello World</h2>" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Slide from "@/components/SlideShowComponents/Slide.vue";

@Component({
	components: {
		Slide,
	},
})
export default class SlideShow extends Vue {
	@Prop() private msg!: string;
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
