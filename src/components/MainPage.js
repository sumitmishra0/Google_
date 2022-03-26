import logo from "./u5c4_google.png"
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";

export const MainPage = ()=>{
    const [query,setQuery] = useState("");
    let navigate = useNavigate();
    


    return (
        <div className="mainpage">
        
            <img src = {logo} alt="googleLogo" className="google-logo"/>  <br/> <br/>
            <input type="text" className="search-box" placeholder="Search from google" onChange={(e)=>{
            setQuery(e.target.value)}} onKeyDown={(e)=>{
                if(e.key === "Enter") navigate(`./search?q=${query}`)
            }}/>
        </div>
    )
}