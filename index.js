import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const result = dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are PrePPT, a helping assistant that provides content slides for the PPT, a PPT generator.",
            },
            {
                role: "user",
                content: message,
            },
        ],
    });

    res.json({
        completion: completion.choices[0],
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
