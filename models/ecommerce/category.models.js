import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    price : {
        type : Number,
        default : 0
    },
    stock :{
        type : Number,
        default : 0
    },
   
   owner : {
    type : String,


    }
},{timestamp : true})


export const Category = mongoose.model("Category", categorySchema)



