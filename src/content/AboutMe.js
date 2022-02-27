import React from 'react';
import NavBar from '../components/NavBar'
import '../App.css';
 
function AboutMe(props) {
  return (
    <div className="NavigationAndAbout">
        <div className="w3-row w3-animate-left container1">
        <NavBar />
        <div className="w3-half w3-container" style={{height: "700px"}} id="about">
            <div className="w3-padding-64 w3-animate-right w3-center">
            <br></br>
            <h2><strong>Bio</strong></h2>
            <div className="w3-left-align w3-padding-large about-me-container">
              <p>
              Robed Beauvile is finishing his Ph.D. in Mathematics at the University of Pittsburgh.
              He has proficiency in one of the hottest subjects 
              of our time: AI/Machine Learning Models. Furthermore, Robed has 
              experience running and improving complex prediction systems through his 
              work and personal endeavors whose metrics depend on accurate prediction. During his time in 
              academia, Robed discovered important results in Fix Point Theory, Convex Analysis, and 
              Measure Theory.
            </p>
            </div>
            <div className="w3-left-align w3-padding-large about-me-container">
            <p>
              Robed plans to continus the development of Cal-Tutor, an AI-powered math 
              tutor bot. The idea came from the need to make differentiating and integration 
              straightforward and more interactive for students. In Addition, Robed hopes to be a Machine learning developer or engineer 
              for innovative and inspiring product development projects in the near future.
            </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
 
export default AboutMe;