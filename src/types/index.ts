export interface pagesState {
	allPages: Array<page>;
	currentPage: number;
}

export interface page {
	id: number;
	type: string;
	html: string;
}

export interface participantState {
	VPCode: string;
	logData: string;
}
