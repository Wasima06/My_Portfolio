import React from 'react';
import './Hero.css'
//import image from '../../assets/image.svg'; <img src={image} alt=""/>

const Hero=()=>{
    return(
        <div className='hero'>
            <i><h1><span>Hii all,<br></br>I am Syed Wasima..</span>
            <br></br>An Enthusiastic FullStack Developer</h1></i>
            <p><i>I am an Engineering Student in the field of Computer Science <br>
            </br> having a good Knowledge on both Frontend and Backend Technologies</i></p>
            <div className='hero-action'>
                <div className='hero-connect'><a href="#form" target='_self' className='hero-connect'>Connect With me </a>
                </div>
                    <div className='hero-resume'><a href="https://drive.google.com/file/d/1BTwq4b_LZK806GmwBXcz81QeExlTWOIt/view?usp=drive_link"
                     target="_blank" class="resume-button">View Resume</a>
                    </div>
            </div>
        </div>
    )
}
export default Hero