const { Router } = require('express')
const UserController = require('./controllers/userController')

const routes = Router()

const userController = new UserController()

routes.post('/user', userController.create)
routes.delete('/user/:id', userController.remove)
routes.get('/user', userController.all)

module.exports = routes
