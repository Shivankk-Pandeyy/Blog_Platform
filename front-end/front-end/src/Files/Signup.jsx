import Header from '../Component/Header'
import Footer from '../Component/Footer'
import LOGO from './LOGO.png'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Signup = () => {
  const navigate=useNavigate();
  const notify1=()=>toast.error("All Fields are Required");//ALL FIELDS ARE MANDATORY
  const notify2=()=>toast.error("Invalid EMAIL");//EMAIL INVALID
  const notify3=()=>toast.error("Invalid NAME");//NAME INVALID
  const notify4=()=>toast.error("PASSWORDS don't Match");//PASSWORD INVALID
  const notify5=()=>toast.error("EMAIL Already Exists");//USER EXISTS  
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const nameRegex=/^[a-zA-Z]/;
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
  });
  const handleData=(e)=>{
    const {name,value}=e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const isValidEmail = emailRegex.test(data.email);
    const isvalidName=nameRegex.test(data.name);
    if(data.name==="" || data.email==="" || data.password==="" || data.cpassword===""){
      notify1();
      return;
    }
    if(!isValidEmail){
      notify2();
      setData({
        ...data,
        email:""
      })
      return;
    }
    if(!isvalidName){
      notify3();
      setData({
        ...data,
        name:""
      })
      return;
    }
    if(data.password!==data.cpassword){
      notify4();
      setData({
        ...data,
        password:"",
        cpassword:"",
      })
      return;
    }
    else{
      try{
        const response=await axios.post("http://localhost:1818/api/diverse/Register",data);
        console.log(response.data.message);
        setData({
          name:"",
          email:"",
          password:"",
          cpassword:"",
        });
        navigate("/Login");
      }
      catch(err){
        //console.log(err.response.data.message);
        if(err.response.data.message==="EMAIL"){
          notify5();
          setData({
            ...data,
            email:""
          })
        }
      }
    }
  }
  useEffect(()=>{
    Aos.init()
  },[]);
  return (
    <>
    <ToastContainer hideProgressBar={false} theme="dark" autoClose={2000}/>
    <Header/>
    <div className='login'>
    <div className='login-1'>
    <img src={LOGO} alt='OUR LOGO' data-aos="fade-right"></img>
    </div>
    <div className='login-2'>
    <form data-aos="fade-left" onSubmit={handleSubmit}>
    <label>NAME</label>
    <input type='text' placeholder='Enter Name' autoComplete='off' name='name' onChange={handleData} value={data.name}></input>
    <label>EMAIL</label>
    <input type='text' placeholder='Enter Email' autoComplete='off' name='email' onChange={handleData} value={data.email}></input>
    <label>PASSWORD</label>
    <input type='password' placeholder='Enter Password' autoComplete='off' name='password' onChange={handleData} value={data.password}></input>
    <label>CONFIRM PASSWORD</label>
    <input type='password' placeholder='Re-Enter Password' autoComplete='off' name='cpassword' onChange={handleData} value={data.cpassword}></input>
    <button type='submit'>SIGNUP</button>
    <NavLink to='/Login'>Already an User?</NavLink>
    </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default Signup