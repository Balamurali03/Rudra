import { useEffect, useState } from "react";
import Foodoutline from "./Foodoutline";

const Orders = () => {

    let[orders , setOrders] = useState(null);

    useEffect(()=>{
      let foodOrderd =  localStorage.getItem("orders");
      foodOrderd = JSON.parse(foodOrderd);
      console.log(foodOrderd);
      setOrders(foodOrderd);
    } , [])


    return (
        <div>
            {orders &&   <Foodoutline items={orders} title="food orderd"/> }
            
        </div>
     );
}
 
export default Orders;