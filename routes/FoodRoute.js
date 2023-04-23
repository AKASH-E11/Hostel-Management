const express = require("express")
const route = express.Router()
const { getFood,addFood,deleteFood } = require("../controllers/FoodController")


route.get("/",getFood)

route.post("/",addFood)

route.delete("/:id",deleteFood)


module.exports = route










































