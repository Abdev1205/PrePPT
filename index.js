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

app.get("/", async ( req , res )=>{

    const {message} = req.body;

    const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[
            {
                role:"system", content:"You are PrePPT a helping assitant provides content slides for the PPT ,a PPT generater",
            }
        ]
    })
    res.json({
        completion: completion.choices
    })
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});

    










// import {config} from "dotenv"
// config()
// console.log(process.env.API_KEY)



// import {Configuration , OpenAIApi } from "openai"
// const openai = new OpenAIApi(new Configuration({
//     apiKey: process.env.API_KEY ,
// }))

// const completion = await openai.createCompletion({
//     model:"gpt-3-turbo",
//     messages:[
//         {
//             role:"user", content: "Hello World",
//         }
//     ]
// }).then(res=>{
//     console.log(res.data.choices)
// })

// console.log(completion.data.choices[0].messages);

// const configuration = new Configuration({
//     organization: "org-cICJIZgpjngAJr61FUmtGnzG",
//     apiKey:'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',
// });



