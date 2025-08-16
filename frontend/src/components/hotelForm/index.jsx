import { addHotelToProfile } from '@/config/redux/action/hotelAction';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const HotelForm = () => {

    const dispatch = useDispatch();
    const hotelState = useSelector((state)=>state.hotel);

    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");

    useEffect(()=>{
 if (hotelState.error) {
        toast.error(hotelState.error);
    }
    if (hotelState.message) {
        toast.success(hotelState.message);
    }
    },[hotelState.error,hotelState.message])

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addHotelToProfile({name,location,description,price,image}));
    }

  return (
    <>
  {/* Add Hotel Button */}
  <button
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#addHotelModal"
  >
    Add Hostel
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="addHotelModal"
    tabIndex={-1}
    aria-labelledby="addHotelModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h5 className="modal-title" id="addHotelModalLabel">
            Add Hostel
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* Modal Body (Form) */}
        <div className="modal-body">
          <form id="hotelForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Hostel Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter hostel name"
                required=""
                onChange={(e)=>setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="Enter location"
                required=""
                onChange={(e)=>setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Enter description"
                required=""
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price per Night</label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Enter price"
                required=""
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="input" className="form-control" name="image" placeholder='image url' onChange={(e)=>setImage(e.target.value)}
                value={image}/>
            </div>
          </form>
        </div>
        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" form="hotelForm" className="btn btn-primary" data-bs-dismiss="modal">
            Save Hostel
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default HotelForm
