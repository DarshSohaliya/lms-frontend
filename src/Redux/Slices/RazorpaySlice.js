import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../Helpers/axiosInstance'
const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finamMonths: {},
    monthlySalesRecord: []
}

export const getRazorPayId = createAsyncThunk('/razorpay/getId',async () => {
    try {
         const  response = await axiosInstance.get('/payment/rezorpay-key')
         console.log(response);
         return response.data
    } catch (error) {
        toast.error("Failed to load data")
    }
})

export const purchaseCourseBundle = createAsyncThunk('/purchaseCourse',async () => {
    try {
        const response = await axiosInstance.post('/payment/subscribe');
         console.log(response);
         return response.data
    } catch (error) {
        console.log("dh");
        toast.error(error?.response?.data?.message)
    }
})

export const verifyUserPayment = createAsyncThunk('/payment/verify',async (data) => {
    try {
         const  response = await axiosInstance.post('/payment/verify',{
            razorpay_payment_id:data.razorpay_payment_id,
            razorpay_subscription_id:data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
         })
         return response.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getPaymentRecords = createAsyncThunk('/payment/record',async () => {
    try {
         const  response =  axiosInstance.post('/payment?/count=100')
            toast.promise(response,{
                loading:'Getting the payment records',
                success:(data) => {
                    return data?.data?.message
                },
                error:"Failed to get payment record"
            })
         
         return (await response).data
    } catch (error) {
        toast.error("Operation failed")
    }
})

export const cancelSubscription = createAsyncThunk('/payment/cancel',async () => {
    try {
         const  response =  axiosInstance.post('/payment/unsubscribe')
            toast.promise(response,{
                loading:'unsubscribeing the bundle',
                success:(data) => {
                    return data?.data?.message
                },
                error:"Failed to get payment record"
            })
         
         return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


const razorpaySlice =createSlice({
    name:"razorpay",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getRazorPayId.fulfilled,(state,action) => {
            state.key = action?.payload?.key
        })
        .addCase(purchaseCourseBundle.fulfilled,(state,action) => {
            state.subscription_id = action?.payload?.subscription_id
        })
        .addCase(verifyUserPayment.fulfilled,(state,action )=> {
            console.log("DOO",action);
            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success
        })
        .addCase(verifyUserPayment.rejected,(state,action )=> {
            console.log("DOO1",action);

            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success
        })
        .addCase(getPaymentRecords.fulfilled,(state,action )=> {
             state.allPayments = action?.payload?.allPayments
             state.finamMonths = action?.payload?.finamMonths
             state.monthlySalesRecord = action?.payload?.monthlySalesRecord
        })

    }
})

export default razorpaySlice.reducer