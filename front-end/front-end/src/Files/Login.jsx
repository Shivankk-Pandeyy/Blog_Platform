import Header from '../Component/Header'
import Footer from '../Component/Footer'
import LOGO from './LOGO.png'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Login = () => {
  const navigate=useNavigate();
  const notify1=()=>toast.error("All Fields are Required");//ALL FIELDS ARE MANDATORY
  const notify2=()=>toast.error("Invalid USER");//EMAIL NOT FOUND
  const notify3=()=>toast.error("Invalid PASSWORD");//PASSWORD ALERT
  const [user,setUser]=useState([]);//USER LIST ACCESS
  const getUser=async()=>{
    const response=await axios.get("http://localhost:1818/api/diverse/getUsers");
    // console.log(response.data);
    await setUser(response.data);
  }  
  const [data,setData]=useState({
    email:"",
    password:"",
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
    if(data.email===""||data.password===""){
      notify1();
      return;
    }
    else{
      try{
        const response=await axios.post("http://localhost:1818/api/diverse/Login",data);
        console.log(response.data.message);
        await user.map((val)=>{
          if(val.email===data.email){
            navigate(`/WelcomeUser/${val._id}`);
          }
        })

      }
      catch(err){
        console.log(err.response.data.message);
        if(err.response.data.message==="USER NOT FOUND"){
          setData({
            email:"",
            password:""
          })
          notify2();
          return;
        }
        if(err.response.data.message==="INVALID CREDENTIALS"){
          notify3();
          setData({
            ...data,
            password:"",
          })
          return;
        }
      }
    }
  }
  useEffect(()=>{
    Aos.init()
    getUser();
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
    <label>EMAIL</label>
    <input type='text' placeholder='Enter Email' autoComplete='off' name='email' onChange={handleData} value={data.email}></input>
    <label>PASSWORD</label>
    <input type='password' placeholder='Enter Password' autoComplete='off' name='password' onChange={handleData} value={data.password}></input>
    <button type='submit'>LOGIN</button>
    <NavLink to='/Signup'>New to Diverse Diaries?</NavLink>
    </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
