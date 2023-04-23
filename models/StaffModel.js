const mongoose = require("mongoose")


const StaffSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    staffid:{
        type:String,
        unique:true,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("staff",StaffSchema)
