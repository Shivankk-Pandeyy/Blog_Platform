//USER SCHEMA
const User=require("../Schema/User");
//BLOG SCHEMA
const Blog=require('../Schema/Blog');
//BCRYPT
const bcrypt=require('bcryptjs');
//HOMEPAGE GET REQUEST
const getAllProducts=async(req,res)=>{
    try{
        res.status(200).json({message:"Router Successful Diverse Diaries"});
    }
    catch(err){
        console.log(err);
    }
}
//USER REGISTRATION
const userRegistration=async(req,res)=>{
    const {name,email,password,cpassword}=req.body;
    const dummy=await User.findOne({email});
    //HASH THE PASSWORD
    const saltRound=10;
    const hashPassword=await bcrypt.hash(password,saltRound);
    if(dummy){
        return res.status(400).json({message:"EMAIL"});
    }
    else{
        try{ 
            const user=await new User({
                name,
                email,
                password:hashPassword,
                cpassword:hashPassword,
            });
            await user.save();
            return res.status(200).json({message:"Registration Succesful"});
        }
        catch(err){
            console.log(err);
        }
    }
}
//USER LOGIN
const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    const checkUser=await User.findOne({email});
    if(!checkUser){
        return res.status(400).json({message:"USER NOT FOUND"});
    }
        try{
            const isPasswordValid=await bcrypt.compare(password,checkUser.password);
            if(isPasswordValid){
                return res.status(200).json({message:"LOGIN"})
            }
            else{
                return res.status(400).json({message:"INVALID CREDENTIALS"})
            }
        }
        catch(err){
            console.log(err);
        }
}
//GET USERS
const getAllUsers=async(req,res)=>{
    try{
        const user=await User.find({});
        res.json(user);
    }
    catch(err){
        console.log(err);
    }
}
//UPDATE USER DETAILS
const UpdateDetails=async(req,res)=>{
    const {id}=req.params;
    const{name,email}=req.body;
    const dummyEmail=User.findOne({email});
    if(dummyEmail){
        return res.status(400).json({message:"EMAIL"});
    }
    try{
        const user=await User.findByIdAndUpdate({_id:id},{name,email});
        await user.save();
        return res.status(200).json({message:"UPDATED"});
    }
    catch(err){
        console.log(err);
    }
}
//ADD BLOG
const AddBlog=async(req,res)=>{
    const {title,author,content,id}=req.body;
    const dummy=await Blog.findOne({title});
        try{
            const blog=await new Blog({
                id,
                title,
                author,
                content,
            });
            await blog.save();
            return res.status(200).json({message:"ADDED"});
        }
        catch(err){
            console.log(err);
        }
}
//GET BLOGS
const GetBlogs=async(req,res)=>{
    try{
        const blog=await Blog.find({});
        res.json(blog);
    }
    catch(err){
        console.log(err);
    }
}
//DELETE BLOG
const DeleteBlog=async(req,res)=>{
    const {id}=req.params;
    try{
        const blog=await Blog.findByIdAndDelete({_id:id});
        return res.status(200).json({message:"DELETED"});
    }
    catch(err){
        console.log(err);
    }
}
module.exports={getAllProducts,userRegistration,userLogin,getAllUsers,UpdateDetails,AddBlog,GetBlogs,DeleteBlog};