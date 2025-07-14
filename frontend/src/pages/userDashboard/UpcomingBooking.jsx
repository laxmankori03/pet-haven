import React from 'react'
import BookingCard from '../../components/BookingCard';

const UpcomingBooking = () => {
    const bookings = [
  {
    name: "Bella",
    roomNumber: 101,
    checkInDate: "2025-07-10",
    checkOutDate: "2025-07-15",
  },
  {
    name: "Max",
    roomNumber: 102,
    checkInDate: "2025-07-12",
    checkOutDate: "2025-07-16",
  },
  {
    name: "Luna",
    roomNumber: 103,
    checkInDate: "2025-07-11",
    checkOutDate: "2025-07-17",
  },
  {
    name: "Charlie",
    roomNumber: 104,
    checkInDate: "2025-07-09",
    checkOutDate: "2025-07-13",
  },
  {
    name: "Coco",
    roomNumber: 105,
    checkInDate: "2025-07-08",
    checkOutDate: "2025-07-12",
  },
];

  return (
    <div className='container'>
         <h1 className='my-5'> 🗓️ Upcoming Bookings</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">
            {
                bookings.map((booking,index)=>{
                    return <BookingCard key={index} petName={booking.name} roomNumber={booking.roomNumber} checkIn={booking.checkInDate} checkOut={booking.checkOutDate}/>
                })
            }
        </div>
    </div>
  )
}

export default UpcomingBooking
