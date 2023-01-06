const express=require("express")
const adminAuth = require("../middlewares/adminAuth")
const {getAllProducts, getProByCategory, createPro, updatePro, deletePro } = require("../Controller/product.controller")


const app=express.Router()


app.get("/",  getAllProducts)


app.get("/:category", getProByCategory)


app.post("/", adminAuth , createPro)


app.patch("/:_id", adminAuth , updatePro)


app.delete("/:_id", adminAuth ,  deletePro)




module.exports=app