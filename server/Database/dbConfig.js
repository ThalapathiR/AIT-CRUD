const mongoose=require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("mongoDb connected")).catch((err)=>console.log(err))

module.exports=mongoose;