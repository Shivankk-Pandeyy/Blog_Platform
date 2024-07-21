const express=require('express');
const router=express.Router();
//FUNCTION CALL FROM CONTROLLER
const {getAllProducts,userRegistration,userLogin,getAllUsers,UpdateDetails,AddBlog,GetBlogs,DeleteBlog}=require('../Controllers/Product');
// RESTFUL APIs
router.route("/").get(getAllProducts);
router.route("/Register").post(userRegistration);
router.route("/Login").post(userLogin);
router.route("/getUsers").get(getAllUsers);
router.route("/UpdateDetails/:id").put(UpdateDetails);
router.route("/AddBlog").post(AddBlog);
router.route("/GetBlog").get(GetBlogs);
router.route("/DeleteBlog/:id").delete(DeleteBlog);
module.exports=router;