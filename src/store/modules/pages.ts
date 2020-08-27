const state = {
	allPages: [
		{
			id: 1,
			html: `
            <h2>Überschrift</h2>
            <p>Ein einzelner Paragraph ohne besondere Formatierung.</p>
            <p>Ein weiterer Paragraph ohne besondere Formatierung.</p>
            `,
		},
	],
};
const getters = {
	pages: (state: any) => state.allPages[0].html,
};
const actions = {};
const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
