import React from 'react'
import { useUser } from '../../context/userContext'

const DashboardGreeting = ({userName}) => {
  return (
    <div className='container'>
        <h1 className='my-5'>Hello, {userName}! 👋 </h1>
    </div>
  )
}

export default DashboardGreeting
