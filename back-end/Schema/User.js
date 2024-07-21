const mongoose=require('mongoose');
//USER SCHEMA
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    },
},{timestamps:true});
//USER MODEL
const User=mongoose.model("User",userSchema);
module.exports=User;