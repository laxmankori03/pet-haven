import AdminBookingShowCard from '@/components/adminBookingShowCard'
import { getAdminBookings } from '@/config/redux/action/bookingAction'
import AdminDashboardLayout from '@/pages/layout/dashboardLayout/adminDashboardLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Bookings = () => {
    const bookingState = useSelector((state)=>state.booking);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAdminBookings());
    },[dispatch,bookingState.status])
  return (
   <AdminDashboardLayout>
    <div className="container my-5">
   {bookingState.bookings?.map((booking)=>(
       <AdminBookingShowCard booking={booking} key={booking._id}/>))}
       </div>
   </AdminDashboardLayout>
  )
}

export default Bookings
