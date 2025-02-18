import React from 'react'
import "./Navbar.css";
//import logo from '@/assets/logo.svg';

const Navbar=()=>{
  return(
    <header>
    <div className='navbar'>
      <ul className='nav-menu'>
        <li> <button className='H'><a href="#" target='_self' className='H'>Home</a></button></li>
        <li><button className='about-right1'><a href="#about-right" className='about-right1'target='_self'>About me</a></button></li>
        <li> <button className='H2'><a href="#form" target='_self' className='H2'>Contact</a></button></li>
        <li><button className='H3'><a href="#projects" target='_self'className='H3'>Projects</a></button></li>
        <li> <button className='H4'><a href="#internships"target='_self'className='H4'>Internships</a></button></li>
      </ul>
      <div className="nav-connect"><a href="#form" target='_self' className='nav-connect1'>Connect with me</a>
      </div>
    </div>
    </header>
  )
}

export default Navbar;