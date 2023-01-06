const User=require("../models/user.model")
const Admin=require("../models/admin.model")
const IP = require("ip")





const getAllUsers = async(req,res)=>{
    try {
        let users= await User.find().select("-password")
        if(users){
            res.send(JSON.stringify(users))
        }
        else{ 
            res.status(404).send("no users found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getAllAdmins = async(req,res)=>{
    try {
        let admins= await Admin.find()
        if(admins){
            res.send(admins)
        }
        else{ 
            res.status(404).send("no admin found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    let email = req.params.email
    try {
        let existing = await User.findOneAndDelete({email})
        if(existing){
            res.send(`User deleted successfully`)
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const roleChange = async (req, res) => {
    let {email, role} = req.body
    try {
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{role:role},{new:true})
            res.send(`User updated successfully`)
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
   
}

const banUser = async (req, res) => {
    let email = req.params.email
    let status = req.params.status
    let email2 = req.mail2
    
    if(email===email2){
       return res.status(403).send("you can't ban or unban yourself")
    }
    try {
        let existing = await User.findOne({email})
        if(existing){
            await User.findOneAndUpdate({email},{status},{new:true})
            if(status=="ban"){
                res.send(`User ban successfully`)
            } else {
                res.send("User unban successfully")
            }
        } else {
            res.status(404).send("user not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
   
}



module.exports = {getAllUsers, getAllAdmins, deleteUser, roleChange, banUser }