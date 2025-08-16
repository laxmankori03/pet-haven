import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addPet } from "@/config/redux/action/petAction";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const petTypes = ["Dog", "Cat"];

const PetForm = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [petData, setPetData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    vaccinated:"",
    image:""
    // photo: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPetData({
      ...petData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPet(petData));
    console.log("Pet data:", petData);
    handleClose();
  };

  return (
    <div className="my-3">
      {/* Trigger Button */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + Add Pet
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Add New Pet
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Pet Name"
              name="name"
              value={petData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              select
              label="Type"
              name="type"
              value={petData.type}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            >
              {petTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Breed"
              name="breed"
              value={petData.breed}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Age (Years)"
              name="age"
              type="number"
              value={petData.age}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Weight (Kg)"
              name="weight"
              type="number"
              value={petData.weight}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Image url"
              name="image"
              type="text"
              value={petData.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Vaccinated</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="vaccinated"
        onChange={handleChange}
        value={String(petData.vaccinated)}
      >
        <FormControlLabel style={{color:"grey"}} value="true" control={<Radio />} label="Yes"/>
        <FormControlLabel style={{color:"grey"}} value="false" control={<Radio />} label="No"/>
      </RadioGroup>
    </FormControl>

            {/* <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ mt: 2 }}
            >
              Upload Photo
              <input
                type="file"
                hidden
                name="photo"
                onChange={handleChange}
                accept="image/*"
              />
            </Button> */}

            <Box mt={3} display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Pet
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default PetForm;
