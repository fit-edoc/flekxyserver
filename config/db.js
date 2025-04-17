const mongoose = require('mongoose')

const dotenv = require("dotenv")


const MONGO_URL = process.env.MONGO_URL


const connectDb =  async ()=>{

    try {
        await mongoose.connect(`${MONGO_URL}`)
        console.log("database has been connected");
        
        
    } catch (error) {
        
    }
}

module.exports = connectDb