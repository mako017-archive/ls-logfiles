import { pagesState } from "@/types";
const state: pagesState = {
	allPages: [
		{
			id: 1,
			type: "default",
			html: `
			<h2>Überschrift</h2>
			<p>Ein einzelner Paragraph ohne besondere Formatierung.</p>
			<p style="color:blue;">Ein weiterer Paragraph mit inline CSS.</p>
			<img src="https://images.unsplash.com/photo-1598312119337-7bfc5c22748b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
			`,
		},
		{
			id: 2,
			type: "default",
			html: `
			<h2>Toller lateinischer Fillertext</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			`,
		},
	],
	currentPage: 0,
};
const getters = {
	currentPageHTML: (state: pagesState) => state.allPages[state.currentPage].html,
	currentPage: (state: pagesState) => state.currentPage,
	pagesLength: (state: pagesState) => state.allPages.length,
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
