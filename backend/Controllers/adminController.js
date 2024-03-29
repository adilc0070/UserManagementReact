let userModal = require("../Modals/user.js");
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

let login = async (req, res) => {
    try {
        let data = await userModal.findOne({ email: req.body.email, admin:true })
        if (data) {
            let data = await userModal.findOne({ email: req.body.email })
            if (data) {
                if (bcrypt.compare(req.body.password, data.password)) {
                    let token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
                    res.json({ success: true, message: "login success", token: token ,result:data})
                } else {
                    res.json({ success: false, message: "wrong password" })
                }
            }
        }else{
            res.json({ success: false, message: "user not found" })
        }
    } catch (error) {
        console.log(error);
    }
}
let usersList = async (req, res) => {
    try {
        let datas = await userModal.find({ admin: false })
        if(datas.length==0){
            res.json({ success: false, message: "user not found" })
        }
        res.json({ success: true, message: "user list", result: datas })
    } catch (error) {
        console.log(error);
    }
}


let addUser = async (req, res) => {
    try {
        console.log('addUser', req.body);
        let { name, email, phone, password } = req.body
        password = await bcrypt.hash(password, 10)
        console.log("password", password);
        let existedOrNot = await userModal.findOne({ email: email })
        if (!existedOrNot) {
            let data = new userModal({
                name: name,
                email: email,
                phone: phone,
                password: password,
                profile:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                admin:false
            })
            data.save()
            res.json({ success: true, message: "user created successfully" })
        } else {
            res.json({ success: false, errorMessage: "user already exist, please Login...!" })
        }
    }
    catch (error) {
        console.log(error);
    }
}

let editUser = async (req, res) => {
    try {
        console.log('editUser', req.body);
        let { name, email, phone, password } = req.body
        password = await bcrypt.hash(password, 10)
        let data = await userModal.findOneAndUpdate({ email: email }, {
            name: name,
            email: email,
            phone: phone,
            password: password,
        })
        console.log("data:::", data);

    } catch (error) {
        console.log(error);
    }
}
let deleteUser = async (req, res) => {
    try {
        let data = await userModal.findOneAndDelete({ email: req.body.email })
        res.json({ success: true, message: "user deleted successfully", result: data })
    }catch (error) {
        console.log(error);
    }
}



module.exports = {
    login,
    addUser,
    editUser,
    deleteUser,
    usersList
}