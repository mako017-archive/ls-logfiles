export interface pagesState {
	allPages: Array<page>;
	currentPage: number;
	contBtn: string;
}

export interface page {
	id: number;
	type: string;
	html: string;
	prompt?: string;
}

export interface participantState {
	VPCode: string;
	grp: number;
	logData: string;
}
