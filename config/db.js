const mongoose = require('mongoose')

const dotenv = require("dotenv")

dotenv.config()


const connectDb =  async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database has been connected");
        
        
    } catch (error) {
        
    }
}

module.exports = connectDb