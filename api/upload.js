import { put } from "@vercel/blob";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { file } = req.body; // Assuming the file data is sent in the request body
    const blobUrl = await put(`articles/${file.name}`, file, { access: 'public' });
    res.status(200).json({ success: true, blobUrl });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}