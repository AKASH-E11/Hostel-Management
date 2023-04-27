const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const ejs = require("ejs")
const cors  = require("cors")





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
app.use(cors())

app.use("/student", Studentroute)
app.use("/staff", Staffroute)
app.use("/food", Foodroute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server Started")
})

