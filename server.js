import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.post("/api/ask", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Percakapan tidak boleh kosong."
      });
    }

    // Ubah history frontend jadi format contents Gemini
    const contents = messages.map((m) => ({
      role: m.role === "ai" ? "model" : "user",
      parts: [{ text: m.text }]
    }));

    console.log("Request masuk, jumlah pesan:", contents.length);

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents
    });

    res.json({
      answer: response.text
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error.message || String(error)
    });
  }
});

app.listen(PORT, () => {
  console.log(`StudyMate AI berjalan di http://localhost:${PORT}`);
});