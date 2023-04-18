import cook from "../cook.png"
import {Link} from 'react-router-dom';
import {useState} from "react";
function Nav() {

let [searchKey,setSearchkey]=useState("");


    return (  
        <nav>
            <div className="logo">
             <Link to="/"> <img src={cook} alt="" />  </Link>       
              <span className="title1">LoveFood</span> 
              <br />
              <span className="title2">Restaurant</span>

            </div>
              <div className="search">
                <input type="search" placeholder="search here" value={searchKey} onChange={(e)=>{setSearchkey(e.target.value)}}/>
                <Link to={`/search${searchKey}`}> <button>search</button> </Link>
              </div>

            <div className="link">
              <Link to="/addfood"> Add Food </Link>
              <Link to="/order"> Order</Link>
            </div>
        </nav>
    );
}
 
export default Nav;