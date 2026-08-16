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
   const { question } = req.body;

console.log("Request masuk:", question);

if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Pertanyaan tidak boleh kosong."
      });
    }

    const response = await ai.models.generateContent({
  model: "gemini-3.1-flash-lite",
  contents: question
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