import React from 'react';
import NavBar from '../components/NavBar'
import '../App.css';
 
function AboutMe(props) {
  return (
    <div className="NavigationAndAbout">
        <div className="w3-row w3-animate-left container1">
        <NavBar />
        <div className="w3-half w3-light-grey w3-container" style={{height: "700px"}} id="about">
            <div className="w3-padding-64 w3-animate-right w3-center">
            <h1><strong>About Me</strong></h1>
            <div className="w3-left-align w3-padding-large">
                <p>I am a disciplined and persistent problem-solver, open to new opportunities, and comfortable with being uncomfortable.</p>
                <p>Highly motivated and well-versed in various programming languages, with a master's degree in Applied Mathematics and work experience in academia and tech. </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
 
export default AboutMe;