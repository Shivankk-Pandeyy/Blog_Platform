import './Component.css'
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
        <div className="name">
        <h2>DIVERSE DIARIES</h2>
        </div>
        <div className="link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Signup">Signup</NavLink>
        </div>
        </div>
    )
}
export default Header