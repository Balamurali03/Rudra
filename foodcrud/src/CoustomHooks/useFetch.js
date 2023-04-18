import { useEffect } from "react";
import{useState} from "react";


function useFetch(request) 
{
    let[data , setData] = useState(null)
    let[pending , setPending] = useState(true)
    let[error , setError] = useState(null)
       
    useEffect(()=>{


        setTimeout(()=>{
            fetch(request)
            .then((response)=>
            {
               if(response.ok==true)
               {
                  return response.json();
               }
               else
               {
                   throw Error(`The item you search is not there
                   check the keyword & try other key word`);
               }
               })
            .then((data)=>{setData(data);setPending(false)})
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
        
    },[])
    

    return{data,pending,error};
}


export default useFetch;