import React from "react"
import ContactMe from './ContactMe.js'
import AboutMe from './AboutMe.js';
import Projects from './Projects.js'

function HomePage(props) {
  return (
    <div>
        <AboutMe />
        <Projects/>
        <ContactMe />
    </div>
  )
}
 
export default HomePage;