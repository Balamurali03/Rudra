


import Foodoutline from "./Foodoutline";
import useFetch from"../CoustomHooks/useSearch"
function Search()    
{
   let {data:items,pending,error}=useFetch("http://localhost:4000/items/")


   return(
   <>
   {
               error&&<h1 className="err">{error}</h1>
            }

{
               pending &&  <div className="loader"></div>
            }



{
   items&& <Foodoutline items={items} title="search based food"/>
}
</>


      



)  }

export default Search;