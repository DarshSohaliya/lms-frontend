import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import axiosInstance from '../../Helpers/axiosInstance'
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {rejectWithValue} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem("data") || {}
}

export const createAccount = createAsyncThunk('/auth/signup' , async (data) => {
    try {
       
        console.log(data);
        const res =  axiosInstance.post("user/register",data)
        toast.promise(res,{
            loading:"Wait! creating your account ",
            success: (data) => {
                return data?.data?.message
            },
            error:"Failed to create account"
        })
        return (await res).data

    } catch (error) {
        toast.error(error?.response?.data?.message)
      
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

export const { } = authSlice.actions
export const authSliceReducer =  authSlice.reducer