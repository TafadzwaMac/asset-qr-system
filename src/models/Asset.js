import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
{
  assetTag: {
    type: String,
  },

  name: {
    type: String,
    required: true
  },

  description: String,

  serialNumber: String,

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },

  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location"
  },

  purchaseDate: Date,

  purchaseCost: Number,

  condition: {
    type: String,
    enum: ["NEW", "GOOD", "FAIR", "DAMAGED"],
    default: "GOOD"
  },

  qrCode: String,

  status: {
    type: String,
    enum: ["ACTIVE", "MAINTENANCE", "DISPOSED"],
    default: "ACTIVE"
  }
},
{
  timestamps: true
}
);

export default mongoose.model("Asset", assetSchema);