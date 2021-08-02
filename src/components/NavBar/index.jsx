import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a className="navbar-brand">
                    <NavLink exact to="/" >Home</NavLink>
                </a>
                <a className="navbar-brand">
                    <NavLink to="/favs" >Favoritas</NavLink>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;