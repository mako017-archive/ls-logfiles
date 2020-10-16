import { participantState } from "@/types";
const state: participantState = {
	VPCode: "testVP",
	grp: 0,
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
	getURL: ({commit}: any) => {
		const queryString = window.location.search;
		const URLObj = new URLSearchParams(queryString);
		if (URLObj.has("grp")) commit("mutateGrp", URLObj.get("grp"))
		if (URLObj.has("vp")) commit("mutateVPCode", URLObj.get("vp"))
	}
};
const mutations = {
	mutateLog: (state: participantState, newLog: string) => (state.logData = newLog),
	mutateGrp: (state: participantState, newGrp: string) => (state.logData = newGrp),
	mutateVPCode: (state: participantState, newVPCode: string) => (state.logData = newVPCode),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
