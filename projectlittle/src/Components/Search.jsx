
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import Outline from "./Outline";

function Search()    

    { let {searchKey}=useParams();
        let[anime , setAnime] = useState(null)
        let[pending , setPending] = useState(true)
        let[error , setError] = useState(null)
           
        useEffect(()=>{
    
    
            setTimeout(()=>{
               let data= fetch("https://api.jikan.moe/v4/anime")
               data.then((response)=>
                {
                   if(response.ok==true)
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
                .then(({data})=>{
                   
                    data = data.filter((an)=>{
                        return(an.title.toUpperCase().includes(searchKey.toUpperCase()))
            
            })
            
                    
                    setAnime(data);console.log(data);setPending(false)})
                .catch((err)=>{
                   if(err.message=="Failed to fetch")
                   {
                      
                      setError("Due to network issue unable to connect");setPending(false)
                   }
                   else
                   {
                      setError(err.message);setPending(false)
                   }
                   })
            },3000)
            
        },[searchKey])
    
    
    

   return(
   <div className="home">
   {
               error&&<h1 className="err">{error}</h1>
            }

{
               pending &&  <div className="loader"><div class="bar">
               <div class="circle"></div>
               <p className="word">Loading</p>
             </div></div>
            }



{
   anime&& <Outline anime={anime} title="search based keyword" className="ser"/>
}
</div>


      



)  }

export default Search;