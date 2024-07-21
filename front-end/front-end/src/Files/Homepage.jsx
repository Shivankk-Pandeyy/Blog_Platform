import './Files.css'
import LOGO from './LOGO.png'
import SERVICES from './SERVICES.gif'
import CONTACT from './CONTACT.png'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Homepage = () => {
    useEffect(()=>{
        Aos.init()
    },[]);
    return (
    <>
    <Header/>
    <div className='homepage'>
    <div className='homepage-1' data-aos="fade-right">
    <img src={LOGO} alt='OUR LOGO'></img>
    </div>
    <div className='homepage-2' data-aos="fade-up"> 
    <h2>Welcome to Diverse Diaries</h2>
    <p >Join us as we explore a rich tapestry of topics, offering insights, inspiration, and diverse perspectives for curious minds.</p>
    <div className='homepage-button'>
    <button>ABOUT US</button>
    <button>CONTACT US</button>
    <button>JOIN NOW</button>
    </div>
    </div>
    </div>
    <div className='homepage'>
    <div className='homepage-1' id='ABOUT'  data-aos="fade-right">
    <h2  data-aos="fade-right">What We Do</h2>
    <p  data-aos="fade-right">Welcome to Diverse Diaries! We are a community-driven blog dedicated to exploring a wide range of topics, from personal experiences and travel adventures to insightful commentary on culture, technology, and more. Our mission is to provide a platform for diverse voices and stories, inspiring our readers through engaging and thought-provoking content. Join us on this journey as we celebrate the richness of lifes varied narratives.</p>
    </div>
    <div className='homepage-2'>
    <img src={SERVICES} alt='OUR SERVICES'  data-aos="fade-left"></img>
    </div>
    </div>
    <div className='homepage'>
    <div className='homepage-1'  data-aos="fade-right">
    <img src={CONTACT} alt='OUR CONTACT DETAILS'  data-aos="fade-right"></img>
    </div>
    <div className='homepage-2' id='CONTACT'>
    <h2  data-aos="fade-left">Connect with Us</h2>
    <button  data-aos="fade-left">CALL US</button>
    <button data-aos="fade-left">EMAIL US</button>
    <button data-aos="fade-left">VISIT US</button>
    <button  data-aos="fade-left">DOWNLOAD CARD</button>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.549180751664!2d81.31423747503672!3d21.21006058048502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d1f52bbe7eb%3A0x5734d0fa678f95bc!2s224%2C%20Street%20Number%2019%2C%20Pushpak%20Nagar%2C%20Bhilai%2C%20Chhattisgarh%20490020!5e0!3m2!1sen!2sin!4v1717149147084!5m2!1sen!2sin" data-aos="fade-left"></iframe>
    </div>
    </div>
    <Footer/>
    </>
    )
}
export default Homepage
