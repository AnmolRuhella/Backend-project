import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      requied: true,
    },
    addressLine1: {
      type: String,
    },
    city: {
      type: String,
      requied: true,
    },
    pincode: {
      type: String,
      requied: true,
    },
    specalizedIn :[
        {
        type : String
        }
    ]
  },
  { timestamps: true },
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
