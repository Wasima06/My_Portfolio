import React from 'react';
import { useState } from "react";
import './form.css';
//import axios from 'axios';

const Form=()=>{
    let[formName,SetFormName]=useState({
        FullName:"",
        Email:"",
        YourNote:"",
    }

    )
    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;  
        
        
        SetFormName((currdata)=>{
            currdata[fieldName]=newValue;
            return {...currdata}
        });
    }

    let handleSubmit=async(event)=>{
        event.preventDefault();
        // try{
        //     await axios.post('http://localhost:5000/submit-form', formName);
            SetFormName({
                FullName:"",
                Email:"",
                YourNote:"",
        });
        alert('Form submitted successfully');
    // }catch(error){
    //     console.error('Error submitting form',error);
    // }
    };
    
    return(
        <div className="container1">
        <form target='_parent' >
            <h3 className='cnt'>Connect with me</h3>
            <label htmlFor="FullName" ><br></br>Name</label><br></br>
            <input placeholder="enter your name"
             type="text"
             value={formName.FullName} 
             onChange={handleInputChange}
             id="fullname"
             name="FullName" required>
             </input>
             <br></br>
             <label htmlFor="Email"><br></br>Email </label><br></br>
            <input placeholder="enter email"
             type="text"
             value={formName.Email} 
             onChange={handleInputChange}
             id="Email"
             name="Email"required>
             </input>
             <br></br>
             <label htmlFor="YourNote"><br></br>Your Note</label><br></br>
            <input placeholder="enter your message"
             type="text"
             value={formName.YourNote} 
             onChange={handleInputChange}
             id="Type your message"
             name="YourNote"
             style={{
                width: '300px',  // Adjust width as needed
                height: '30px',  // Adjust height as needed
                padding: '15px', // Add padding for better spacing
                fontSize: '14px' // Adjust font size if needed
              }} method="POST">
             </input>
             <br></br>
             <br></br>
            <button>Submit</button>
        </form>
        </div>
        
    );
    
}
// alert('your form has been submitted');
// console.log('Form submitted');
export default Form;

