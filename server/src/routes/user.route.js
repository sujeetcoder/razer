const express=require("express")

const {signUp, login, logOut, updateUser, getSingleUser} = require("../Controller/user.controller")
const userAuth = require("../middlewares/userAuth")


const app=express.Router()



app.post("/signup", signUp) 

app.post("/login", login)

app.post("/logout/:email", logOut)

app.patch("/:email", userAuth , updateUser)

app.get("/:email",  getSingleUser)



module.exports=app
