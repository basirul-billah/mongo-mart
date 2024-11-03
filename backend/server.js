import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

// API Endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log("Server started on port " + port))