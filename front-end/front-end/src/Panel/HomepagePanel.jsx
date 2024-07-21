import Footer from "./Components/Footer"
import Header from "./Components/Header"
import './Panel.css'
import HP from './HP.png'
import { NavLink, useParams } from "react-router-dom"
const HomepagePanel = () => {
    const {id}=useParams();
return (
    <>
    <Header/>
    <div className="Panel">
    <div className="P-1">
    <img src={HP} alt="HOMEPAGE PIC"></img>
    </div>
    <div className="P-2">
    <h2>Welcome to Diverse Diaries</h2>
    <h2>Why Diverse Diaries?</h2>
    <p>EASY ACCESS</p>
    <p>FREE FOR LIFETIME</p>
    <p>NO RESTRICTIONS</p>
    <p>SECURE AND PRIVATE</p>
    <p>ULTIMATE BLOG PLATFORM</p>
    <div className="P-2Button">
    <NavLink to={`/MyFeeds/${id}`}><button>VIEW BLOGS</button></NavLink>
    <NavLink to={`/AddPost/${id}`}><button>CREATE BLOGS</button></NavLink>
    <NavLink to={`/MyProfile/${id}`}><button>VIEW PROFILE</button></NavLink>
    </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default HomepagePanel