import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";


function Addfood() {

    let history = useHistory();
    let foodname = useRef();
    let price = useRef();
    let rating = useRef();
    let picture  = useRef();

    let handleAddFood = (e)=>{
        e.preventDefault();

        let newFood = { foodName  :  foodname.current.value ,
                        price : price.current.value ,
                        type : "" ,
                        rating : rating.current.value ,
                        pic : picture.current.value
                        }

        let options = document.getElementsByName("type");
        for (let i = 0; i < options.length; i++)
        {
                    if( options[i].checked )
                    {
                        newFood.type =  options[i].value ;
                    }
        }

        fetch("http://localhost:4000/items" ,  {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(newFood)
               })
                                                        
        .then(()=>{
            alert("new food added");
            history.goBack();
            // history.push("/")    redirects to home page
        })
}





    return(
        <div className="form">
            <div>
            <form onSubmit={handleAddFood}>
               
                <label htmlFor="foodname" className="spec">foodName</label>
                <input type="text" placeholder="foodName" className="in" required ref={foodname}/>
                <br />
                <br />
                <label htmlFor="price" className="spec">price</label>
                <input type="number" placeholder="foodPrice" className="in" required ref={price}/>
                <br />
                <br />
                <div className="spec">foodType</div>
               <div className="type" required>
              <span className="rad">
               <input type="radio" value="Veg" id="Veg" name="type" className="tp"/> 
                <label For="Veg" className="tp">Veg</label>
                </span>
                <span className="rad">
                <input type="radio" value="Non-Veg" id="Non-Veg" name="type" className="tp"/> 
                <label For="Non-Veg" className="tp">Non-Veg</label>
                </span>
                </div>              
                <br />
                <label htmlFor="rating" className="spec">rating</label>
                <input type="number" placeholder="foodRating" className="in1" min={0} max={10} step="0.1" required ref={rating}/>
                <br />
                <br />
                <label htmlFor="picture" className="spec">foodpic</label>
                <input type="url" placeholder="foodPic" className="in" required ref={picture}/>
                <br />
                <br />
                <input type="submit" value="ADD_FOOD" className="sub" />

            </form>

            </div>
           

        </div>
    )
    
}

export default Addfood;