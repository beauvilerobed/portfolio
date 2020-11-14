import React from 'react';
import '../App.css';
 
function NavigationBar(props) {
  return (
        <div className="w3-half w3-black w3-container w3-center" style={{height: "700px"}}>
            <div className="w3-padding-64">
            <h1><strong>Robed Beauvile</strong></h1>
            <div id="container" className="container-fluid"></div>
            <h4>Welcome to my personal website</h4>
            </div>
            <div className="w3-padding-64 w3-animate-top">
            <a href="#about" className="w3-button w3-black w3-block w3-hover-light-grey w3-padding-16">About Me</a>
            <a href="#work" className="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16">Projects</a>
            <a href="#extracurricular" className="w3-button w3-black w3-block w3-hover-brown w3-padding-16">Extracurricular</a>
            <a href="#contact" className="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16">Contact</a>
            <a href="#resume" className="w3-button w3-black w3-block w3-hover-light-grey w3-padding-16">Resume</a>
        </div>
    </div>
  )
}
 
export default NavigationBar;