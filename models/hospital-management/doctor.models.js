
import mongoose from "mongoose"

const hospitalHours = new mongoose.Schema(
    {
        timeInhours : {
            type : Number,
            required : true 
          },
          hospital :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Hospital"
          }
    },{timestamps:true
    }
)

const doctorSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true 
    },
    salary :{
        type : String,
        requied : true
    },
    qualification : {
        type : String,
        required : true 
    },
    experience : {
        type : Number,
        default : 0
    },
    worksInHospitals :
    {
        type : [hospitalHours],
    }


},{timestamps : true})

export const Doctor  = mongoose.model("Doctor",doctorSchema )
