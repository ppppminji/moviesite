import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            setUsers(response.data)
        })
    }, [])

    return (
        <div className='usersWrap'>
            <h2>Users page</h2>
            {
                users.map(user=>{
                    return(
                        <div className="card" key={user.id}>
                            <div className="card-body">
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </div>
                        </div>
                    )
                })
             }           
        </div>
    );
};

export default Users;