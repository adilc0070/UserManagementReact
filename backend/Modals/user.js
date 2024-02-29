let mongoose = require("mongoose");
let userScheema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String
    },
    profile: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    adminOrNot:{
        type:String
    }
})

let userModal = mongoose.model("user", userScheema)
module.exports =  userModal 