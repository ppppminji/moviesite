import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { SiThemoviedatabase } from "react-icons/si";

const Navbar = () => {
    const activeStyle={
        color:'pink'
    }
    return (
        <nav>
            <div className="logo"><Link to="/"><SiThemoviedatabase /></Link></div>
            <ul>
                <li><NavLink to="/" style={({isActive}) =>(isActive? activeStyle : undefined)}>Home</NavLink></li>
                <li><NavLink to="/movies" style={({isActive}) =>(isActive? activeStyle : undefined)}>Movies</NavLink></li>
                <li><NavLink to="/users" style={({isActive}) =>(isActive? activeStyle : undefined)}>Users</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;