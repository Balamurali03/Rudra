import { useEffect } from "react";
import{useState} from "react";
import { useParams } from "react-router-dom";

function Animedetails()
 {
    let {id}=useParams();
    let[anime , setAnime] = useState(null)
    let[pending , setPending] = useState(true)
    let[error , setError] = useState(null)
       
    useEffect(()=>{


        setTimeout(()=>{
           let data= fetch("https://api.jikan.moe/v4/anime/"+id)
           data.then((response)=>
            {
               if(response.ok===true)
               {
                 //let {data}=response;
                  return response.json();
               }
               else
               {
                   throw Error(`The item you search is not there
                   check the keyword & try other key word`);
               }
               })
            .then(({data})=>{setAnime(data);console.log(data);setPending(false)})
            .catch((err)=>{
               if(err.message==="Failed to fetch")
               {
                  
                  setError("Due to network issue unable to connect");setPending(false)
               }
               else
               {
                  setError(err.message);setPending(false)
               }
               })
        },3000)
        
    },[id])




   return(
<div className="home">

{
   error&&<h1 className="err">{error}</h1>
}
{
   pending && <div className="loader"> <div class="bar">
   <div class="circle"></div>
   <p className="word">Loading</p>
 </div></div>
}

{anime &&
    <div className="details">
                    
                    <br />
                    <h1 className="name">{anime.title}</h1>
                    <br />
                    <img src={anime.images.jpg.large_image_url} alt="" className="detailpic"></img>
                    
                    <br />
                    <h3 className="year">YEAR: {anime.year}</h3>
                    <br /><br />
                    <div className="producers">
                        Producer Detail :
                      
                    {anime.producers.map(element => {
                       return (<>
                       <br />
                        <h3>{element.type}</h3>
                        <br />
                        <h3>{element.name}</h3>
                        <br />
                        <a href={element.url} className="anch"><h3>{element.url}</h3></a>
                        <br />
                        <span><iframe src={anime.trailer.embed_url} title="Animea trailer " frameborder="5"></iframe> </span>
                        <br />
                        </>
                        
                        )
                     })}

                     
                    </div>

                    <div className="moredetail">
                        MORE DETAILS :
                        <br />
                       <h3>Source : {anime.source}</h3>
                        <br />
                        <h3>Episodes : {anime.episodes}</h3>
                        <br />
                        <h3>Airing : {anime.airing}</h3>
                        <br />
                        <h3>Duration : {anime.duration}</h3>
                        <br />
                        <h3>Rating :{anime.rating}</h3>
                        <br />
                        <h3> Score : {anime.score}</h3>
                        <br />
                        <h3>Scored_by : {anime.scored_by}</h3>
                        <br />
                        <h3>Rank : {anime.rank}</h3>
                        <br />
                        <h3>Popularity : {anime.popularity}</h3>
                        <br />
                        <h3>Members : {anime.members}</h3>
                        <br />
                        <h3>Favorites : {anime.favorites}</h3>
                        <br />
                        
                        </div> 


                    <p className="synop"><h1>Synopsis : </h1>{anime.synopsis}</p>

                    </div>}
</div>
   ) 
}

export default Animedetails;