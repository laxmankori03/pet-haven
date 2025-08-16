import HotelCard from '@/components/HotelCard'
import HotelForm from '@/components/hotelForm'
import ProfileCard from '@/components/ProfileCard'
import { fetchHotel } from '@/config/redux/action/hotelAction'
import AdminDashboardLayout from '@/pages/layout/dashboardLayout/adminDashboardLayout'
import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const authState = useSelector((state)=>state.auth);
  const hotelState = useSelector((state)=>state.hotel);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchHotel());
  },[])
  return (
    
    <AdminDashboardLayout>
      <div className="container mt-3">
       <h1 className='mb-4'>Admin Profile</h1>
       {
        authState.loading?(
          <p>
            Loading...
          </p>
        ):(
          <ProfileCard user={authState.user}/>
        )
       }

       <h1 className='my-3'>Hotel</h1>
       {hotelState.hotel &&
        hotelState.hotel.length>0 ?(<>  <p>No Hotel Added!</p>
       <HotelForm/></>):(<HotelCard hotel={hotelState.hotel}/> )
       }
      </div>
    </AdminDashboardLayout>
  )
}

export default Profile
