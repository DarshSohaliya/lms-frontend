import {configureStore} from '@reduxjs/toolkit'
import {authSliceReducer} from './Slices/AuthSlice'
import courseSliceReducer from './Slices/CourseSlice'
const store  = configureStore({
    reducer:{
        auth:authSliceReducer,
        courses:courseSliceReducer

    },
    devTools:true
})

export default store