import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useGetNotificationQuery } from '../../app/api/api.js'

export const fetchNotifications = createAsyncThunk(
	'notifications/fetchNotifications',
	async () => {
		const response = await useGetNotificationQuery()
		return response.data
	}
)

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState: [],
	reducers: {
		addNotification: (state, action) => {
			state.push({ ...action.payload, read: false })
		},
		removeNotification: (state, action) => {
			return state.filter(notification => notification.id !== action.payload.id)
		},
		markNotificationAsRead: (state, action) => {
			const notificationId = action.payload
			const notification = state.find(
				notification => notification.id === notificationId
			)
			if (notification) {
				notification.read = true
			}
		},
		markNotificationAsUnread: (state, action) => {
			const notificationId = action.payload
			const notification = state.find(
				notification => notification.id === notificationId
			)
			if (notification) {
				notification.read = false
			}
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchNotifications.fulfilled, (state, action) => {
			return [
				...state,
				...action.payload.map(notification => ({
					...notification,
					read: false
				}))
			]
		})
	}
})

export const {
	addNotification,
	removeNotification,
	markNotificationAsRead,
	markNotificationAsUnread
} = notificationsSlice.actions

export default notificationsSlice.reducer
