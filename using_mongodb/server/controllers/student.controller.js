const Student = require("../models/student.model")

// get all students
module.exports.findAllStudents = (req, res) => {
    Student.find()
        .then((allStudents) => {
            res.json({ students: allStudents })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//create new student
module.exports.createNewStudent = (req, res) => {
    Student.create(req.body)
        .then(newlyCreatedStudent => {
            res.json({ student: newlyCreatedStudent })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}