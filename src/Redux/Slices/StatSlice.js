import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast"
const initialState = {
    allUserCount :0,
    subscribedCount:0
}
export const getStatData = createAsyncThunk("stats/get" , async () => {
    try {
        const response = axiosInstance.get("/admin/stats/users");
        toast.promise(response, {
            loading:"Loading the stats ...",
            success:(data) => {
                return data?.data?.message
            },
            error : "Failed to load stats"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
const statSlice = createSlice({
    name:"state",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getStatData.fulfilled, (state,action) => {
         console.log(action);
         state.allUserCount = action?.payload?.allUserCount
         state.subscribedCount = action?.payload?.subscribedUserCount
        })
    }
})


export default statSlice.reducer
