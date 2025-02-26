import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/AuthSlice'
import {api} from "./rtkQuery/auth"
export default configureStore({
    reducer: {
    auth: authReducer,
       [api.reducerPath]: api.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})