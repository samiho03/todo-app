const mongoose = require("mongoose")


const connectMongodb = async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log("Database connection successfull")
    } catch (error) {
       console.log(error.message) 
       process.exit(1)               //exit the program when an error occurs
    }

}

module.exports = connectMongodb