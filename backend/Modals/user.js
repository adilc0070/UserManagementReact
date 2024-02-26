import mongoose from "mongoose";
let userScheema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String
    },
    profile:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    adminOrNot:{
        type:Boolean,
        require:true
    }
})

let userModal=module.exports("user",userScheema)
export default userModal