import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedItemId: 0
}

const sidebarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		setSelectedItemId(state, action) {
			state.selectedItemId = action.payload
		}
	}
})

export const { setSelectedItemId } = sidebarSlice.actions
export default sidebarSlice.reducer
