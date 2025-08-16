import Hotel from "../models/Hotel.js";
import Profile from "../models/Profile.js";


export const addHotelToProfile = async (req,res) => {
    try {
        const userId = req.user._id;
        const {
      name,
      location,
      description,
      price,
      image
    } = req.body;

    const existingProfile  = await Profile.findOne({userId});
    if (existingProfile && existingProfile.hotel) {
         return res.status(400).json({ message: "Admin already has a hotel linked." });
    }

    const hotel = await Hotel.create({
          name,
      location,
      description,
      price,
      image,
      createdBy:userId
    })

    const profile = await Profile.findOneAndUpdate(
        {userId},
        {hotel:hotel._id},
        {new:true, upsert:true}
    ).populate("hotel");

    res.status(201).json({profile,message:"Hotel Added Succefull"});

    } catch (error) {
         res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const isHotelExist = async (req,res) => {
    try {
      const hotel = await Profile.findOne({userId:req.user._id}).populate("hotel");
      if (!hotel) return res.status(201).json("Hotel Not Exist!");
      res.status(201).json(hotel.hotel);
    } catch (error) {
      res.status(500).json({error:error.message});
    }
  }
  
export const getHotels = async (req,res) => {
  try {
    const hotels = await Hotel.find({});
    res.status(201).json({hotels:hotels});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}