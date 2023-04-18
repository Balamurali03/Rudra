import logo from "../logo.jpg"
import {Link} from 'react-router-dom';
import {useState} from "react";
import {FaSistrix} from 'react-icons/fa';
function Nav() {
    let [searchKey,setSearchkey]=useState("");
    return(
        <nav>
            <Link to="/" onClick={()=>{setSearchkey("")}}> <div className="logo">
           <img src={logo} alt="logo" className="pic" />
            <span className="title">Anime World</span>
            </div></Link>
            <div className="search">
           <input type="search"  className="sbox"    value={searchKey} onChange={(e)=>{setSearchkey(e.target.value)}}/>
           </div>
           <span><Link to={`/search${searchKey}`}> <button className="sbtn" onClick={()=>{setSearchkey("")}}><FaSistrix className="ser"></FaSistrix></button></Link></span>
           
            

        </nav>
    )
    
}

export default Nav;