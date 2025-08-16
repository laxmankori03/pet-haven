import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  ListItemText,
  Typography
} from "@mui/material";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const HostelBookingForm = ({ open, handleClose, pets, onSubmit ,hotelId,hotelPrice}) => {
  const [formData, setFormData] = useState({
    hotel:hotelId,
    pet: "",
    checkInDate: "",
    checkOutDate: "",
    services: [],
  });

  const availableServices = ["grooming", "food", "walking", "training"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); 
  };

  const handleServicesChange = (e) => {
    setFormData((prev) => ({ ...prev, services: e.target.value }));
  };
  
  const handleSubmit = () => {
     if (!formData.pet) {
    toast.error("Please select a pet.");
    return;
  }
  if (!formData.checkInDate) {
    toast.error("Please select a check-in date.");
    return;
  }
  if (!formData.checkOutDate) {
    toast.error("Please select a check-out date.");
    return;
  }
  if (dayjs(formData.checkOutDate).isBefore(dayjs(formData.checkInDate))) {
    toast.error("Check-out date must be after check-in date.");
    return;
  }
  if (formData.services.length === 0) {
    toast.error("Please select at least one service.");
    return;
  }
    onSubmit(formData);
    handleClose();
    setFormData({ pet: "", checkInDate: "", checkOutDate: "", services: [] });
  };

  const today = dayjs().format("YYYY-MM-DD");
  const checkIn = dayjs(formData.checkInDate);
  const checkOut = dayjs(formData.checkOutDate);
  
  // Difference in days
  const totalDays = checkOut.diff(checkIn, "day");
  
  //Total Price
  const totalPrice = totalDays * hotelPrice;


  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Book a Pet Stay</DialogTitle>
      <DialogContent dividers>
        
        {/* Pet Selection */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Pet</InputLabel>
          <Select
            name="pet"
            value={formData.pet}
            onChange={handleChange}
            required
          >
            {pets.map((p) => (
              <MenuItem key={p._id} value={p._id}>
                {p.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Check-In Date */}
        <TextField
          fullWidth
          required
          margin="normal"
          label="Check-In Date"
          type="date"
          name="checkInDate"
          inputProps={{
        min: today,
      }}
          value={formData.checkInDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        {/* Check-Out Date */}
        <TextField
          fullWidth
          required
          margin="normal"
          label="Check-Out Date"
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
           inputProps={{
        min: today,
      }}
        />

        {/* Services */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Services</InputLabel>
          <Select
          required
            multiple
            value={formData.services}
            onChange={handleServicesChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {availableServices.map((service) => (
              <MenuItem key={service} value={service}>
                <Checkbox checked={formData.services.includes(service)} />
                <ListItemText primary={service} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Total Price  */}
          <Typography variant="body2">
          Total Price: ₹{totalPrice? totalPrice : "0"}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Book Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HostelBookingForm;
