import { pagesState } from "@/types";
const state: pagesState = {
	allPages: [
		{
			id: 0,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild0.png" /></div>
			`,
		},
		{
			id: 1,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild1.png" /></div>
			`,
		},
		{
			id: 2,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild2.png" /></div>
			`,
		},
		{
			id: 3,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild3.png" /></div>
			`,
		},
		{
			id: 4,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild4.png" /></div>
			`,
		},
		{
			id: 5,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild5.png" /></div>
			`,
		},
		{
			id: 6,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild6.png" /></div>
			`,
		},
		{
			id: 7,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild7.png" /></div>
			`,
		},
		{
			id: 8,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild8.png" /></div>
			`,
		},
		{
			id: 9,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild9.png" /></div>
			`,
		},
		{
			id: 10,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild10.png" /></div>
			`,
		},
		{
			id: 11,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild11.png" /></div>
			`,
		},
		{
			id: 12,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild12.png" /></div>
			`,
		},
		{
			id: 13,
			type: "default",
			html: `
			<div class="big-img"><img src="https://lets-test.it/other/logfiles/img/Bild13.png" /></div>
			`,
		},
	],
	currentPage: 0,
	contBtn: "Weiter"
};
const getters = {
	currentPageHTML: (state: pagesState) => state.allPages[state.currentPage].html,
	currentPage: (state: pagesState) => state.currentPage,
	pagesLength: (state: pagesState) => state.allPages.length,
	contBtn: (state: pagesState) => state.contBtn,
};
const actions = {
	decrementPage({ commit }: any) {
		const nextPage = state.currentPage - 1;
		if (nextPage < 0) return;
		commit("changeBtn", "Weiter");
		commit("changePage", nextPage);
	},
	incrementPage({ commit }: any) {
		const nextPage = state.currentPage + 1;
		if (nextPage == state.allPages.length-1) commit("changeBtn", "Fertig");
		if (nextPage >= state.allPages.length) return;
		commit("changePage", nextPage);
	},
};
const mutations = {
	changePage: (state: pagesState, nextPage: number) => (state.currentPage = nextPage),
	changeBtn: (state: pagesState, nextLbl: string) => (state.contBtn = nextLbl),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
