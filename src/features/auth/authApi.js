import { successAlert } from 'utils'
import { apiSlice } from '../Api/apiSlice'
import { userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          localStorage.setItem(
            'auth',
            JSON.stringify({
              user: result?.data?.data?.user,
              accessToken: result?.data?.data?.token,
            })
          )
          // STORE USER TO REDUX STORE
          dispatch(
            userLoggedIn({
              user: result?.data?.data?.user,
              accessToken: result?.data?.data?.token,
            })
          )
        } catch (error) {
          console.log(error)
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          result.data.data && successAlert("User registered successfully, please login");
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
