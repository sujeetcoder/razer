const express=require("express")
const adminAuth = require("../middlewares/adminAuth")
const userAuth = require("../middlewares/userAuth")
const {getUserCarts, approve, getAllCart, addToCart, deleteCartItem, deleteAllCartItems } = require("../Controller/cart.controller")
    

const app=express.Router()
app.use(userAuth)


app.get("/",  getUserCarts)

app.delete("/:product",   deleteCartItem)

app.delete("/deleteall",  deleteAllCartItems)

app.patch("/approve/:_id", adminAuth , approve)

app.get("/allcarts", adminAuth, getAllCart)

app.post("/:_id", adminAuth, addToCart)



module.exports=app