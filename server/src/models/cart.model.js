const { default: mongoose } = require("mongoose");



const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "product",
        required: true
    },
    product_owner: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    delivered:{type:Boolean,default:false},
    quantity:{type:Number, min:1, default:1},
    info: [
        {
            message: {type: String, required:true},
            date: {type:String, default: new Date() }
        }
    ]

},
{
    versionKey: false,
    timestamps: true
});


const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart