const { default: mongoose } = require("mongoose");



const adminSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    revenue:{type:Number,default:0},
    total_sold:{type:Number, min:0, default:0},
},
{
    versionKey: false,
    timestamps: true
});


const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin