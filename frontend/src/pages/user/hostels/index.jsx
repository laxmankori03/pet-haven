import HotelCard from '@/components/HotelCard'
import { fetchAllHotels } from '@/config/redux/action/hotelAction'
import DashboardLayout from '@/pages/layout/dashboardLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const BrowsHostels = () => {
  const hotelState = useSelector((state)=>state.hotel);
  const bookingState = useSelector((state)=>state.booking);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllHotels());
  },[dispatch])
  useEffect(()=>{
    if(bookingState.message){
      toast.success(bookingState.message);
    }
    if(bookingState.error){
      toast.error(bookingState.error);
    }
  },[bookingState.message]);
  return (
    <DashboardLayout>
      <div className='container mt-2'>
      <h1>Hostels</h1>
      <div className="d-flex gap-3 flex-wrap">
          {hotelState.loading?<p>Loadiong...</p>:
          hotelState.hotels.map((hotel)=>(<HotelCard hotel={hotel} key={hotel._id}/>))
          }
      </div>
    </div>
    </DashboardLayout>
  )
}

export default BrowsHostels
