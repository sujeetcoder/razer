const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    razer_id:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    ipAddress:{type:[String],required:true},
    role:{type:String,enum:["user","admin","CEO"],default:"user"},
    status:{type:String,enum:["active","ban"],default:"active"},
    logStatus: {type:Boolean, default:false},
    last_login: {type:Number,default: Date.now()}
},
{
    versionKey: false,
    timestamps: true
})

const User=mongoose.model("user",userSchema)

module.exports=User

