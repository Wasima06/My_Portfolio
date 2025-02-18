import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import End from './components/end.jsx'
import Footer from './components/footer'
import AlertComponent from './components/Alert.jsx'
import fetch from './components/fetch.jsx'

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <AlertComponent/>
      <handleAction/>
      <About/>
      <End/>
      <Footer/>
      <fetch/>
    </div>
  )

}

export default App