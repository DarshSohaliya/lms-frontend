import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    lectures:[]
}

export const getCourseLectures = createAsyncThunk('/course/lecture/get' , async (cid) => {
      try {
         const response = axiosInstance.get(`/courses/${cid}`)
         toast.promise(response,{
            loading:"Loading couse lecture",
            success:"Lecture fetched successfully",
            error:"failed to load lecture"
         })
         return (await response).data
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
})

export const addCourseLecture = createAsyncThunk('/course/lecture/add' , async (data) => {
    try {
   
         const formData = new FormData()
         formData.append("lecture",data.lecture)
         formData.append("title",data.title)
         formData.append("description",data.description)


       const response = axiosInstance.post(`/courses/${data.id}`,formData)
       toast.promise(response,{
          loading:"adding couse lecture",
          success:"Lecture adding successfully",
          error:"failed to add lecture"
       })
       return (await response).data
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
})

export const deleteCourseLecture = createAsyncThunk('/course/lecture/delete' , async (data) => {
    try {
   
        

       const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`)
       toast.promise(response,{
          loading:"deleting couse lecture",
          success:"Lecture deleted successfully",
          error:"failed to delete lecture"
       })
       return (await response).data
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
})


const lectureSlice = createSlice({
    name:"lecture",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCourseLectures.fulfilled,(state,action)=>{
            state.lectures=action?.payload?.lectures
        })
        .addCase(addCourseLecture.fulfilled,(state,action) => {
            state.lectures=action?.payload?.course?.lectures

        })
    }
})

export default lectureSlice.reducer