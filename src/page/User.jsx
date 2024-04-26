import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
    const {id}=useParams();
    const [User, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res)
            setUser(res.data);
            setLoading(false);
        })
    },[id])
    return (
        <div className='userWrap'>
            <h2>user</h2>
            {
                loading ? (<div>loading...</div>) : (
                <div className='userDdetail'>
                    <div>이름 : {User.name}</div>
                    <div>이메일 : {User.email}</div>
                    <div>전화번호 : {User.phone}</div>
                    <div>웹사이트 : {User.website}</div>
                </div>
                )
            }
        </div>
    );
};

export default User;