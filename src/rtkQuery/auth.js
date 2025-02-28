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
         

        // this is logout query
         getDoctorProfile: builder.query({
            query:()=>'/auth/doctor-profile'
        }),
         getAllDoctorProfile: builder.query({
            query:()=>'/auth/all-doctors'
        }),
         getDoctorById: builder.query({
            query:({id})=>  `/auth/get-doctor/${id}`
         }),
         


        // here are appointment
         bookAppointment: builder.mutation({
            query: (data) => ({
                url: "/appointment/book",
                method: "POST",
                body:data
            })
         }),
         
        getAppointmentById: builder.query({
            query:({id})=>  `/appointment/${id}`
         }),
    })
})

export const {useSignUpMutation,useLoginMutation,useLazyLogoutQuery,useCheckAuthQuery,useGetDoctorProfileQuery,useGetAllDoctorProfileQuery,useGetDoctorByIdQuery,useBookAppointmentMutation,useGetAppointmentByIdQuery} = api;