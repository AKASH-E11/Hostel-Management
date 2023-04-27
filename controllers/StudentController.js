const StudentModel = require("../models/StudentModel")
const multer = require("multer")
const path = require("path")

var fileName
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images")
    },
    filename: (req, file, cb) => {
        fileName = Date.now() + path.extname(file.originalname)
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage })




let a = 5;
console.log(a);



const getStudent = async (req, res) => {

    try {
        let studentData = await StudentModel.find();
        console.log(studentData);
        res.json(studentData);

    }
    catch (err) {
        console.log(err);
        res.status(400).send("Getting student faied.")
    }
}


const getStudentById = async (req, res) => {
    const id = req.params.id
    try {
        const student = await StudentModel.findById(id)
            .then((result) => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    catch (err) {
        console.log(err)
    }
}


const addStudent = async (req, res) => {
    const { name, rollno, roomno } = req.body
    try {
        const newStudent = new StudentModel({
            name: name,
            rollno: rollno,
            path: "../Images/" + fileName,
            roomno: roomno
        })
        await newStudent.save()
            .then((result) => {
                console.log("Student Successfully Saved...")

            })
            .catch(err => {
                console.log(err)
            })
        res.status(200).json({ user: req.body })
    }
    catch (err) {
        res.status(401).json({ error: err })
    }
}


const updateStudent = async (req, res) => {
    const { name, rollno, roomno } = req.body
    console.log(name, rollno, roomno)
    try {
        StudentModel.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: name,
                rollno: rollno,
                path: fileName,
                roomno: roomno
            }
        })
            .then((result) => {
                console.log(name, rollno, roomno)
            })
            .catch(err => {
                console.log(err)
            })
        console.log("Student Successfully Updated")
    }
    catch (err) {
        console.log(err)
    }
}


const removeStudent = async (req, res) => {
    try {
        await StudentModel.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = {
    getStudent,
    getStudentById,
    addStudent,
    updateStudent,
    removeStudent,
    upload
}


