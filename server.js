const express = require('express')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const connectDb = require('./config/db')
const dotenv = require('dotenv')


connectDb()


// dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
  
    origin:"https://flekxyshop.vercel.app",
    methods:["POST","GET","PUT","DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    
}))
app.use(cookieparser())
app.use(express.json())


app.use('/api',require('./routes/userRoutes'))


const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{console.log(`server is running on ${PORT}`);
})

