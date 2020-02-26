import React from 'react';

import './movie-list-item.css';

const MovieListItem = ({image}) => {
  
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        image == null ? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} 
                                                alt="card image" style={{width:"100%", height:320}}/> : 
                                        <img src={`http://image.tmdb.org/t/p/w300${image}`} 
                                                alt="card image" style={{width:"100%", height:320}}/>
                        
                    } 
                </div>
                <div className = "card-content">
                    <p><a href="#" style={{color:"red"}}>View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default MovieListItem;