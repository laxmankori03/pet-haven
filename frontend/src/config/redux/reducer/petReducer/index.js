import { createSlice } from "@reduxjs/toolkit"
import { addPet, delelePet, getPet } from "../../action/petAction"

const initialState = {
    loading: false,
    error: null,
    message: null,
    pets:[]
}

const petSlice = createSlice({
    name:"pet",
    initialState,
    reducers:{
clearStatus: (state) => {
  state.message = null;
  state.error = null;
}
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addPet.pending,(state)=>{
            state.loading = true;
        })
        .addCase(addPet.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
              if (action.payload.pet) {
                state.pets.push(action.payload.pet);
            }
        })
        .addCase(addPet.rejected,(state,action)=>{
            state.error = action.payload.error;
        })
        .addCase(getPet.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getPet.fulfilled,(state,action)=>{
            state.loading = false;
            state.pets = action.payload.pets
        })
        .addCase(getPet.rejected,(state,action)=>{
            state.error = action.error.message;
        })
        .addCase(delelePet.pending,(state)=>{
            state.loading = true
        })
        .addCase(delelePet.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
            state.pets = state.pets.filter(pet => String(pet._id) !== String(action.payload.petId));
        })
        .addCase(delelePet.rejected,(state,action)=>{
            state.error = action.error.message;
        })
    }
})

export const {clearStatus} = petSlice.actions;
export default petSlice.reducer;