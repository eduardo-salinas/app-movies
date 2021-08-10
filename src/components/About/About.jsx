import React from 'react';
import StyledAbout from './styled';
import about from '../../assets/about.png'

const About = () => {
    return (
        <StyledAbout>
            <div className="about">
                <h5><b>Cinema App</b></h5> <br/>
                <p>
                    💻This website was created for practical purposes.
                    React, Redux and Bootstrap was used to create it. 📚
                    <br /><br />                    
                   <i> Website created by <a className="port" rel="noreferrer" target="_blank" href="https://www.eduardo-salinas.com">Eduardo Salinas</a> 👈</i>
                </p>
                <img src={about} alt="about" />
            </div>
        </StyledAbout>

    )
};


export default About;