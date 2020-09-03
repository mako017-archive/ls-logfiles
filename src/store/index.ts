import Vue from "vue";
import Vuex from "vuex";
import pages from "@/store/modules/pages";
import participant from "@/store/modules/participant";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		pages,
		participant,
	},
});
