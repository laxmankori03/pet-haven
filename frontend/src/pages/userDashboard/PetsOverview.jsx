import React, { useState } from 'react'
import PetCard from '../../components/PetCard'
import axios from 'axios';
import { useEffect } from 'react';

const PetsOverview = ({pets}) => {


  return (
    <div className='container'>
         <h1 className='my-5'> 📦 My Pets Overview</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4">

            {
              pets.length > 0 ? (
                pets.map((pet,index)=>(
                  <PetCard key={pet._id || index} name={pet.name} age={pet.age} breed={pet.breed} imgUrl={pet.image}/>
              ))
              ) : (
                <p>No pets added yet.</p>
              )
            }

        </div>
    </div>
  )
}

export default PetsOverview
