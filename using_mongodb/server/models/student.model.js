const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema ({
    student_name: {
        type: String,
    },
    home_state: {
        type: String,
    },
    lucky_number: {
        type: Number,
    },
    birthday: 
        {
            month: Number,
            day: Number,
            year: Number,
        },
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

// or

// module.exports = mongoose.model('Student', studentSchema);