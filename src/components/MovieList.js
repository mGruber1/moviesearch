import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) =>
                <div className="d-flex justify-content-start m-2">
                    <img key={index} src={movie.Poster} alt="movie"></img>
                </div>)}
        </>
    )
}

export default MovieList;