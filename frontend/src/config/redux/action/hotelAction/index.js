import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addHotelToProfile = createAsyncThunk(
    'hotel/addHotelToProfile',
    async(hotel,thunkAPI)=>{
        try {
            const res = await axios.post("http://localhost:5000/api/profile/add-hotel",{
                 name:hotel.name,
      location:hotel.location,
      description:hotel.description,
      price:hotel.price,
      image:hotel.image,
            },{withCredentials:true});
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue({message:err.response?.data?.message || 'Something went wrong'});
        }
    }
)

export const fetchHotel = createAsyncThunk(
    'auth/fetchHotel',
    async(_,thunkAPI)=>{
        try {
            const res = await axios.get("http://localhost:5000/api/profile/hotel_exist",{withCredentials:true});
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const fetchAllHotels = createAsyncThunk(
    'get/hotels',
    async(_,thunkAPI)=>{
        try {
            const res = await axios.get("http://localhost:5000/api/hotels",{withCredentials:true});
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)