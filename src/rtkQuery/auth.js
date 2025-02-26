import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`,
     credentials:'include'
    }),

    endpoints: (builder) => ({

        // this is sign-up query
        signUp: builder.mutation({
            query: (data) => ({
                url: "/auth/sign-up",
                method: "POST",
                body:data
            })
        }),

        // this is Login query
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body:data
            })
        }),

        // this is logout query
         logout: builder.query({
            query:()=>'/auth/logout'
         }),
         

        // this is logout query
         checkAuth: builder.query({
            query:()=>'/auth/check-auth'
        }),
    })
})

export const {useSignUpMutation,useLoginMutation,useLazyLogoutQuery,useCheckAuthQuery} = api;