import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../axiosInstance.js'


export const createBooking = createAsyncThunk(
    'booking/createBooking',
    async(booking,thunkAPI)=>{
        try {
            const res = await api.post("/api/bookings",{
                hotel : booking.hotel,
                pet : booking.pet,
                services: booking.services,
                checkInDate: booking.checkInDate,
                checkOutDate: booking.checkOutDate
            },{withCredentials:true});
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Something went wrong');
        }
    }
)

export const getMyBookings = createAsyncThunk(
    "booking/getMyBookings",
    async(_,thunkAPI)=>{
        try {
            const res = await api.get("/api/bookings/mine",{withCredentials:true});
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Something went wrong');
        }
    }
)


export const getAdminBookings = createAsyncThunk(
    'booking/getAdminBookings',
    async(_,thunkAPI)=>{
        try {
            const res = await api.get("/api/bookings/admin",{withCredentials:true});
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Something went wrong');
        }
    }
)

export const updateBookingStatus = createAsyncThunk(
    'booking/updateBookingStatus',
    async({bookingId,status},thunkAPI)=>{
        try {
            const res = await api.patch(`/api/bookings/${bookingId}/status`,{status},{withCredentials:true});
            return  res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Something went wrong');
        }
    }
)