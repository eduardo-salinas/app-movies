import React from 'react';
import StyledAbout from './styled';
import about from '../../assets/about.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <StyledAbout>
            <Card border="danger" style={{ width: '50rem' }}>
                <Card.Body>
                <Card.Title><b>Cinema App</b></Card.Title> <br />
                    <Card.Text>
                        💻This website was created for practical purposes.
                        React, Redux and Bootstrap was used to create it. 📚
                        <br /><br />
                        <i> Website created by <a className="port" rel="noreferrer" target="_blank" href="https://www.eduardo-salinas.com">Eduardo Salinas</a> 👈</i>
                    </Card.Text>
                    <img src={about} alt="about" />
                </Card.Body>
            </Card>
        </StyledAbout>

    )
};


export default About;