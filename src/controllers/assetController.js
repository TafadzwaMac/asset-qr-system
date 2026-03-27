import Asset from "../models/Asset.js";
import { generateQRCode } from "../services/qrService.js";

export const createAsset = async (req, res) => {
  try {

    const { name, description, serialNumber, category, location } = req.body;

    const asset = new Asset({
      name,
      description,
      serialNumber,
      category,
      location
    });

    await asset.save();

    const assetURL = `${process.env.BASE_URL}/assets/${asset._id}`;

    const qrCode = await generateQRCode(assetURL);

    asset.qrCode = qrCode;

    await asset.save();

    res.status(201).json({
      message: "Asset created successfully",
      asset
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating asset",
      error: error.message
    });
  }
};