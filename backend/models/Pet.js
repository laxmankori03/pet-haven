import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require:true
    },
    name:{
        type:String,
        require:true,
    },
    breed:{
        type:String,
    },
    age:{
        type:Number,
    },
    image:{
        type:String,
    },
},{timestamps:true});

export default mongoose.model("Pet",petSchema);