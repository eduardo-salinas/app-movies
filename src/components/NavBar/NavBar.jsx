import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNav from './styled';
import logo from '../../assets/icon.png'

const NavBar = () => {
    return (
        <StyledNav>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" width="35" height="30" className="d-inline-block align-text-top" />

                        Cinema
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="navbar-brand" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" to="/favs" >Favorites</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navbar-brand" to="/about" >About</NavLink>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        </StyledNav>

    )
};


export default NavBar;