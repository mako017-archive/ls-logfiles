import { pagesState } from "@/types";
const state: pagesState = {
	allPages: [
		{
			id: 1,
			type: "default",
			html: `
			<h2>Überschrift</h2>
			<p>Ein einzelner Paragraph ohne besondere Formatierung.</p>
			<p>Ein weiterer Paragraph ohne besondere Formatierung.</p>
			`,
		},
		{
			id: 2,
			type: "default",
			html: `
			<h2>Seite 2</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			`,
		},
	],
	currentPage: 0,
};
const getters = {
	currentPageHTML: (state: pagesState) => state.allPages[state.currentPage].html,
	currentPage: (state: pagesState) => state.currentPage,
};
const actions = {
	decrementPage({ commit }: any) {
		const nextPage = state.currentPage - 1;
		if (nextPage < 0) return;
		commit("changePage", nextPage);
	},
	incrementPage({ commit }: any) {
		const nextPage = state.currentPage + 1;
		if (nextPage >= state.allPages.length) return;
		commit("changePage", nextPage);
	},
};
const mutations = {
	changePage: (state: pagesState, nextPage: number) => (state.currentPage = nextPage),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
