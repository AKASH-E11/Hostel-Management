const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

module.exports = mongoose.connect(process.env.mongoDB,{useNewUrlParser:true})
.then(()=>{
    console.log("Successfully Created")
})
.catch(err => {
    console.log(err)
})



//mongodb://localhost:27017/hostel

