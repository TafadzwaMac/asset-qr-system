import express from "express";
import { createAsset } from "../controllers/assetController.js";
import { scanAsset } from "../controllers/scanControllers.js";
import { getAssetScanHistory } from "../controllers/scanControllers.js";
import { downloadQRCode } from "../controllers/scanControllers.js";

const router = express.Router();

router.post("/assets/create", createAsset);
router.get("/scan/:id", scanAsset);
router.get("/scan/history/:id", getAssetScanHistory);
router.get("/assets/qrcode/:id", downloadQRCode);
export default router;