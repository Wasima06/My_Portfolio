import React from 'react';
import './Hero.css'
//import image from '../../assets/image.svg'; <img src={image} alt=""/>

const Hero=()=>{
    return(
            <div className='hero-action'>
                  <h1 className='name'>Wasima Syed</h1>
                <div className='hero-connect'><a href="#form" method="POST" target='_self' className='hero-connect'>Connect With me </a>
                </div>
                    <div className='hero-resume'><a href="https://drive.google.com/file/d/1BTwq4b_LZK806GmwBXcz81QeExlTWOIt/view?usp=drive_link"
                     target="_blank" class="resume-button">View Resume</a>
                    </div>
                    </div>
    )
}
export default Hero