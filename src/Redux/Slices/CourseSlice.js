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


  export const deleteCourse = createAsyncThunk("/course/delete", async (id) => {
    try {
        const response = axiosInstance.delete(`/courses/${id}`);
        toast.promise(response, {
            loading: "deleting course ...",
            success: "Courses deleted successfully",
            error: "Failed to delete the courses",
        });

        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
}); 

 export const createNewCourse = createAsyncThunk("courses/createNewCourse", async (data) => {
    console.log(data);
    try {

      
      
        const response =  axiosInstance.post("/courses", data);
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
        console.log(action);
        if (action.payload) {
          console.log(action.payload);
            state.courseData = [...action.payload]
        }
       })
       .addCase(deleteCourse.fulfilled,(state,action) => {
        console.log(action);
        const deleteCourseId = action.payload
        state.courseData = state.courseData.filter(course => course._id !== deleteCourseId)
       })

   }

})

export default courseSlice.reducer