import Pet from "../models/Pet.model.js"


export const createPet = async (req,res) => {
    try {
        const pet = new Pet({...req.body, owner:req.user._id});
        await pet.save();
        res.status(201).json({  message: "Pet added successfully",pet:pet});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
};

export const getMyPet = async (req,res) => {
    try {
        const pets = await Pet.find({owner:req.user._id}).populate('owner', 'name email');
        res.status(200).json({pets:pets});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
        
    }
}

export const deletePet = async (req,res) => {
    try {
        const petId = req.params.id;
        const pet = await Pet.findById(petId);
        if (!pet)   return res.status(404).json({ message: "Pet not found" });
        if (pet.owner.toString() !== req.user._id.toString() && req.user.role !== "user")  return res.status(403).json({ message: "Not authorized to delete this pet" });
        await Pet.findByIdAndDelete(petId);
        res.status(200).json({ message: "Pet deleted successfully", petId });
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}