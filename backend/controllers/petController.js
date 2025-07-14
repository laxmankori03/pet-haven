import Pet from "../models/Pet.js";

export const createPet = async (req,res,next) => {
    
    try {
        const pet = await Pet.create({...req.body, owner:req.user.id});
        res.status(201).json({success:true, message: "New Pet Added" , pet});
    } catch (error) {
        next(error);
    }
};

export const getUserPets = async (req,res,next) => {
    try {
        const pets = await Pet.find({owner: req.user.id});
        res.status(200).json({success:true,pets});
    } catch (error) {
        next(error)
    }
};