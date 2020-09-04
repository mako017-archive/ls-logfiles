import { participantState } from "@/types";
const state: participantState = {
	VPCode: "testVP",
	logData: "",
};
const getters = {
	VP: (state: participantState) => state.VPCode,
	logData: (state: participantState) => state.logData,
};
const actions = {
	appendLog: ({ commit }: any, newEvent: string) => {
		const newLog = state.logData + newEvent;
		commit("mutateLog", newLog);
	},
};
const mutations = {
	mutateLog: (state: participantState, newLog: string) => (state.logData = newLog),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
