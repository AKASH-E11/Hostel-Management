const StaffModel = require("../models/StaffModel")
const JWT = require("jsonwebtoken")

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return JWT.sign({ id }, 'database SECRET', {
    expiresIn: maxAge
  });
};

const getStaff = async (req, res) => {
    try {
       let staffData = await StaffModel.find()
        console.log(staffData)
        res.json(staffData)
    }
    catch (err) {
        console.log(err)
    }
}


const getStaffById = async (req, res) => {
    const id = req.params.id
    try {
        const staff = await StaffModel.findById(id)
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


const addStaff = async (req, res) => {
    const { name, staffid, role, dept} = req.body
    try {
        const newStaff = new StaffModel({
            name: name,
            staffid: staffid,
            role: role,
            dept: dept
        })
        const token = createToken(staffid);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        await newStaff.save()
            .then(() => {
                console.log("Staff Successfully Saved...")
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


const updateStaff = async (req, res) => {
    const { name, staffid, role, dept } = req.body
    try {
        StaffModel.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: name,
                staffid: staffid,
                role: role,
                dept: dept
            }
        })
            .then((result) => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
        console.log("Staff Successfully Updated")
    }
    catch (err) {
        console.log(err)
    }
}


const removeStaff = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 1 });
        await StaffModel.deleteOne({ _id: req.params.id })
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
    getStaff,
    getStaffById,
    addStaff,
    updateStaff,
    removeStaff
}
