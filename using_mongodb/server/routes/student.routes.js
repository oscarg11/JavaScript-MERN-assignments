const StudentController = require('../controllers/student.controller');

module.exports = (app) => {
    app.get('/api/students', StudentController.findAllStudents);
    app.post('/api/students', StudentController.createNewStudent);
}

