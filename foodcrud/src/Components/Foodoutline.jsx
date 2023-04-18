import {Link} from 'react-router-dom';
import {useEffect,useState} from "react";
function Foodoutline({items ,title}) 
{let [ordersId,setOrdersId]=useState([]);
    useEffect(()=>{

        let orders=localStorage.getItem("orders");
        orders=JSON.parse(orders);
        let o=orders.map((v)=>{return v.id})
        setOrdersId(o);
        console.log(ordersId);

    },[])
    let handleOrder=( id )=>{


        fetch("http://localhost:4000/items/"+id)
        .then(res=>res.json())
        .then((data)=>{

            let newOrders=localStorage.getItem("orders");
            newOrders=JSON.parse(newOrders);
            newOrders.push(data);
            newOrders=JSON.stringify(newOrders);
            localStorage.setItem("orders",newOrders);
        })
    }

    let handleCancelOrders=( id )=>{
     
        let olderOrders=localStorage.getItem("orders");
        olderOrders=JSON.parse(olderOrders);
        let start=olderOrders.findIndex((v)=>{return v.id==id})
        olderOrders.splice(start,1);
        olderOrders=JSON.stringify(olderOrders);
        localStorage.setItem("orders",olderOrders);
     window.location.reload();
    }
    
    return(
        <div >
            <h1>{title}</h1>
            <div className="foodoutline">
            {
                items.map((food)=>{ return(
                    <div className="food" key={food.foodName}>
                        <Link to={`fooddetails${food.id}`} className='box'>
                        <img src={food.pic} alt="" />
                        <h2>{food.foodName}</h2>
                        <h5>PRICE:{food.price}</h5>
                        </Link>
                       {!ordersId.includes(food.id) &&<button onClick={()=>{handleOrder(food.id)}}>order food</button>} 
                        <br />
                        {ordersId.includes(food.id) &&<button onClick={()=>{handleCancelOrders(food.id)}}>remove food</button>}
                    </div>
                )})
            }
            </div>
        </div>
    )
}

export default Foodoutline;