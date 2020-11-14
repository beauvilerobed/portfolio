import React from 'react';
import Resume from './Resume.js'
import '../App.css';
 
function ContactMe(props) {
  return (
    <div className="w3-row w3-animate-right container3" id="contact">
    <div className="w3-half w3-dark-grey w3-container w3-center">
        <div className="w3-padding-64 w3-animate-right">
        <h1><strong>Contact Me</strong></h1>
        </div>
        <div className="w3-padding-64 w3-animate-top">
        <p>..for a cup of coffee, or whatever.</p>
        <p>(850) 354-0565</p>
        <p>robedbeauvile001@gmail.com</p>
        </div>
    </div>
    <Resume />
    </div>
  )
}
 
export default ContactMe;