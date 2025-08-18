import CustomerReviews from '@/components/CustumerReview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  
  return (
    <>
     <div className='container d-flex align-items-center' style={{height: "92vh"}}>
      <div className="row">
        <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
            <h1 style={{fontSize:"4rem"}} className='fw-bold mb-5'>Welcome to Pet Haven <br /> Luxury Stay for Pets! </h1>
            <div className='d-flex gap-3'>
                <Link href='/user/hostels'><button className='btn btn-primary'>Book a stay</button></Link>
                <button className='btn btn-primary'>See Services</button>
            </div>
        </div>
        <div className="col-lg-6 col-sm-12">
            <img src="\images\home_hero_bg.png" alt="hero image" className='img-fluid' style={{width:"30rem", marginLeft:"5rem"}}/>
        </div>
      </div>
    </div>
    <WhyChooseUs/>
    <CustomerReviews/>
    </>
  )
}

export default Home
