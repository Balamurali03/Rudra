import { useEffect } from "react";
import{useState} from "react";
import Outline from "./Outline";

function Home()
 {
    let[anime , setAnime] = useState(null)
    let[pending , setPending] = useState(true)
    let[error , setError] = useState(null)
       
    useEffect(()=>{


        setTimeout(()=>{
           let data= fetch("https://api.jikan.moe/v4/anime")
           data.then((response)=>
            {
               if(response.ok===true)
               {
                 //let {data}=response;
                  return response.json();
               }
               else
               {
                   throw Error(`The item you search is not there
                   check the keyword & try other key word`);
               }
               })
            .then(({data})=>{setAnime(data);console.log(data);setPending(false)})
            .catch((err)=>{
               if(err.message==="Failed to fetch")
               {
                  
                  setError("Due to network issue unable to connect");setPending(false)
               }
               else
               {
                  setError(err.message);setPending(false)
               }
               })
        },3000)
        
    },[])




   return(
<div className="home">

{
   error&&<h1 className="err">{error}</h1>
}
{
   pending &&  <div className="loader"><div class="bar">
   <div class="circle"></div>
   <p className="word">Loading</p>
 </div ></div>
}

 {anime &&
<Outline 
anime={anime}
title="all animea"/>

 }

</div>
   ) 
}

export default Home;