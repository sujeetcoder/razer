const User=require("../models/user.model")
const Admin=require("../models/admin.model")
const IP = require("ip")
const { generateFromEmail, generateUsername } = require("unique-username-generator");
const crypto = require("crypto")



const signUp = async (req, res) => {
    const {email,razer_id,password} = req.body
    let ipAddress = IP.address()
    razer_id = razer_id || generateFromEmail(
        email,
        crypto.randomInt(2,6)
      );
    
    try {
        let existing = await User.findOne({email})
        if(existing){
            res.status(404).send("User Existed")
        } else {
            let user = await User.create({
                email,razer_id,password,ipAddress:[ipAddress]
            })
            res.send({token: `${user._id}:${email}:razer:${Date.now()}`})
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
try {
    if(user){
        if(user.email===email && user.password===password){
           let newUser = await User.findOneAndUpdate({email},{logStatus:true},{new:true})
           res.cookie("_id", `${user?._id}` ,{httpOnly: true ,maxAge: 86400000,secure:true,sameSite:"none"})
           res.cookie("name", `${user?.name}` ,{httpOnly: true ,maxAge: 86400000,secure:true,sameSite:"none"})
          /*  res.send(req.cookies) */
           res.send(newUser)
        } else {
            res.status(404).send("user email or password mismatch")
        }

    } else {
        res.status(404).send(`User with ${email} not found`)
    }
} catch (e) {
    res.send(e.message)
}
}


const logOut = async (req, res) => {
    try {
        const email = req.params.email
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{logStatus:false},{new:true})
            res.cookie("_id", `${existing?._id}` ,{httpOnly: true ,maxAge: 1,secure:true,sameSite:"none"})
            res.cookie("name", `${existing?.name}` ,{httpOnly: true ,maxAge: 1,secure:true,sameSite:"none"})
            res.send("logout successful")
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
}

const updateUser = async (req, res) => {
    
    let email = req.params.email
   /*  let id = req.params.id */
    try {
        let existing = await User.findOneAndUpdate({email},{...req.body},{new: true})
        if(existing){
            res.send(JSON.stringify(existing))  
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.send(e.message)
    }
   
}

const getSingleUser = async (req, res) => {
    const email = req.params.email;
    try {
        let user = await User.findOne({email});
        if(user){
            res.send(user)
        } else {
            res.status(404).send(`user ${email} not found`)
        }
    } catch (e) {
        res.send(e.message)
    }
}

module.exports = {signUp, login, logOut, updateUser, getSingleUser, }