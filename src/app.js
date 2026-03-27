import express from "express";
import cors from "cors";
import assetRoutes from "./routes/assetRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", assetRoutes);
app.get("/", (req, res) => {
  res.send("Asset QR API is now running");
});

export default app;