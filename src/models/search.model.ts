export const initialState: ActionSearch = {
	query: null,
	success: false,
	error: null,
}
export interface ActionSearch {
	query: string | null
	success: boolean
	error: string | null
}
