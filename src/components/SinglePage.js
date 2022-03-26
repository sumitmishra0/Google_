import { useEffect ,useState} from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import {useSelector,useDispatch} from "react-redux"

export const SinglePage = ()=>{
    const {id} = useParams();
    const [data,setData] = useState({})
    const store = useSelector((store)=> store.result)
 
    useEffect(()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data/${id}`).then((res)=>{
            setData(res.data)
        })
        
    },[])
    return ( 
    <>   
         <div>
             <Link to={"/"}>Return to home</Link>
         </div>
         <div id="detailed-result"> 
                <p > Title: {data.title}</p>
                <p className ="author">Author: {data.author}</p>
                <p className ="desc">Description: {data.description}</p>
                <p className ="creation_date">Creation Date : {data.creation_date}</p>
                <p className ="quality">Quality : {data.quality}%</p>
                <p className ="explicit">Quality : {data.explicit?"true":"false" }</p>  
            </div>
    </>
           
    )
}