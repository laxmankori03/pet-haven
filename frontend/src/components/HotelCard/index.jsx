import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HostelBookingForm from '../HostelBookingForm';
import { getPet } from '@/config/redux/action/petAction';
import { createBooking } from '@/config/redux/action/bookingAction';

const HotelCard = ({hotel}) => {
  const authState = useSelector((state)=>state.auth);
  const petState = useSelector((state)=>state.pet);
  const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    useEffect(()=>{
      dispatch(getPet());
    },[dispatch])
  const handleBookHostel = (data)=>{
    dispatch(createBooking(data));
  }
     if (!hotel) return null;
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden bg-darkcard" style={{maxWidth: "320px"}}>
  <img src={hotel.image} className="card-img-top" alt="Hotel Image"/>
  
  <div className="card-body">
    <h5 className="card-title fw-bold">{hotel.name}</h5>
    <p className="card-text text-muted mb-2">📍 {hotel.location}</p>
    <p className="card-text small text-truncate" style={{maxHeight: "40px"}}>
      {hotel.description?.slice(0,50)}{hotel.description?.lenght>20?"...":""}
    </p>

    <div className="d-flex justify-content-between align-items-center mt-3">
      <span className="fw-bold text-success">₹ {hotel.price} / Day</span>
      {authState.user?.role === "admin" ?<><button className="btn btn-primary">Edit</button></>:<><button className="btn btn-primary" onClick={()=>setOpen(true)}>Book</button> <HostelBookingForm open={open} handleClose={()=>setOpen(false)} onSubmit={handleBookHostel} pets={petState.pets} hotelId={hotel._id} hotelPrice={hotel.price}/></>}
    </div>
  </div>
</div>

  )
}

export default HotelCard
