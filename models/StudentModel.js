const mongoose = require("mongoose")

const StundentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    path: {
        type: String,
        required: true
    },
    roomno: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("student", StundentSchema)

