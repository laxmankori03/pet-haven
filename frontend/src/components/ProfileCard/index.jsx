import React, { useState } from 'react'
import ProfileUpdateForm from '../ProfileUpdateForm'
import { Avatar } from '@mui/material';

const ProfileCard = ({user}) => {
  const [open,setOpen] = useState(false);
  function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
  return (
      <div className="card p-4 shadow-sm bg-darkcard">
      <div className="d-flex align-items-center gap-3">
       
        {user?.profilePicture ?
        (  <Avatar 
        src={user?.profilePicture}
        alt='Profile Picture' 
         sx={{ width: 100, height: 100}}
        /> )
        :
        (
          <Avatar {...stringAvatar(user?.name)} style={{width:"6rem",height:"6rem"}}/>)
          }
        <div>
          <h4>{user?.name}</h4>
          <p>{user?.email}</p>
          <p>📞 {user?.phone}</p>
          <p>Role: {user?.role}</p>
          <p>Member Since: {new Date(user?.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={()=>setOpen(true)}>Edit Profile</button>
        <button className="btn btn-warning">Change Password</button>
      </div>

      {/* Update Profile PopUp Form  */}
      <ProfileUpdateForm open={open} handleClose={()=>setOpen(false)}/>
    </div>
  )
}

export default ProfileCard
