import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNav from './styled';

const NavBar = () => {
    return (
        <StyledNav>
            <nav class="navbar navbar-dark">
                <div class="container-fluid">
                        <NavLink className="navbar-brand" exact to="/" >Home</NavLink>                  
                        <NavLink className="navbar-brand" to="/favs" >Favoritas</NavLink>
                </div>
            </nav>
        </StyledNav>
    )
};

export default NavBar;