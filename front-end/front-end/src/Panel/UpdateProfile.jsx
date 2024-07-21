/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import PF from './UP.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateProfile = () => {
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        email:"",
    })
    const [details,setDetails]=useState({
        name:"",
        email:"",
    });
    const getUser=async()=>{
        const response=await axios.get("http://localhost:1818/api/diverse/getUsers");
        // console.log(response.data);
        response.data.map((val)=>{
            if(val._id===id){
                setUser({
                    name:val.name,
                    email:val.email,
                })
                setDetails({
                    name:val.name,
                    email:val.email,
                })
            }
        })
    }
    const handleData=(e)=>{
        const {name,value}=e.target;
        setDetails({
            ...details,
            [name]:value
        })
    }
    const submitData=async(e)=>{
        if(details.email==="" || details.name===""){
            alert("MANDATORY");
        }
        else{
            try{
                const response=await axios.put("http://localhost:1818/api/diverse/UpdateDetails/"+e,details);
                console.log(response)
            }
            catch(err){
                console.log(err);
            }
        }
    }
    useEffect(()=>{
        getUser()
    },[]);
return (
    <>
    <ToastContainer/>
    <Header/>
    <div className="view-profile">
    <div className="view-profile-1">
    <img src={PF} alt="PROFILE VIEW SECTION"></img>
    </div>
    <div className="view-profile-2">
    <form>
    <label>NAME</label>
    <input type="text" placeholder="Enter Name to Update" autoComplete="off" value={details.name} name="name" onChange={handleData}></input>
    <label>EMAIL</label>
    <input type="text" placeholder="Enter Email to Update" autoComplete="off" value={details.email} name="email" onChange={handleData}></input>
    <button type="submit" onClick={(e)=>submitData(id)}>SAVE DETAILS</button>
    </form>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default UpdateProfile