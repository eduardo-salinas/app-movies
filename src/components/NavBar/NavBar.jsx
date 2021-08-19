import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNav from './styled';
import logo from '../../assets/icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <StyledNav>
            <Navbar variant="dark" className="navbar">
                <Container className="cont">
                    <Navbar.Brand>
                        <NavLink className="link" to="/">
                            <img src={logo} alt="logo" width="35" height="30" className="d-inline-block align-text-top" />
                            Cinema
                        </NavLink>
                    </Navbar.Brand>
                    <Nav.Link>
                        <NavLink className="link" to="/" >Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink className="link" to="/favs" >Favorites</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink className="link" to="/about" >About</NavLink>
                    </Nav.Link>
                </Container>
            </Navbar>
        </StyledNav>

    )
};


export default NavBar;