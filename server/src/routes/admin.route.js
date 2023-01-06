const express=require("express")
const adminAuth = require("../middlewares/adminAuth");
const {getAllUsers, getAllAdmins, deleteUser, roleChange, banUser } = require("../Controller/admin.controller");
const userAuth = require("../middlewares/userAuth");

const app=express.Router()
app.use(userAuth)
app.use(adminAuth)


app.get("/" , getAllAdmins)

app.get("/getall" ,  getAllUsers)

app.delete("/:email" ,  deleteUser)

app.post("/changerole" ,  roleChange)

app.post("/ban/:email/:status", banUser)


module.exports = app