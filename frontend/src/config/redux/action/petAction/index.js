import { red } from "@mui/material/colors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../axiosInstance.js'

export const addPet = createAsyncThunk(
    'pet/addPet',
    async(pet,thunkAPI)=>{
        try {
            const res = await api.post("/api/pets",pet,{withCredentials:true});
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.error?.message || "Something went wrong!")
        }
    }
)

export const getPet = createAsyncThunk(
    'pet/getPet',
    async(_,thunkAPI)=>{
        try {
            const res = await api.get("/api/pets",{withCredentials:true});
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(err.response?.error?.message || "Something went wrong!")
        }
    }
)

export const delelePet = createAsyncThunk(
    'pet/deletePet',
    async(petId,thunkAPI)=>{
        try {
            const res = await api.delete(`/api/pets/${petId}`,{withCredentials:true});
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.error?.message || "Something went wrong!")
        }
    }
)