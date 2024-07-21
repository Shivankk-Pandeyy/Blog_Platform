import { useEffect, useState } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import axios from "axios"
const Feed = () => {
    const [blogs,setBlogs]=useState([]);
    const [search,setSearch]=useState("");
    const SEARCH=(e)=>{
        const {value}=e.target;
        setSearch(value);
        //console.log(search)
    }
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
    useEffect(()=>{
        GetBlogs();
    },[]);
return (
    <>
    <Header/>
    <div className="FEED">
    <div className="F-search">
    <input type="text" placeholder="ENTER TITLE/AUTHOR TO SEARCH" onChange={SEARCH}></input>
    </div>
    <div className="F-box">
                {
                    blogs.map((val)=>{
                        if(val.author===search||val.title===search){
                            return(
                                <>
                                <div className="F-blogfound">
                                <h2>TITLE:<span>{val.title}</span></h2>
                                <p>{val.content}</p>
                                <h2>AUTHOR:<span>{val.author}</span></h2>
                                <h2>CREATED AT:<span>{val.createdAt}</span></h2>
                                </div>
                                </>
                            )
                        }
                    })
                }
    {
        blogs.map((val)=>{
            return(
                <>
                <div className="F-blog">
                <h2>TITLE:<span>{val.title}</span></h2>
                <p>{val.content}</p>
                <h2>AUTHOR:<span>{val.author}</span></h2>
                <h2>CREATED AT:<span>{val.createdAt}</span></h2>
                </div>
                </>
            )
        })
    }
    </div>
    </div>
    <Footer/>
    </>
)
}

export default Feed