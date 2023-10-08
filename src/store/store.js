import { api } from '../app/api/api.js'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarState/sidebarState.slice'
import notificationsReducer from './notification/notificationsSlice'

const reducers = combineReducers({
	navbar: sidebarReducer,
	notifications: notificationsReducer,
	[api.reducerPath]: api.reducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})
