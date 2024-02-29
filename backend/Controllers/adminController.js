let userModal = require("../Modals/user.js");
let bcrypt = require('bcrypt')


let login = async (req, res) => {
    try {
        let data = await userModal.findOne({ email: req.body.email, adminOrNot: 1 })
        if (data) {
            let data = await userModal.findOne({ email: req.body.email })
            if (data) {
                if (bcrypt.compare(req.body.password, data.password)) {
                    res.json({ success: true, data: data, message: "login success" })
                } else {
                    res.json({ success: false, data: data, message: "wrong password" })
                }
            }

        }
    } catch (error) {
        console.log(error);
    }
}


let addUser = async (req, res) => {
    try {
        let { name, email, phone, password } = req.body
        password = await bcrypt.hash(password, 10)
        let existedOrNot = await userModal.findOne({ email: email })
        if (!existedOrNot) {
            let data = new userModal({
                name: name,
                email: email,
                phone: phone,
                password: password,
                adminOrNot: req.body.adminOrNot
            })

            res.json({ success: true, message: "user created successfully", result: data })
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
        let { name, email, phone, password } = req.body
        password = await bcrypt.hash(password, 10)
        let data = await userModal.findOneAndUpdate({ email: email }, {
            name: name,
            email: email,
            phone: phone,
            password: password,
        })


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
    deleteUser
}