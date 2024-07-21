import { NavLink, useParams } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import PF from './PF.png'
import { useEffect, useState } from "react"
import axios from "axios"
const ProfileView = () => {
    const {id}=useParams();
    const [details,setDetails]=useState({
        name:"",
        email:"",
        password:"",
    })  
    const getUser=async()=>{
        const response=await axios.get("http://localhost:1818/api/diverse/getUsers");
        // console.log(response.data);
        response.data.map((val)=>{
            if(val._id===id){
                setDetails({
                    name:val.name,
                    email:val.email,
                    password:val.password,
                })
            }
        })
    }
    useEffect(()=>{
        getUser();
    },[]);
return (
    <>
    <Header/>
    <div className="view-profile">
    <div className="view-profile-1">
    <img src={PF} alt="PROFILE VIEW SECTION"></img>
    </div>
    <div className="view-profile-2">
    <h2>NAME</h2>
    <p>{details.name}</p>
    <h2>EMAIL</h2>
    <p>{details.email}</p>
    <NavLink to={`/UpdateProfile/${id}`}><button>UPDATE DETAILS</button></NavLink>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default ProfileView
