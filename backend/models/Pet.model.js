import mongoose from "mongoose";


const petSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    breed:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    weight:{
        type:Number,
    },
    vaccinated:{
        type:Boolean,
        default:false,
    },
    vaccinatedDocuments:[String],
    image:{
        type:String,
        required:true,
        default:"defaultPet.jpg"
    },
},{timestamps:true});

export default mongoose.model('Pet', petSchema);