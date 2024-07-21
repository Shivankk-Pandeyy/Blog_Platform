import './Component.css'
import {NavLink, useNavigate, useParams} from 'react-router-dom';
const Header = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const LOGOUT=()=>{
        navigate('/Login');
    }
    return (
        <div className="header-1">
        <div className="name-1">
        <h2>DIVERSE DIARIES</h2>
        </div>
        <div className="link-1">
        <NavLink to={`/WelcomeUser/${id}`}>Home</NavLink>
        <NavLink to={`/MyFeeds/${id}`}>Feed</NavLink>
        <NavLink to={`/AddPost/${id}`}>Add Post</NavLink>
        <NavLink to={`/MyProfile/${id}`}>Profile</NavLink>
        <button onClick={LOGOUT}>LOGOUT</button>
        </div>
        </div>
    )
}
export default Header