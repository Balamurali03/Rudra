import { useParams,useHistory, Link } from "react-router-dom";
import useFetch from"../CoustomHooks/useFetch"
//import { useHistory } from "react"
function Fooddetails() {
    let {id}=useParams();


 
    let {data:item,pending,error}=useFetch("http://localhost:4000/items/"+id);
    let history=useHistory();
    let handleDeleteFood=()=>{

        fetch("http://localhost:4000/items/" +id , {method:"DELETE"} )
        .then(()=>{
            alert("food has been removed");
            history.push("/");
        })
    }
    

    return(
        <div>
        {
   error&&<h1 className="err">{error}</h1>
}
{
   pending && <div className="load1"> <div className="loader1"></div>  </div>
}
{
    item&& <div className="detailedfood">
        <img src={item.pic} alt="food"  />
        <h1>{item.foodName}</h1>
        <h3>PRICE : {item.price}</h3>
        <h3 className={item.type}>{item.type}</h3>
        <h4 >RATING : {item.rating}</h4>
       
            <button onClick={handleDeleteFood} >remove food</button>
              <br /><br />
            <Link to={`/update${id}`}><button  >update food</button></Link>
       
    </div>
}
       
        </div>
    )

}
export default Fooddetails;