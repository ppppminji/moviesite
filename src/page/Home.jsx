import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Upcoming from './../components/Upcoming';
import Appmovie from './../components/Appmovie';

const Home = () => {
    const APIKEY=process.env.REACT_APP_TMDB_API_KEY;
    const [appMovie, setAppMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleMovies, setVisibleMovies] = useState(10);
    const moviesPerPage=5;

    const getMovies=async() =>{
        try{
            /* const response=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`); */
            const response=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ko-KR`);
            setAppMovie(response.data.results);
            console.log(response.data.results);
            setIsLoading(false);
        }catch(error){
            console.error('Error:', error);
            setIsLoading(false);
        }
    }
    useEffect(() =>{
        getMovies();
    }, [])

    const moreLoadButton= () =>{
        setVisibleMovies((prevVisible) => prevVisible+moviesPerPage)
    }
    return (
        <div className='pt80 homeWrap'>
            <Upcoming />
            <h2 className='homeTitle'>상영작</h2>

            {
                isLoading ? (<div className='loading'><span>Loading...</span></div>) : (
                    <div className='pt30 flw'>
                       { appMovie.slice(0, visibleMovies).map((amovie) => (
                         <Appmovie id={amovie.id} title={amovie.title} posterPath={amovie.poster_path} date={amovie.release_date}  average={amovie.vote_average}/>
                       ))}
                    </div>
                )
            }


            {
                appMovie.length > visibleMovies && (
                    <div className='moreBtn'>
                        <button onClick={moreLoadButton}>더보기</button>
                    </div>
                )
            }
            


           
        </div>
    );
};

export default Home;