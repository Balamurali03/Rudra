import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";

function useSearch(request) {

    

    let {searchKey}=useParams();
   let[data , setData] = useState(null)
   let[pending , setPending] = useState(true)
   let[error , setError] = useState(null)

useEffect(()=>{
   setTimeout(() => {
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
      }
      )
      .then((data)=>{
         data = data.filter((food)=>{
            return(food.foodName.toUpperCase().includes(searchKey.toUpperCase())||food.type.toUpperCase()==searchKey.toUpperCase() )

})
                 setData(data);setPending(false)})

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
      
   }, 3000);




},[searchKey])

    return {data,pending,error};
}

export default useSearch;