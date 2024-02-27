import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    courseData: []
} 

 export const getAllCourses = createAsyncThunk('/course/get',async () => {
    try {
        const response = axiosInstance.get('/courses')
        toast.promise(response,{
            loading:"Loading Course Data",
            success:"Courses loaded successfully",
            error:"Failed to get the courses"
           
        })
        return (await response).data.courses
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
 })

  export const createNewCourse = createAsyncThunk("/course/create" , async (data) => {
    try {
        // console.log(formData);
   const response =  axiosInstance.post('/courses',data)
   toast.promise(response,{
    loading:"Creating new course",
    success:"Course created successfully",
    error:"Failed to create course"
   })
   return (await response).data
    } catch (error) {
        console.log("error", error);
        toast.error(error?.response?.data?.message)
    }
  })



const courseSlice = createSlice({
   name:'courses',
   initialState,
   reducers:{},
   extraReducers:(builder) => {
       builder.addCase(getAllCourses.fulfilled,(state,action) => {
        if (action.payload) {
            state.courseData = [...action.payload]
        }
       })
   }
})

export default courseSlice.reducer