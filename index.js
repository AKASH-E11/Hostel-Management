const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const ejs = require("ejs")





//routes
const Studentroute = require("./routes/StudentRoute")
const Staffroute = require("./routes/StaffRoute")
const Foodroute = require("./routes/FoodRoute")



const connectdb = require("./config/db")
const exp = require("constants")
dotenv.config()


//db connection
connectdb

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.set("view engine","ejs")

app.use("/Student", Studentroute)
app.use("/Staff", Staffroute)
app.use("/Food", Foodroute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server Started")
})

