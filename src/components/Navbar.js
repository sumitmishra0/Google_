import { useState } from "react";

import {useSelector,useDispatch} from "react-redux"

import axios from "axios"

import logo from "./u5c4_google.png"

import {showSearchResults} from '../store/actions'

import { useNavigate } from "react-router-dom";

export const Navbar = ({input})=>{
    const [query,setQuery] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const keyEnter = (e)=>{      
        if(e.key === "Enter") {
            getSearchResults();
            navigate(`?q=${query}`)
        }
    }

    const handleSearch = (e)=>{      
            getSearchResults();
            navigate(`?q=${query}`)
    }

    const getSearchResults = ()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${query}`).then((res)=>{
            console.log(res.data);
            dispatch(showSearchResults(res.data));
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div id="navbar">
            <img src = {logo} alt="googleLogo" className="google-logo"/>  <br/> <br/>
            <input type="text" className="search-box" placeholder="Search from google" onChange={(e)=>{
            setQuery(e.target.value)}} onKeyDown={keyEnter}/>

            <button className="search" onClick={handleSearch}>Search</button>
        </div>
    )
}