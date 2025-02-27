import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Info from './components/Hero/Info.jsx'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import End from './components/footer/end.jsx'
import Footer from './components/footer/footer.jsx'
import ContactForm from './components/Contact form/Contact.jsx'
import DescriptionAlerts from './components/Alerts/Alert.jsx'
//import CustomizedSwitches from './components/Customization/CustomizedSwitches.jsx'
import './App.css';
const App=()=>{
  return(
    <div>
      <Navbar/>
      <DescriptionAlerts/>
      <Info/>
      <Hero/>
      <handleAction/>
      <About/>
      <ContactForm/>
      <End/>
      <Footer/>
    </div>
  )

}

export default App