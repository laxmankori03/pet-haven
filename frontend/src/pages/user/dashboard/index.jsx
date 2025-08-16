import React from 'react'
import DashboardLayout from '@/pages/layout/dashboardLayout';

const Dashboard = () => {
  
  return (
   <DashboardLayout>
      <div className='container mt-3'>
        <h1>Welcome Laxman Kori</h1>
        <div className='d-flex gap-5 flex-wrap mt-5'>
          <div className="card bg-darkcard position-relative">
            <div className="card-body">
              <h5 className="card-title">Active Bookings</h5>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill btn-primary">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
            </div>
          </div>
          <div className="card bg-darkcard position-relative">
            <div className="card-body">
              <h5 className="card-title">Upcoming Appointments</h5>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill btn-primary">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
            </div>
          </div>
          <div className="card bg-darkcard position-relative">
            <div className="card-body">
              <h5 className="card-title"> Booking History</h5>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill btn-primary">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
            </div>
          </div>
        </div>
        <div className='mt-5'>
        <h2>Quick Action</h2>
        <button className='btn btn-primary mt-3 me-3'>Book Now</button>
        <button className='btn btn-primary mt-3'>Add Pet</button>
        </div>
        <div className='mt-4'>
        <h2>Notifications</h2>
        </div>
      </div>
   </DashboardLayout>
  )
}

export default Dashboard
