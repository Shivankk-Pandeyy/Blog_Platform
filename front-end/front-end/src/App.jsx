import { Route, Routes } from "react-router-dom"
import Homepage from "./Files/Homepage"
import Login from "./Files/Login"
import Signup from "./Files/Signup"
import HomepagePanel from "./Panel/HomepagePanel"
import Feed from "./Panel/Feed"
import ProfileView from "./Panel/ProfileView"
import AddPost from "./Panel/AddPost"
import UpdateProfile from "./Panel/UpdateProfile"
const App = () => {
    return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/WelcomeUser/:id" element={<HomepagePanel/>}></Route>
    <Route path="/MyFeeds/:id" element={<Feed/>}></Route>
    <Route path="/AddPost/:id" element={<AddPost/>}></Route>
    <Route path="/MyProfile/:id" element={<ProfileView/>}></Route>
    <Route path="/UpdateProfile/:id" element={<UpdateProfile/>}></Route>
    </Routes>
    )
}

export default App
