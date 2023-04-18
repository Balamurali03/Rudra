import {Link} from "react-router-dom"
function Outline({anime }) 
{
    
    return(
        <div >
            
            <div className="outline">
            {
                anime.map((anime)=>{ return(<Link to={`/details${anime.mal_id}`} className="box" >
                    <div className="food" >
                        
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <br />
                        <h2>{anime.title}</h2>
                        
                        
                    </div></Link>
                )})
            }
            </div>
        </div>
    )
}

export default Outline;