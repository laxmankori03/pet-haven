import BookingCard from '@/components/Bookings/BookingCard';
import { getMyBookings } from '@/config/redux/action/bookingAction';
import DashboardLayout from '@/pages/layout/dashboardLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const MyBookings = () => {
  const bookingState = useSelector((state)=>state.booking);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMyBookings());
  },[dispatch])
  return (
    <DashboardLayout>
        <div className='container mt-3'>
          <h3 className='my-5'>Your Bookings</h3>
          {bookingState.bookings.length>0?(
            <div className='d-flex flex-wrap gap-3'>
          {bookingState.bookings.map((booking)=>(<BookingCard booking={booking} key={booking._id}/>))}
          </div>
          ):(
            <p>No Bookings</p>
          )}
    </div>
    </DashboardLayout>
  )
}

export default MyBookings
