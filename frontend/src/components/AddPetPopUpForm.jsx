import React, { useState,useRef ,useEffect} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const AddPetPopUpForm = ({open, handleClose, onSubmit}) => {
   
        const [form, setForm] = useState({
            name:"",
            age:"",
            breed:"",
            image:"",
        })

        const handleChange = (e)=>{
            setForm({...form, [e.target.name]:e.target.value});
        }
        const handleOnSubmit = (e)=>{
            onSubmit(form);
            handleClose();
            setForm({
                 name:"",
            age:"",
            breed:"",
            image:"",
            })
        }
        
        
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Pet</DialogTitle>
        <DialogContent>
            <TextField autoFocus margin="dense" label="Pet Name" name="name" fullWidth  value={form.name}
          onChange={handleChange} />
            <TextField autoFocus margin="dense" label="Age" name="age" type="number" fullWidth  value={form.age}
          onChange={handleChange}/>
            <TextField autoFocus margin="dense" label="Breed" name="breed" fullWidth  value={form.breed}
          onChange={handleChange} />
            <TextField autoFocus margin="dense" label="Image Url" name="image" fullWidth  value={form.image}
          onChange={handleChange} />
        </DialogContent>
        <DialogActions>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleOnSubmit}>Add Pet</button>
        </DialogActions>
    </Dialog>
  )
}

export default AddPetPopUpForm
