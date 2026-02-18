import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"
import userRouter  from './routes/user.route.js'

dotenv.config()
const PORT = process.env.PORT

const app = express();

app.use('/api/user', userRouter )

 

app.listen(PORT, () => {
    console.log(`Server is connected to port    ${PORT}`)
   console.log("MONGO URI:", process.env.MONGODB_URI);

    connectDB()
})