/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddPost = () => {
    const notify1=()=>toast.error("All Fields are Required");//ALL FIELDS ARE MANDATORY
    const dell=()=>toast.success("Blog Deleted");
    const add=()=>toast.success("Blog Added");
    const {id}=useParams();
    const [details,setDetails]=useState({
        id:id,
        title:"",
        author:"",
        content:""
    });
    const handleDetails=(e)=>{
        const {name,value}=e.target;
        setDetails({
            ...details,
            [name]:value
        })
    }
    const submitDetails=async(e)=>{
        e.preventDefault();
        if(details.author===""||details.content===""||details.tittle===""){
            notify1();
        }
        else{
            try{
                const response=await axios.post("http://localhost:1818/api/diverse/AddBlog",details);
                //console.log(response)
                setDetails({
                    id:id,
                    title:"",
                    author:"",
                    content:"",
                })
                add();
            }
            catch(err){
                console.log(err);
            }
        }
    }
    const [blogs,setBlogs]=useState([]);
    const GetBlogs=async()=>{
        try{
            const response=await axios.get("http://localhost:1818/api/diverse/GetBlog");
            //console.log(response.data);
            setBlogs(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    const deleteBlog=async(id)=>{
        try{
            const response=await axios.delete("http://localhost:1818/api/diverse/DeleteBlog/"+id)
           // console.log(response);
           dell();
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        GetBlogs();
    },[submitDetails]);
return (
    <>
    <ToastContainer hideProgressBar={false} theme="dark" autoClose={2000}/>
    <Header/>
    <div className="AP">
    <div className="AP1">
    <h2>WRITE YOUR BLOG HERE</h2>
    <form onSubmit={submitDetails}>
    <label>TITLE</label>
    <input type="text" placeholder="ENTER TITLE FOR BLOG" autoComplete="off" name="title" onChange={handleDetails} value={details.title}></input>
    <label>ENTER AUTHOR</label>
    <input type="text" placeholder="ENTER AUTHOR NAME" autoComplete="off" onChange={handleDetails} name="author" value={details.author}></input>
    <label>ENTER CONTENT</label>
    <input type="text" placeholder="ENTER YOUR BLOG DETAILS" autoComplete="off" onChange={handleDetails} name="content" value={details.content}></input>
    <button type="submit">POST</button>
    </form>
    </div>
    <div className="AP2">
    {
        blogs.map((val)=>{
            if(val.id===id){
                return(
                    <>
                    <div className="BLOG-CARD">
                    <h2>TITLE:<span>{val.title}</span></h2>
                    <p>{val.content}</p>
                    <h2>AUTHOR:<span>{val.author}</span></h2>
                    <h2>PUBLISHED TIME: <span>{val.createdAt}</span></h2>
                    <button onClick={(e)=>deleteBlog(val._id)}>DELETE</button>
                    </div>
                    </>
                )
            }
        })
    }
    </div>
    </div>
    <Footer/>
    </>
)
}
export default AddPost