let userModal= require( "../Modals/user.js");
let bcrypt= require( 'bcrypt')
let jwt= require( 'jsonwebtoken')


let signUp = async (req, res) => {
    try {
        let frontendData=  req.body
        let existedOrNot = await userModal.findOne({ email: frontendData.email })
        if (!existedOrNot) {
            let password=await bcrypt.hash(frontendData.password,10)
            let data = new userModal({
                name: frontendData.name,
                email: frontendData.email,
                phone: frontendData.phone,
                password: password,
                admin: frontendData.admin,
                profile:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

            })
            data.save()
            let token=jwt.sign({id:data._id},process.env.JWT_SECRET,{expiresIn:'1d'})
            res.json({ success: true, errormessage: "user created successfully" , result:data,token:token})

        } else {
            res.json({ success: false, errorMessage: "user already exist, please Login...!" })
        }

    } catch (error) {
        console.log(error);
    }

}
let logIn = async (req, res) => {
    
    try {
        let aa=req.body
        let userData = await userModal.findOne({ email: aa.email })
        if (!userData) {
            res.json({ success: false, errorMessage: "user not found" })
        } else {
            if (bcrypt.compare(aa.password, userData.password)) {
                res.json({ success: true ,message:"login success"})
            } else {
                res.json({ success: false, errorMessage: "password not match" })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports= { signUp, logIn } 