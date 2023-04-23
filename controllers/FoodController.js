const FoodModel = require("../models/FoodModel")

const getFood = async(req,res) => {
    try{
        await FoodModel.find()
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}


const addFood = async(req,res) => {
    const { name,time,days } = req.body
    try{
        const newFood = new FoodModel({
            name:name,
            time:time,
            days: days
        })
        await newFood.save()
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}


const deleteFood = async(req,res) => {
    try{
        const id = req.params.id
        await FoodModel.deleteOne({_id:id})
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    getFood,
    addFood,
    deleteFood
}
























