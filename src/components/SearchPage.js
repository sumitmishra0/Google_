import { useState,useEffect } from "react";

import {useSelector,useDispatch} from "react-redux"

import axios from "axios"

import {Link, useLocation} from "react-router-dom"

import {filterExplicit, showSearchResults, sortAplhabetsAsc, sortAplhabetsDesc, sortByDateAsc, sortByDateDesc, sortQualityAsc, sortQualityDesc} from "../store/actions"

import {Navbar} from "./Navbar"


export const SearchPage = ()=>{
     const local = useLocation();
     const params = new URLSearchParams(local.search);
     const query = params.get("q")
     const data = useSelector((store)=> store.result)
     const dispatch = useDispatch()

     useEffect(()=>{
        getData();
     },[])

     const getData=()=>{
         axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${query}`).then((res)=>{
             dispatch(showSearchResults(res.data))
         }).catch((err)=>{
             console.log(err.message)
         })
     }


     const handleAlphaAsc=()=>{
         dispatch(sortAplhabetsAsc())
     }
     const handleAlphaDesc=()=>{
        dispatch(sortAplhabetsDesc())
    }

    const handleDateAsc=()=>{
        dispatch(sortByDateAsc())
    }
    const handleDateDesc=()=>{
        dispatch(sortByDateDesc())
    }

    const handleQualityAsc=()=>{
        dispatch(sortQualityAsc())
    }
    const handleQualityDesc=()=>{
        dispatch(sortQualityDesc())
    }

    const handleExplicit = ()=>{
        dispatch(filterExplicit())
    }

    return ( <>
       <div>
             <Link to={"/"}>Return to home</Link>
         </div>
        <div id="searchpage"> 
         <h2>You are in Search page now</h2>
          <Navbar input={query}/>
           
        <div id="filter-sort">
            <button id="sort-alphabetically" onClick={handleAlphaAsc}> Sort A-Z</button>
            <button id="sort-alphabetically-desc" onClick={handleAlphaDesc}> Sort Z-A</button>

            <button id="sort-by-date" onClick={handleDateAsc}> Sort Date up</button>
            <button id="sort-by-date-desc" onClick={handleDateDesc}> Sort Date Down</button>

            <button id="sort-by-quality" onClick={handleQualityAsc}> Sort low to high Quality</button>
            <button id="sort-by-quality-desc" onClick={handleQualityDesc}> Sort high to low quality</button>

            <button id="filter-explicit" onClick={handleExplicit}> Explicit</button>

        </div>
           <div id="search-result"> 
            {
                data.map((e,i)=>{
                    return (
                        <div className = "result" key={e.id} >
                            <Link className="title" to={`/page/${e.id}`} > Title: {e.title}</Link>
                            <p className ="author">Author: {e.author}</p>
                            <p className ="desc">Description: {e.description}</p>
                            <p className ="creation_date">Creation Date : {e.creation_date}</p>
                            <p className ="quality">Quality : {e.quality}%</p>
                         </div>   
                    )
                })
            }
           </div>

        </div>

        </>
    )
}