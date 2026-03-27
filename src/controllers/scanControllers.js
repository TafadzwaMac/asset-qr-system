import Asset from "../models/Asset.js";
import ScanLog from "../models/Scanlog.js";
import Category from "../models/Category.js";
import Location from "../models/Location.js";

export const scanAsset = async (req, res) => {
  try {
    const { id } = req.params;

    const asset = await Asset.findById(id)
      .populate("category")
      .populate("location");

    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    // record scan
    const log = await ScanLog.create({
      asset: asset._id,
      Location: asset.location._id,
      scannedAt: new Date()
    });

    res.json({
      message: "Asset scanned successfully",
      asset,
      scanLog: log
    });


  } catch (error) {
    res.status(500).json({
      message: "Error scanning asset",
      error: error.message
    });
  }
};
// Get scan history for an asset

export const getAssetScanHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const scans = await ScanLog.find({ asset: id })
      .populate("asset")
      .sort({ scannedAt: -1 });

    res.json(scans);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching scan history",
      error: error.message
    });
  }
};

// download QR code for the assset
export const downloadQRCode = async (req, res) => {
  try {
    const { id } = req.params;

    const asset = await Asset.findById(id);

    if (!asset) {
      return res.status(404).json({
        message: "Asset not found"
      });
    }

    const base64Data = asset.qrCode.replace(/^data:image\/png;base64,/, "");
    const imgBuffer = Buffer.from(base64Data, "base64");

    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=asset-${asset._id}.png`
    );

    res.send(imgBuffer);

  } catch (error) {
    res.status(500).json({
      message: "Error downloading QR code",
      error: error.message
    });
  }
};