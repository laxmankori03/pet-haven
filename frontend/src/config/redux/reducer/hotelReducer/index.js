import { createSlice } from "@reduxjs/toolkit";
import { addHotelToProfile, fetchAllHotels, fetchHotel } from "../../action/hotelAction";

const initialState = {
    loading: false,
    error: null,
    message: null,
    hotel:[],
    hotels:[]
}

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchHotel.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchHotel.fulfilled,(state,action)=>{
            state.loading = false,
            state.hotel= action.payload
        })
        .addCase(fetchHotel.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        .addCase(addHotelToProfile.pending,(state)=>{
            state.loading = true;
        })
        .addCase(addHotelToProfile.fulfilled,(state,action)=>{
            state.loading  = false;
            state.hotel = action.payload;
             if (action.payload?.message) {
        state.message = action.payload.message;
    }

    if (Array.isArray(action.payload) || action.payload?.hotel) {
        state.hotel = action.payload.hotel || action.payload;
    }
        })
        .addCase(addHotelToProfile.rejected,(state,action)=>{
             state.error = action.payload?.message || "Something went wrong";
    state.message = action.payload?.message || null;
        })
        .addCase(fetchAllHotels.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchAllHotels.fulfilled,(state,action)=>{
            state.loading = false;
            state.hotels = action.payload.hotels
        })
        .addCase(fetchAllHotels.rejected,(state,action)=>{
            state.error = action.payload.error
        })
    }
})

export default hotelSlice.reducer;