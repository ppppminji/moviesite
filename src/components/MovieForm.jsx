import React, {useState, useRef} from 'react';

const MovieForm = ({addMovie}) => {
    const imputRef=useRef(null);
    const [movieTitle, setMovieTitle]=useState('')
    const [movieYear, setMovieYear]=useState('')
    const [titleError, setTitleError]=useState('')
    const [yearError, setYearError]=useState('')
    
    const resetForm=()=>{
        setMovieTitle('');
        setMovieYear('')
    }

    const resetErrors=()=>{
        setTitleError('')
        setYearError('')
    }

    const validateForm=()=>{
        let validated=true;
        if (!movieTitle){
            setTitleError('영화제목을 입력해주세요');
            validated=false;
        }
        if (!movieTitle){
            setYearError('개봉연도를 입력해주세요');
            validated=false;
        }
        return validated;
    }

    const onSubmit=(e)=>{
        e.preventDefault();       
        if(validateForm()){
            addMovie({
                id:Date.now(),
                title: movieTitle,
                year: movieYear
            })
            imputRef.current.focus()
            resetErrors();
            resetForm();
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={imputRef} type="text" placeholder='영화제목' value={movieTitle} onChange={(e)=>setMovieTitle(e.target.value)}/>
                <div className='errText'>{titleError}</div>
                <input type="text" placeholder='개봉연도' value={movieYear} onChange={(e)=>setMovieYear(e.target.value)}/>
                <div className='errText'>{yearError}</div>
                <button type='submit'>영화추가</button>
            </form>
        </div>
    );
};

export default MovieForm;