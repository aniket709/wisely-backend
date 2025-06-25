
import  express from "express";
import dotenv from "dotenv"
import getCountryFacts from "./routes/country"

import cors from "cors";

 dotenv.config()
const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/v1",getCountryFacts)

const PORT = process.env.PORT || 10000;

app.get("/",(req,res)=>{
    res.send("hi from derver")
})



app.listen (PORT,()=>{
    console.log(`server  is ruuning on the port ${PORT}`);
})

