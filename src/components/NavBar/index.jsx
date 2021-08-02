import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={""} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;