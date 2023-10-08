import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_URL, token} from './app.constants.js'

// OLD API
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getToken: builder.mutation({
            query: ({username, password}) => ({
                url: '/token',
                method: 'POST',
                body: {username, password}
            })
        }),
        getUserBalance: builder.query({
            query: () => {
                return {
                    url: '/get_balance',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        }),
        getUserNews: builder.query({
            query: () => {
                return {
                    url: '/news',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        }),
        getUserStatus: builder.query({
            query: () => {
                return {
                    url: '/get_status',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        }),
        getNotification: builder.query({
            query: () => {
                return {
                    url: '/notifications',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        })
    })
})

export const {
    useGetTokenMutation,
    useGetUserBalanceQuery,
    useGetUserNewsQuery,
    useGetUserStatusQuery,
    useGetNotificationQuery
} = api
