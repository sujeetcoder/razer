const Product = require("../models/products.model")

const getAllProducts = async (req, res) => {
    const {category} = req.query
    let products;
    if(category){
        products = await Product.find({category})
    } else {
        products = await Product.find()
    }
    
    try {
        if(products){
            res.send(JSON.stringify(products))
        } else {
            res.status(404).send("product not found")
        }
    } catch (e) {
        res.send(e.message)
    }
}

const getProByCategory = async (req, res) => {
    const category = req.params.category
    const {page=1, limit=12} = req.query
    let products = await Product.find({category}).limit(limit).skip((page-1)*limit)
    try {
        if(products){
            res.send(JSON.stringify(products))
        } else {
            res.status(404).send("product not found")
        }
    } catch (e) {
        res.send(e.message)
    }
}

const createPro = async (req, res) => {
    const {name, category, description, image, price, ofPrice, quantity} = req.body
    
    try {
        let existing = await Product.findOne({name})
        if(existing){
           let prod = await Product.findOneAndUpdate({name},{quantity:existing.quantity++},{new:true})
           res.send("Product updated successfully")
        } else {
            let pro = await Product.create({
                user:req.objId, name, category, description, image, price, ofPrice, quantity
            })
            res.send("Product added successfully")
        }
    } catch (e) {
        res.send(e.message)
    }
}

const updatePro = async (req, res) => {
    
    let _id = req.params._id
    try {
        let existing = await Product.findOneAndUpdate({_id},{...req.body},{new: true})
        if(existing){
            res.send("Product updated successfully")  
        } else {
            res.send("Product not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
}

const deletePro = async (req, res) => {
    let _id = req.params._id
    try {
        let existing = await Product.findOneAndDelete({_id})
        if(existing){
            res.send(`Product deleted successfully`)
        } else {
            res.send("Product not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
}

module.exports = {getAllProducts, getProByCategory, createPro, updatePro, deletePro }