const mongoose=require('mongoose');
//USER SCHEMA
const blogSchema=new mongoose.Schema({
    id:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    content:{
        type:String,
        require:true,
    },
},{timestamps:true});
//USER MODEL
const Blog=mongoose.model("Blog",blogSchema);
module.exports=Blog;