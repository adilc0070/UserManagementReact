import userModal from "../Modals/user.js";
import bcrypt from 'bcrypt'

let hashPassword = bcrypt.hash(password, (err, hash) => {
    if (err) return
    else hash
})


let signUp = async (req, res) => {
    try {
        let existedOrNot = await userModal.findOne({ email: req.body.email })
        if (!existedOrNot) {
            let data = new userModal({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashPassword(req.body.password),
                adminOrNot: req.body.adminOrNot
            })
            data.save()
            res.json({ success: true })
        } else {
            res.json({ success: false, message: "user already exist, please Login...!" })
        }

    } catch (error) {
        console.log(error);
    }

}
let logIn = async (req, res) => {

    try {
        let data = await userModal.findOne({ email: req.body.email })
        if (!data) {
            res.json({ success: false, message: "user not found" })
        } else {
            if (bcrypt.compare(req.body.password, data.password)) {
                res.json({ success: true })
            } else {
                res.json({ success: false, message: "password not match" })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export { signUp, logIn } 