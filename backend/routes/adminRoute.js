let express = require('express')
let adminRoute = express()
let adminController = require('../Controllers/adminController')
adminRoute.post('/addUser', adminController.addUser)
adminRoute.post('/editUser', adminController.editUser)
adminRoute.post('/deleteUser', adminController.deleteUser)
adminRoute.post('/login', adminController.login)
adminRoute.get('/usersList', adminController.usersList)
module.exports = adminRoute 