import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axiosInstance.js";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(user,thunkAPI)=>{
        try {
            const res  = await api.post('/api/auth/login', {
                email: user.email,
                password: user.password
            },{withCredentials:true});
            localStorage.setItem('token', res.data.token); // Store token in localStorage
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Something went wrong');
        }
    }
)

export  const registerUser = createAsyncThunk(
    'auth/registerUser',
    async(user,thunkAPI)=>{
        try {
            const res = await api.post('/api/auth/register', {
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                role: user.role
            });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.message || 'Something went wrong');
        }
    }
)

export const fetchUser = createAsyncThunk(
    "auth/fetchUser",
    async(_,thunkAPI)=>{
        const token = localStorage.getItem("token");
        if(!token) return thunkAPI.rejectWithValue("No token");
        try {
           const res = await api.get("/api/auth/me", {withCredentials:true});
           return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async(user,thunkAPI)=>{
        try {
            const res = await api.patch("/api/auth/me/update",{name:user.name,phone:user.phone},{withCredentials:true});
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)