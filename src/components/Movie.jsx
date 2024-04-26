import React from 'react';


const Movie = ({movieList, removeMovie}) => {
    return (
         <div className="movie">
             <div className="movie-title">{movieList.title}
                <span className="movie-year">{movieList.year}</span>
             </div>
             <div><button onClick={()=>removeMovie(movieList.id)}>삭제</button></div>
         </div>
    );
};

export default Movie;