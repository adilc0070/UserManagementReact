let express = require('express')
let { uploadOptions } = require('../Middleware/multer')
let userRoute = express()
let userController = require('../Controllers/userController')
userRoute.post('/signUp', userController.signUp)
userRoute.post('/logIn', userController.logIn)
userRoute.post('/editProfile', uploadOptions.single('image'), userController.editProfile)
module.exports = userRoute 