import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, loginUser, registerUser, updateUser } from "../../action/authAction/index.js";

const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;


const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    isLoggedIn: !!token,
    message: null,
    token: token || null,
    isTokenThere: !!token
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
        state.isLoggedIn =  false;
        state.isTokenThere= false;
      },
      setIsTokenThere: (state)=>{
        state.isTokenThere = true;
      },
      setIsNotTokenThere: (state)=>{
        state.isTokenThere = false;
      },
      clearAuthMessage: (state) => {
      state.message = null;
      state.error = null;
    },
    },
    extraReducers:(builder) => {
        builder
           .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
            state.isLoggedIn = false;
           })
           .addCase(loginUser.fulfilled,(state,action)=>{
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            state.isLoggedIn = true;
            state.message = action.payload.message || 'Login successful';
            state.token = action.payload.token;
           })
           .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload || 'Login failed';
            state.isLoggedIn = false;
           })
           .addCase(registerUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
            state.isLoggedIn = false;
           })
           .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = null;
            state.message = action.payload.message || 'Registration successful';
           })
           .addCase(registerUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload || 'Registration failed';
            state.isLoggedIn = false;
           })
           .addCase(fetchUser.pending,(state)=>{
            state.loading = true;
           })
           .addCase(fetchUser.fulfilled,(state,action)=>{
             state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoggedIn = true;
        state.isTokenThere = true;
        state.loading = false;
           })
           .addCase(fetchUser.rejected,(state,action)=>{
             state.user = null;
        state.isAuthenticated = false;
        state.isLoggedIn = false;
        state.loading = false;
        state.token = null;
        localStorage.removeItem("token");
           })
          .addCase(updateUser.pending,(state)=>{
            state.loading = true;
          })
          .addCase(updateUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
          })
          .addCase(updateUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload.error
          })
    }
})

export const { logout ,clearAuthMessage,setIsNotTokenThere,setIsTokenThere} = authSlice.actions;
export default  authSlice.reducer;