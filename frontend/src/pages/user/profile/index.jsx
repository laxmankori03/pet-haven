import PetCard from '@/components/petCard';
import PetForm from '@/components/petForm';
import ProfileCard from '@/components/ProfileCard';
import { getPet } from '@/config/redux/action/petAction';
import { clearAuthMessage } from '@/config/redux/reducer/authReducer';
import DashboardLayout from '@/pages/layout/dashboardLayout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const authState = useSelector((state)=>state.auth);
  const petState = useSelector((state)=>state.pet);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPet());
  },[dispatch])
  return (
  <DashboardLayout>
       <div className="container mt-3">
       <h1 className='mb-4'>User Profile</h1>
        {
        authState.loading?(
          <p>
            Loading...
          </p>
        ):(
          <ProfileCard user={authState.user}/>
        )
       }
       <h1 className='my-4'>Your Pets</h1>
       {petState.pets>0?(<><p>No Pet Added...</p></>):(
        <div className='d-flex gap-4 flex-wrap'>
          {petState.pets?.map((pet) => (
   <PetCard key={pet._id} pet={pet} />
))}
        </div>
       )}
       <PetForm/>
       </div>
  </DashboardLayout>
  )
}

export default Profile
