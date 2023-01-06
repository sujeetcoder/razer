const express=require("express")
const adminAuth = require("../middlewares/adminAuth");
const {getAllUsers, getAllAdmins, deleteUser, roleChange, banUser } = require("../Controller/admin.controller")

const app=express.Router()


app.get("/" , adminAuth, getAllAdmins)
app.get("/getall" , adminAuth,  getAllUsers)
/* delete a user */
app.delete("/:email", adminAuth ,  deleteUser)
app.post("/changerole", adminAuth ,  roleChange)
app.post("/ban/:email/:status", adminAuth, banUser)


module.exports = app