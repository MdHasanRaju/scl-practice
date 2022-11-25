import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userLoggedOut } from '../auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: "https://backend.metaviralpro.com/api/v1/",
    //   baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = getState()?.auth?.accessToken
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
            headers.set('Accept', 'application/json')
            headers.set('Content-Type', 'application/json;charset=utf-8')
            return headers
        }
    },
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions)
        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut(userLoggedOut()))
            localStorage.removeItem('auth')
        }
        return result
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
})
