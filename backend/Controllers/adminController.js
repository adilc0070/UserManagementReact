let userModal= require( "../Modals/user.js");
let bcrypt = require('bcrypt')


let login = async (req, res) => {
    try {
        if(req.body.isAdmin==='checked'){
            let data=await userModal.findOne({email:req.body.email})
            if(data){
                if(bcrypt.compare(req.body.password,data.password)){
                    res.json({success:true,data:data,message:"login success"})
                }else{
                    res.json({success:false,data:data,message:"wrong password"})
                }
            }
            
        }
    } catch (error) {
        console.log(error);
    }
}

function validateName(name) {
    if (name.length < 3 || name.length > 30) {
        return false;
    }
    if (name.trim() !== name || name[0] === ' ' || name[name.length - 1] === ' ') {
        return false;
    }
    return true;
}

function validateNumber(number) {
    if (number.length > 10) {
        return false;
    }
    if (number[0] === '0') {
        return false;
    }
    if (!(/^\d+$/.test(number))) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9-]+\.)+(com|org|net|edu)$/i;
    return pattern.test(email);
}


let addUser = async (req, res) => {
    try {
        let { name, email, phone, password } = req.body
        if (!validateName(name)) {
            res.json({ success: false, message: "invalid name" })
        }
        else if (!validateEmail(email)) {
            res.json({ success: false, message: "invalid email" })
        }
        else if (!validateNumber(phone)) {
            res.json({ success: false, message: "invalid phone number" })
        }
        else if (password.length < 8) {
            res.json({ success: false, message: "password should be atleast 8 characters long" })
        }
        let existedOrNot = await userModal.findOne({ email: req.body.email })
        if (!existedOrNot) {
            let data = new userModal({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashPassword(req.body.password),
                adminOrNot: req.body.adminOrNot
            })
            
            res.json({ success: true })
        } else {
            res.json({ success: false, message: "user already exist, please Login...!" })
        }
        }
    catch (error) {
        console.log(error);
    }
}

let editUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}
let deleteUser = async (req, res) => {

}



module.exports = {
    login,
    addUser,
    editUser,
    deleteUser
}