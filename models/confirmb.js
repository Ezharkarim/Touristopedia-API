import mongoose from "mongoose";
const { Schema } = mongoose;

const ConfirmbSchema = new mongoose.Schema({
  bid: {
    type: String
  },
  firstName: { 
    type: String 
},
  lastName: { 
    type: String },
  email: { 
    type: String },
  phoneNo: { 
    type: String },
  oldPrice: { 
    type: String },
  newPrice: { 
    type: String },
  name: { 
    type: String },
  children: { 
    type: String },
  adults: { 
    type: String },
  rating: { 
    type: String },
  startDate: { 
    type: String },
  endDate: { 
    type: String },
  sdate: {
    type: Date
  },
  edate: {
    type: Date
  },
  un: {
    type: String
  },
  ue: {
    type: String
  },
  rn: {
    type: String
  },
  hn: {
    type: String
  }
});

export default mongoose.model("confirmb", ConfirmbSchema);
