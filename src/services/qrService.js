import QRCode from "qrcode";

export const generateQRCode = async (url) => {
  try {
    const qrCodeData = await QRCode.toDataURL(url);
    return qrCodeData;
  } catch (error) {
    throw new Error("QR Code generation failed");
  }
};