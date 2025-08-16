import {createSlice} from "@reduxjs/toolkit";
import { createBooking, getAdminBookings, getMyBookings, updateBookingStatus } from "../../action/bookingAction";

const initialState = {
  loading: false,
  error: null,
  message: null,
  bookings: [],
  isUpdate :false
};

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createBooking.pending,(state)=>{
          state.loading = true;
        })
        .addCase(createBooking.fulfilled,(state,action)=>{
          state.loading = false;
          state.message = action.payload.message;
          if (action.payload.booking){
            state.bookings.push(action.payload.booking);
          }
        })
        .addCase(createBooking.rejected,(state,action)=>{
          state.error = action.payload.error
        })
        .addCase(getMyBookings.pending,(state)=>{
          state.loading = true;
        })
        .addCase(getMyBookings.fulfilled,(state,action)=>{
          state.loading = false;
          state.bookings = action.payload;
        })
        .addCase(getMyBookings.rejected,(state,action)=>{
          state.error = action.payload;
        })
        .addCase(getAdminBookings.pending,(state)=>{
          state.loading = true;
        })
        .addCase(getAdminBookings.fulfilled,(state,action)=>{
          state.loading = false;
          state.bookings = action.payload;
        })
        .addCase(getAdminBookings.rejected,(state,action)=>{
          state.error = action.payload;
        })
        .addCase(updateBookingStatus.pending,(state)=>{
          state.loading = true;
          state.error = null;
          state.isUpdate = false;
        })
        .addCase(updateBookingStatus.fulfilled,(state,action)=>{
          state.loading = false;
          state.isUpdate = true;
          const updateBooking = action.payload.booking;
          const index = state.bookings.findIndex(b=>b._id === updateBooking._id);
          if (index !== -1) {
            state.bookings[index] = updateBooking;
          }
        })
        .addCase(updateBookingStatus.rejected,(state,action)=>{
          state.loading = false;
        state.error = action.payload;
        state.isUpdate = false;
        })
    }
})

export default  bookingSlice.reducer;