const express = require("express")
const router = express.Router()
const StudentModel = require("../models/StudentModel")
const { getStudent, getStudentById, addStudent, updateStudent, removeStudent, upload } = require("../controllers/StudentController")


router.get("/", getStudent)

router.get("/:id", getStudentById)

router.post("/", upload.single("image"),addStudent)

router.patch("/:id", updateStudent)

router.delete("/:id", removeStudent)

module.exports = router




