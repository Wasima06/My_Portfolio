import React from 'react'

const Interns=()=>{
    return(
        <div className="internships" id='internships'method='GET' target='_blank'>
    <h3><button class="Internship">My Internships</button></h3><br></br>
    <div className="flex-box">
        <div className='Certificate1'>
            <h3>Web Development Intern</h3>
            <p><i>Completed a Virtual Internship in the field of Web Development at CodSoft.
            Got Hands-on experience in the field of Frontend development, by completing the tasks assigned to me</i>
            </p>
            <button><a href="https://drive.google.com/file/d/1qVO5cdbc75td4AJYhP01P6sj5o4_ZiLX/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
        <div className="certi2">
            <h3>Salesforce Development Intern</h3>
            <p><i>Completed salesforce Fundamentals and Organizational Setup.
                Done with VS Code Setup and CLI Setup.
                Achieved the module of Developer Super set</i></p>
                <button><a href="https://drive.google.com/file/d/13-JfmuRMcCpugKXEKwWuQq9Ugb-4CWAc/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
        <div className="certificate3">
            <h3>ChatGPT/GenerativeAI Intern</h3>
            <p><i>Explored ChatGPT it's Functionality, Strengths, and Limitations.
                Learned Practical Applications of ChatGPT.
                Built a Chatbot with Flask and OpenAI</i></p>
                <button><a href="https://drive.google.com/file/d/1eGSoTqW0hxNQLVtzLKpGD8B4sotchGTl/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
        <div className="certificate4">
            <h3>Software Engineering Intern</h3>
            <p><i>Completed the Virtual Internship with kafka Integration.Gained practical knowledge in REST API </i></p>
            <button><a href="https://drive.google.com/file/d/1RJsbGtOx1GWsyH66qjN676-u84telL2l/view?usp=drive_link"target="_blank" className='certi'>View Certificate</a></button>
        </div>
    </div>
    </div>
    )
}

export default Interns;