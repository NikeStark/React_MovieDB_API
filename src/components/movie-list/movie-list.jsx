import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item.jsx';

import './movie-list.css';

const MovieList = ({listOfMovies}) => {

    const movies = listOfMovies.map((movie, id) => {
        return <MovieListItem key={id}
                image={movie.poster_path}/>
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {movies}
                </div>
            </div>
        </div>
    )
}

export default MovieList;