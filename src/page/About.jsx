import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const About = () => {
    const APIKEY=process.env.REACT_APP_TMDB_API_KEY;
    const {idx} = useParams();
    const [loading, setLoading] = useState(true);
    const [m, setAppm] = useState(null);

    useEffect(()=>{
        /* axios.get(`https://api.themoviedb.org/3/movie/${idx}?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`).then(res=>{ */
        axios.get(`https://api.themoviedb.org/3/movie/${idx}?api_key=${APIKEY}&language=ko-KR`).then(res=>{
            console.log(res)
            setAppm(res.data);
            setLoading(false)
        })
    }, [idx])

    return (
        <div className='aboutWrap'>
           {
            loading ? (<div>로딩중</div>) : (<div>
                <div className="aboutuser">
                    <div className="box">
                        <img src={`http://image.tmdb.org/t/p/original/${m.poster_path}`} alt={m.title} />
                        <div className="overAndaverage">
                            <div className="overview">{m.overview==''?(m.original_title): (m.overview)}</div>
                            <div className="average">평점 : {m.vote_average}</div>
                        </div>
                    </div>
                </div>
            </div>)
           }
        </div>
    );
};

export default About;