import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
{
  building: String,
  room: String,
  description: String
},
{
  timestamps: true
}
);

export default mongoose.model("Location", locationSchema);