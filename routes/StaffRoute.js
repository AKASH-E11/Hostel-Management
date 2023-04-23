const express = require("express")
const route = express.Router()
const { getStaff,getStaffById,addStaff,updateStaff,removeStaff } = require("../controllers/StaffController")


route.get("/",getStaff)

route.get("/:id", getStaffById)

route.post("/", addStaff)

route.patch("/:id", updateStaff)

route.delete("/:id", removeStaff)

module.exports = route































































