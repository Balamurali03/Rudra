
import Foodoutline from "./Foodoutline";
import useFetch from"../CoustomHooks/useFetch"
function Home()
 {


   let {data:items,pending,error}=useFetch("http://localhost:4000/items")
   



   return(
<div className="home">

{
   error&&<h1 className="err">{error}</h1>
}
{
   pending &&  <div className="loader"></div>
}

 {items &&
<Foodoutline 
items={items}
title="all food"/>

 }

</div>
   ) 
}

export default Home;