import { useEffect, useState } from "react";
import { useHistory,useParams } from "react-router-dom";


function Updatefood() {
    let {id}=useParams();
    let history = useHistory();
    let[foodName , setFoodname] = useState("");
   let[price , setPrice] = useState("");
   let[type , setType] = useState("");
   let[rating , setRating] = useState("");
   let[pic , setPic] = useState("");

   useEffect(()=>{
    fetch("http://localhost:4000/items/"+id)
    .then(res=>res.json())
    .then((data)=>{  
        setFoodname(data.foodName);
        setPrice(data.price);
        setRating(data.rating);
        setPic(data.pic);
     })
   } ,[])




   let handleUpdateFood = (e)=>{
    e.preventDefault();
    let updatedFood = { foodName , price , type , rating , pic };
    fetch("http://localhost:4000/items/"+id ,  {
                                                method : "PUT" ,
                                                headers : {"Content-Type" : "application/json"} ,
                                                body : JSON.stringify(updatedFood)
                                            })
    .then(()=>{
        alert("food has been updated");
        history.goBack();
    })
}





//     let handleUpdateFood = (e)=>{
//         e.preventDefault();
       
//         let updatefood = { foodName  :  foodname.current.value ,
//                         price : price.current.value ,
//                         type : "" ,
//                         rating : rating.current.value ,
//                         pic : picture.current.value
//                         }

//         let options = document.getElementsByName("type");
//         for (let i = 0; i < options.length; i++)
//         {
//                     if( options[i].checked )
//                     {
//                         updatefood.type =  options[i].value ;
//                     }
//         }
       
//         fetch("http://localhost:4000/items/"+id ,  {
//             method : "PUT" ,
//             headers : {"Content-Type" : "application/json"} ,
//             body : JSON.stringify(updatefood)
//                })
                                                        
//         .then(()=>{
//             alert("food updated");
//             history.goBack();
//             // history.push("/")    redirects to home page
//         })
// }





    return(
        <div className="form">
            <div>
            <form onSubmit={handleUpdateFood}>
               
                <label htmlFor="foodname" className="spec">foodName</label>
                <input type="text" placeholder="foodName" className="in" value={foodName} onChange={ (e)=>{setFoodname(e.target.value) } } />
               
                <br />
                <br />
                <label htmlFor="price" className="spec">price</label>
                <input type="number" placeholder="foodPrice" className="in" value={price}  onChange={ (e)=>{setPrice(e.target.value) }} />
                <br />
                <br />
                <div className="spec">foodType</div>
               <div className="type" >
              <span className="rad">
               <input type="radio" value="Veg" id="Veg" name="type" className="tp" onClick={ (e)=>{setType(e.target.value) }}/> 
                <label For="Veg" className="tp">Veg</label>
                </span>
                <span className="rad">
                <input type="radio" value="Non-Veg" id="Non-Veg" name="type" className="tp" onClick={ (e)=>{setType(e.target.value) }}/> 
                <label For="Non-Veg" className="tp">Non-Veg</label>
                </span>
                </div>              
                <br />
                <label htmlFor="rating" className="spec">rating</label>
                <input type="number" placeholder="foodRating" className="in1" min={0} max={10} step="0.1" value={rating} onChange={ (e)=>{setRating(e.target.value) }} />
                <br />
                <br />
                <label htmlFor="picture" className="spec">foodpic</label>
                <input type="url" placeholder="foodPic" className="in" value={pic} onChange={ (e)=>{setPic(e.target.value) }}/>
                <br />
                <br />
                <input type="submit" value="UPDATE_FOOD" className="sub" />

            </form>

            </div>
           

        </div>
    )
    
}

export default Updatefood;