import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    courseData: []
} 


export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
      const res = axiosInstance.get("/courses");
  
      toast.promise(res, {
        loading: "Loading courses data...",
        success: "Courses loaded successfully",
        error: "Failed to get courses",
      });
  
      const response = await res;
    
      return response.data.courses;

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  });

 export const createNewCourse = createAsyncThunk("/get/courses", async (data) => {
    console.log(data);
    try {
      
        const response = await axiosInstance.post("/courses", data);
        toast.promise(response, {
            loading: "Creating new course",
            success: "Course created successfully",
            error: "Failed to create course"
        });

        return (await response).data

    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});



const courseSlice = createSlice({
   name:'courses',
   initialState,
   reducers:{},
   extraReducers:(builder) => {
       builder.addCase(getAllCourses.fulfilled,(state,action) => {
        if (action.payload) {
          console.log(action.payload);
            state.courseData = [...action.payload]
            


        }
       })

   }

})

export default courseSlice.reducer