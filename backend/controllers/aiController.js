import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const extractCriteria = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "No text provided" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Extract user details for government scheme eligibility from the following text:
      "${text}"

      Return a strict JSON object with these keys:
      - age (number)
      - income (number, annual)
      - state (string, name of the state or "Any" if not mentioned)
      - occupation (string, or "Any" if not mentioned)

      Default values if not found:
      - age: 18
      - income: 0
      - state: "Any"
      - occupation: "Any"

      Output ONLY valid JSON. No markdown blocks, no prefix text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let responseText = response.text();

    responseText = responseText.replace(/```json|```/g, "").trim();

    let extractedData;
    try {
      extractedData = JSON.parse(responseText);
    } catch (parseErr) {
      extractedData = {
        age: 18,
        income: 0,
        state: "Any",
        occupation: "Any",
      };
    }

    res.status(200).json(extractedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "AI extraction failed" });
  }
};
