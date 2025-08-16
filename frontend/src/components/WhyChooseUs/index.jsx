import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard'

const WhyChooseUs = () => {
  return (
     <div className='conatainer vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h1 style={{color:"var(--text)", fontSize:"3rem"}} className='text-center my-5 fw-bold'> Why Choose Us?</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">
   <WhyChooseUsCard imgUrl={"/images/24_care.jpg"} title={" 27/7 Care"} description={"  Your pets are never alone. Our dedicated team ensures around-the-clock supervision with real-time updates and a comforting environment for your furry companions."}/>
   <WhyChooseUsCard imgUrl={"/images/petGrooming.jpg"} title={"Pet Grooming"} description={"Treat your pets to spa-level grooming. From bathing and brushing to nail trims and fur styling — all tailored to your pet’s comfort and breed."}/>
   <WhyChooseUsCard imgUrl={"/images/Vet-On-call.jpg"} title={" Vet On-call "} description={"Your pet’s health is our top priority. We offer instant access to certified vets in case of emergencies or routine wellness checks."}/>
</div>  
    </div>
  )
}

export default WhyChooseUs
