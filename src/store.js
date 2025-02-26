import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/AuthSlice'
export default configureStore({
    reducer: {
      auth:authReducer
  }
})