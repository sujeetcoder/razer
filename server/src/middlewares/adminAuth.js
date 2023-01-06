const User = require("../models/user.model")

const adminAuth = async (req, res, next) => {
    if(!req?.cookies?._id){
        return res.status(401).send("user not authenticated")
    }
    const user = await User.findOne({_id:req?.cookies?._id})

    if(req?.cookies?._id && !user){
        return res.status(401).send("user not authenticated")
    }

    if(user){
    if(user.role==="admin" || user.role==="CEO" && user.status === "active"){
        req.mail2 = user.email
        req.objId = req?.cookies?._id
       return next()
    } else {
        res.status(401).send("user has not permision for this opration")
    }
} else {
    res.status(401).send("user not exist please signup first")
}
    
  }



module.exports = adminAuth