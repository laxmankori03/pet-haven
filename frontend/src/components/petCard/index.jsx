import React, { useEffect } from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from 'react-redux';
import { delelePet } from '@/config/redux/action/petAction';
import { toast } from 'react-toastify';
import { clearStatus } from '@/config/redux/reducer/petReducer';

const PetCard = ({pet}) => {
      const dispatch = useDispatch();
      const petState = useSelector((state)=>state.pet);
      useEffect(()=>{
         if (petState.message) {
          toast.success(petState.message);
        }
        if (petState.error) {
          toast.error(petState.error)
        }
      },[petState.error,petState.message,dispatch])
     if (!pet) return null;
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden bg-darkcard" style={{width: "15rem"}}>
  <img src={pet.image} className="card-img-top" alt="Hotel Image"/>
  
  <div className="card-body">
    <h5 className="card-title fw-bold">{pet.name}</h5>
    <p className="card-text text-muted mb-2">{pet.breed}</p>
    <p className="card-text small text-truncate" style={{maxHeight: "40px"}}>
      Age {pet.age} Years
    </p>
    <p className="card-text small text-truncate" style={{maxHeight: "40px"}}>
      Vaccinated {pet.vaccinated ? <CheckCircleIcon sx={{ color: "green" }} /> : <CancelIcon sx={{ color: "red" }} />}
    </p>

    <div className="d-flex justify-content-between align-items-center mt-3">
      <span className="fw-bold text-success">{pet.weight} KG</span>
      <button className="btn btn-danger" onClick={()=>dispatch(delelePet(pet._id))}>Delete</button>
      <a href="#" className="btn btn-primary">Edit</a>
    </div>
  </div>
</div>

  )
}

export default PetCard
