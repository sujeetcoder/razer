const User = require("../models/user.model")

const banAuth = async (req, res, next) => {
    if(!req?.cookies?._id){
        return next()
    }
   
    const user = await User.findOne({_id:req?.cookies?._id})

    if(user){
    if(user.status === "ban"){
       return res.status(403).send("you are ban from using our service")
    } else {
       return next()
    }
} else {
    return next()
}
    
  }



module.exports = banAuth