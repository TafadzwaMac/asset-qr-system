import mongoose from "mongoose";

const scanLogSchema = new mongoose.Schema(
{
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
    required: true
  },

  scannedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false
  },

  scannedAt: {
    type: Date,
    default: Date.now
  },

  scanLocation: String
});

export default mongoose.model("ScanLog", scanLogSchema);