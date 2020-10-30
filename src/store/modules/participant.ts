import { participantState } from "@/types";
import axios from "axios";

const state: participantState = {
	VPCode: "testVP",
	grp: 1,
	logData: "",
};
const getters = {
	VP: (state: participantState) => state.VPCode,
	showPrompt: (state: participantState) => state.grp == 2 ? true : false,
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
	},
	sendResults: async ()=>{
		const response = await axios.post("/other/ls-logfiles/php/mysql.php", JSON.stringify(state));
		window.location.replace(`https://www.soscisurvey.de/wissarbeit/?q=wissarbeit2&vpn=${state.VPCode}&grp=${state.grp}`);
	}
};
const mutations = {
	mutateLog: (state: participantState, newLog: string) => (state.logData = newLog),
	mutateGrp: (state: participantState, newGrp: number) => (state.grp = newGrp),
	mutateVPCode: (state: participantState, newVPCode: string) => (state.VPCode = newVPCode),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
