const Cart = require("../models/cart.model")
const Product = require("../models/products.model")



const getUserCarts = async (req, res) => {
    let carts;
        carts = await Cart.find({user:req.user}).populate(["user","product"])
    
    try {
        if(carts){
            res.send(JSON.stringify(carts))
        } else {
            res.status(404).send("Cart not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const approve = async (req, res) => {
    
    let _id = req.params._id
    try {
        let existing = await Cart.findOneAndUpdate({_id},{approve:true},{new: true})
        if(existing){
            res.send("cart updated successfully")  
        } else {
            res.send("cart not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
   
}

const getAllCart = async (req, res) => {
    let carts;
        carts = await Cart.find({product_owner:req?.cookies?._id}).populate(["user","product"])
    
    try {
        if(carts){
            res.send(JSON.stringify(carts))
        } else {
            res.status(404).send("Cart not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const addToCart =  async (req, res) => {
    const {_id} = req.params
    
    try {
        let existing = await Product.findOne({_id})
        if(existing){
            let carts = await Cart.create({
                user:req?.cookies?._id,product:_id,product_owner:existing.user
            })
            res.send("Cart added successfully")
        } else {
            res.status(404).send("product out of stack")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteCartItem = async (req, res) => {
    let product = req.params.product
    try {
        let existing = await Cart.findOneAndDelete({product})
        if(existing){
            res.send(`Cart deleted successfully`)
        } else {
            res.send("Cart not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
   
}

const deleteAllCartItems = async (req, res) => {
    
    try {
        let existing = await Cart.deleteMany({user:req?.cookies?._id})
        if(existing){
            res.send(`Cart deleted successfully`)
        } else {
            res.send("Cart not found")
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
   
}


module.exports = {getUserCarts, approve, getAllCart, addToCart, deleteCartItem, deleteAllCartItems }