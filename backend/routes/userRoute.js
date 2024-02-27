let express = require('express')
let userRoute = express()
let userController = require('../Controllers/userController')
userRoute.post('/signUp', userController.signUp)
userRoute.post('/logIn', userController.logIn)
module.exports = userRoute 