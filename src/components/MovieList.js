import React from 'react';
import '../MovieList.css';

const MovieList = (props) => {
    const ActionComponent = props.actionComponent;
    return (
        <>
            {props.movies.map((movie, index) =>

                <div className="image-container d-flex justify-content-center m-2" onClick={() => props.clickHandler(movie)}>
                    <img key={index} src={movie.Poster} alt="movie"></img>
                    <div class="overlay d-flex justify-content-end align-items-center">
                        <ActionComponent></ActionComponent>
                    </div>
                </div>)}
        </>
    )
}

export default MovieList;