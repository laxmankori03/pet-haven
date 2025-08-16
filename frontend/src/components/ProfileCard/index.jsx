import React from 'react'

const ProfileCard = ({user}) => {
  return (
      <div className="card p-4 shadow-sm bg-darkcard">
      <div className="d-flex align-items-center">
        <img
          src={user?.profilePicture || "/default-avatar.png"}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-circle me-3"
        />
        <div>
          <h4>{user?.name}</h4>
          <p>{user?.email}</p>
          <p>📞 {user?.phone}</p>
          <p>Role: {user?.role}</p>
          <p>Member Since: {new Date(user?.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary me-2">Edit Profile</button>
        <button className="btn btn-warning">Change Password</button>
      </div>
    </div>
  )
}

export default ProfileCard
