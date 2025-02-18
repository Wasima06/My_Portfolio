import React from 'react';
import './About.css';
//import <img src={}alt=""/>
const About=()=>{
    return(
        <div className='about'>
            <div id='about-right'>
        <h2 >About Me</h2><br></br></div>
        <div className='about-right'>
            <div className='about-para'>
                <p>Hi, I am Syed Wasima , currently pursuing my Bachelor's degree at R.V Institute of Technology,<br></br>
as an Undergraduate Student in the CSE [Artificial Intelligence & Machine Learning] stream, I enjoy <br></br>
building Websites ,learning new languages and exploring new things .
</p></div>
            <div class="icons">
                <a href="https://github.com/Wasima06" target="_blank">
                <i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/wasima-syed-08b048251/" target="_blank">
                <i class="fa-brands fa-linkedin"></i></a>
                </div>
    <div className="about-skill" id='about-skills'></div>
        <h3><button class="skills">Skills</button></h3><br></br>
        <button>HTML5 & CSS3</button>
        <button>JavaScript</button>
        <button>NodeJS</button>
        <button>ExpressJS</button>
        <button>ReactJS</button>
        <button>MongoDB</button>
        <button>SQL</button>
        <button>Python</button>
         <br></br>
         <br></br>
<h3><button class="projects" id="projects">My projects</button></h3><br></br>
<br></br>
    <div className="box-container">
        <h3>My Portfolio</h3>
            <p>This is my Personal portfolio<br></br>made by using the Fullstack technologiesto showcase<br></br> my Skills,projects and Virtual 
            internships which i have done in my career journey
        </p>
        <button><a href="https://github.com/Wasima06/Simon-says.git" target="_blank" className='view'>View</a></button>
    </div>
    <div className="box-container1">
        <h3>Quora Posts</h3>
            <p>It is a mini project made by using<br></br>both Frontend and Backend technologies 
 by using REST Framework and EJS for Templating</p>
    <button><a href='https://github.com/Wasima06/Quora-post.git'target="_blank" className='view'>View</a></button>
    </div>
    <div className="box-container2">
        <h3>ChatDB</h3>
        <p>It is a mini project done by using<br></br>
        the MongoDB with ejs templating.For the UI: <br></br>
        HTML CSS JavaScript<br></br>and for Backend:<br></br>
        NodeJS & ExpressJS using REST API</p>
    <button><a href="https://github.com/Wasima06/ChatDB.git"target="_blank" className='view'>View</a></button>
    </div>
    <div className="box-container3">
        <h3>WhetherApp</h3>
            <p>It is a mini project by using
            ReactJS<br></br>
A weather prediction app that takes<br></br> a city as input and displays the current weather conditions.
</p>
    <button><a href="#"target="_blank" className='view'>View</a></button>
    </div>
    </div>
    <div className="internships" id='internships'>
    <h3><button class="Internship">My Internships</button></h3><br></br>
    <div className="flex-box">
        <div className='Certificate1'>
            <h3>Web Development Intern</h3>
            <p>Completed a Virtual Internship in the field of Web Development at CodSoft.
            Got Hands-on experience in the field of Frontend development, by completing the tasks assigned to me
            </p>
            <button><a href="https://drive.google.com/file/d/1qVO5cdbc75td4AJYhP01P6sj5o4_ZiLX/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
        <div className="certi2">
            <h3>Salesforce Development Intern</h3>
            <p>Completed salesforce Fundamentals and Organizational Setup.
                Done with VS Code Setup and CLI Setup.
                Achieved the module of Developer Super set</p>
                <button><a href="https://drive.google.com/file/d/13-JfmuRMcCpugKXEKwWuQq9Ugb-4CWAc/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
        <div className="certificate3">
            <h3>ChatGPT/GenerativeAI Intern</h3>
            <p>Explored ChatGPT it's Functionality, Strengths, and Limitations.
                Learned Practical Applications of ChatGPT.
                Built a Chatbot with Flask and OpenAI</p>
                <button><a href="https://drive.google.com/file/d/1eGSoTqW0hxNQLVtzLKpGD8B4sotchGTl/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
        <div className="certificate4">
            <h3>Software Engineering Intern</h3>
            <p>Completed the Virtual Internship with kafka Integration.Gained practical knowledge in REST API</p>
            <button><a href="https://drive.google.com/file/d/1RJsbGtOx1GWsyH66qjN676-u84telL2l/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
    </div>
    </div>
        </div>
        
    )
}

export default About