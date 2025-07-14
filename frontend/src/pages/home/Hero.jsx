import React from 'react'

const Hero = () => {
  return (
    <div className='container vh-100 d-flex align-items-center'>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
            <h1 style={{color:"var(--text)", fontSize:"4rem"}} className='fw-bold mb-5'>Welcome to Pet Haven <br /> Luxury Stay for Pets! </h1>
            <div>
                <button className='me-3'>Book a stay</button>
                <button>See Services</button>
            </div>
        </div>
        <div className="col-lg-6 col-sm-12">
            <img src="\images\home_hero_bg.png" alt="hero image" className='img-fluid' style={{width:"30rem", marginLeft:"5rem"}}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
