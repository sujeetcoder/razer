const express=require("express")

const {signUp, login, logOut, updateUser, getSingleUser} = require("../Controller/user.controller")


const app=express.Router()


/* create a user */
app.post("/signup", signUp) 
// login check
app.post("/login", login)
app.post("/logout/:email", logOut)
/* update user */
app.patch("/:email", updateUser)
/* get single user */
app.get("/:email",  getSingleUser)

module.exports=app
