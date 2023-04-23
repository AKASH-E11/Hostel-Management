const mongoose = require("mongoose")


const FoodSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    time : {
        type:String,
        required:true
    },
    days : {
        type:String,
        required:true
    }
})


module.exports = mongoose.model("food",FoodSchema)








