const Router = require('express').Router()
const controller = require('../controllers/CharacterController')

Router.get('/', controller.GetAllStudents)
Router.post('/', controller.CreateStudent)
// Router.put('/:student_id', controller.UpdateStudent)
// Router.delete('/:student_id', controller.DeleteStudent)
Router.get('/:character_id', controller.GetStudentById)

module.exports = Router