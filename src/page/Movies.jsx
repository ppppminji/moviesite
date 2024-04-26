import React, {useState} from 'react';
import Movie from './../components/Movie';
import MovieForm from './../components/MovieForm';



const Movies = () => {
    
    const [movies, setMovies]=useState([])
    const removeMovie=(id)=>{
        setMovies(movies.filter(movieList => {
            return movieList.id !==id;
        }))
    }
    const renderMovies=movies.length ? movies.map((movieList) =>{
        return(
           <Movie movieList={movieList} key={movieList.id} removeMovie={removeMovie} />
        )
    }): (<div className='strongText'>'추가 된 영화가 없습니다.'</div>)

    const addMovie=(movieList)=>{
        setMovies([
            ...movies,
            movieList
        ]);
    }
    
    return (
        <div className='pt80 moviesWrap'>
            <h2>movies page</h2>
            <h3>보고싶은 영화</h3>
            <MovieForm  addMovie={addMovie}/>
            {renderMovies}
        </div>
    );
};

export default Movies;