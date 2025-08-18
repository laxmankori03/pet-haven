import { fetchUser, updateUser } from '@/config/redux/action/authAction';
import { clearAuthMessage } from '@/config/redux/reducer/authReducer';
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const ProfileUpdateForm = ({handleClose ,open}) => {
    const dispatch = useDispatch();
    const authState = useSelector((state)=>state.auth);
    

    const [profileData,setProfileData] = useState({
        name:authState?.user?.name,
        phone:authState?.user?.phone
    });

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setProfileData({
            ...profileData,
            [name]:value
        });
    }

//     useEffect(() => {
//     if (authState.message) {
//       toast.success(authState.message);
//       dispatch(clearAuthMessage());
//     }
//     if (authState.error) {
    //         toast.error(authState.error);
    //         dispatch(clearAuthMessage());
    //     }
    //   }, [authState.message, authState.error]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser(profileData)).unwrap()
        .then(()=>{
            toast.success("Profile updated successfully!");
            dispatch(fetchUser());
            handleClose();
        })
        .catch((err)=>{
    
                    toast.error(err || "Update Failed!");
        })
    }
  return (
    <div className='my-3'>
     
    <Modal open={open} onClose={handleClose}>
        <Box sx={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
        }}>
<Typography variant="h6" mb={2}>
            Update Profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField 
            label="Full Name"
            name='name'
            value={profileData.name}
            onChange={handleChange}
            fullWidth
            margin='normal'
            />
            <TextField 
            label="Phone Number"
            name='phone'
            value={profileData.phone}
            onChange={handleChange}
            fullWidth
            margin='normal'
            />
            <Box mt={3} display="flex" justifyContent="space-between">
                <Button variant='outlined' onClick={handleClose}>
                    Cancel
                </Button>
                <Button loading={false} loadingPosition='end' variant='contained' color='primary' type='submit'>
                    Save Profile
                </Button>
            </Box>
          </form>
        </Box>
    </Modal>
       
    </div>
  )
}

export default ProfileUpdateForm
