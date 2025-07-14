import * as React from 'react';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import HotelIcon from '@mui/icons-material/Hotel';
import AddPetPopUpForm from '../../components/AddPetPopUpForm';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const QuickActionGrid  = ({setPets}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleError = (err) =>
      toast.error(err, {
        position: "bottom-left",
      });
    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "bottom-left",
      });

      
  const handleAddPet = async (newPet) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/pets",
      newPet,
      {
        withCredentials: true,
      }
    );

    const { success, message , pet } = data;

    if (success && pet) {
      setPets((prev) => [...prev, pet]);
      handleSuccess(message || "Pet added successfully");
    } else {
      handleError(message || "Something went wrong");
    }
  } catch (error) {
    console.error("Add Pet Error:", error?.response?.data || error.message);
    handleError(error?.response?.data?.message || "Server error");
  }
};





  const buttonStyle = {
      backgroundColor: "var(--primary)",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  }
  return (
    <div className="container">
      <AddPetPopUpForm open={open} handleClose={()=> setOpen(false)} onSubmit={handleAddPet}/>
     <div className="row g-3">
      <div className="col">
        <div className='d-flex gap-3 flex-wrap justify-content-center'>
<Button variant="contained" endIcon={<PetsIcon />} style={buttonStyle}>
        My Pet
      </Button>
      <Button variant="contained" endIcon={<CalendarMonthIcon />} style={buttonStyle}>
        My Booking
      </Button>
      <Button variant="contained" endIcon={<AddIcon />} style={buttonStyle} onClick={()=> setOpen(true)}>
        Add New Pet
      </Button>
      <Button variant="contained" endIcon={<HotelIcon />} style={buttonStyle}>
        Book a Room
      </Button>
        </div>
         
      </div>
      <div className="col">
        <img src="/images/24_care.jpg" alt="24_care.jpg" width={500}/>
      </div>
     </div>
    </div>
  )
}

export default QuickActionGrid 
