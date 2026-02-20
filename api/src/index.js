import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"
import userRouter  from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()
const PORT = process.env.PORT

const app = express();
app.use(express.json({ limit: "10mb"}))

app.use('/api/user', userRouter )
app.use("/api/auth", authRouter)
 

app.listen(PORT, () => {
    console.log(`Server is connected to port    ${PORT}`)
    connectDB()
})