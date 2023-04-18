import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Inhome() {

let [home,setHome]=useState(null);

useEffect(()=>{

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("localhost:9000/get", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

       
},[])

   return (
    <>
    {
       home&& home.map((ho)=>{
            return (
                
                <>
                <h1>{ho.id}</h1>
                <h1>{ho.make}</h1>
                <h1>{ho.model}</h1>
                <h1>{ho.year}</h1>
                <h1>{ho.regNo}</h1>
                </>
            )
        })
    }
    </>
   ) 
}

export default Inhome;