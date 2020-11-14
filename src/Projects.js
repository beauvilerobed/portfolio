import React from "react"
import Thumbnail from './Thumbnail.js';
import Summary from './Summary.js';
import Icon from './Images/ThumbnailImage';
import sFITNESS from './Images/sFITNESS.jpg'
import calc_bot from './Images/calc_bot.png'
import learnSQL from './Images/learnSQL.png'
import learnSQL2 from './Images/learnSQL2.png'
import TWITTY from './Images/TWITTY.png'
import resume from './Images/resume.png' 

function Projects(props) {
  return (
    <div>
       {/* <!-- First Grid: Logo & About --> */}
        <div className="w3-row w3-animate-right container1">
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
        <div className="w3-half w3-light-grey w3-container" style={{height: "700px"}} id="about">
            <div className="w3-padding-64 w3-animate-left w3-center">
            <h1><strong>About Me</strong></h1>
            <div className="w3-left-align w3-padding-large">
                <p>I am a disciplined and persistent problem-solver, open to new opportunities, and comfortable with being uncomfortable.</p>
                <p>Highly motivated and well-versed in various programming languages, with a master's degree in Applied Mathematics and work experience in academia and tech. </p>
            </div>
            </div>
        </div>
        </div>

        {/* /<!-- Second Grid: Work & Resume --> */}
        <div className="w3-row w3-animate-left container2">
        <div className="w3-half w3-blue-grey and w3-center" id="work">
            <div className="w3-padding-64 w3-animate-right">
                <h1><strong>Projects</strong></h1>

                    <Icon icon={sFITNESS} />
                
                    <Thumbnail 
                    link="http://sfitnessco.com"
                    title="sFITNESS"
                    category="Fitness and Wellness App"
                    />

                    <Summary
                    link="https://github.com/beauvilerobed/sFITNESS"
                    title="sFITNESS is an automated personal trainer that wants to make exercise  and wellness simple.
                    Health  and fitness should not need to be difficult  and it should be sustainable."
                    category="PHP, MySQL, CSS, Javascript and phpMyAdmin, React, MAMP, Atom, Bootstrap, JSON"
                    />
                    
                    <Icon icon={calc_bot} />

                    <Thumbnail
                    link="https://calctutor123.herokuapp.com/"
                    title="Calculus-Calculator"
                    category="E-learning App"
                    />

                    <Summary
                    link="https://github.com/beauvilerobed/calctutor123"
                    title="Artificial math tutor that helps you find derivatives  and indefinite integrals through a step-by-step process with optional conversation (if you are not sure about any of the steps."
                    category="Python3, HTML/CSS, Javascript  and ,Django, Bootstrap, D3.js, Keras, NLTK, Tensorflow, JSON, Pickle Sympy, Numpy"
                    />

                    <Icon icon={TWITTY} />
                    
                    <Thumbnail
                    link="https://twityclone.herokuapp.com"
                    title="TWITY"
                    category=" Microblogging App"
                    />

                    <Summary
                    link="https://github.com/beauvilerobed/twity-app"
                    title="Allow users to exchange small elements of content such as short sentences, short posts, quick thoughts ranging from followers to everyone."
                    category="Python3, HTML/CSS, Javascript and Flask, Bootstrap, Jinja2, SQLAlchemy"
                    />

            <p><strong>Just call me awesome!</strong></p>
        </div>
        </div>
        <div className="w3-half w3-brown w3-container w3-center" id="extracurricular">
            <div className="w3-padding-64 w3-animate-right">
            <h1><strong>Extra Extra... Read all about it!</strong></h1>

                    <Icon icon={learnSQL} />

                    <Thumbnail
                    link="https://pitt.zoom.us/rec/play/u5R_dbz--Do3Gd2X4gSDU_R9W9W_LPqs1SNM__IOzEfgW3ZRZAWgY7QbM7ZsjCo61KohPPaTmdLMf2oU?startTime=1588968239000&_x_zm_rtaid=bp79UOdnQVuamy3OCN4kYA.1590750115444.5c8cc25b682ee9418e7b3c1b891685f8&_x_zm_rhtaid=897"
                    title="Let’s Learn SQL through Set Theory! Part 1"
                    category="Webinar"
                    />

                    <Summary
                    link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                    title="Now, I know what you’re asking; what the heck is SQL? It stand s for Structured Query Language. It’s a stand ard computer lan- guage used for accessing  and manipulating databases. Wait! Manipulate databases? Computer language? I thought this was a math talk! Don’t worry this is a math talk and sort of. In this talk we will be learning the basics of a computer language (SQL) using mathematics (set theory). Whether you know some computer languages or none at all, it’s always fun to learn one, so let’s do that!"
                    category="SQL and Powerpoint, Zoom"
                    />

                    <Icon icon={learnSQL2} />

                    <Thumbnail
                    link="https://pitt.zoom.us/rec/play/vpB5Ju6hrzI3HNadswSDBqctW9W8fams0yEa8vYPmk6wB3gGO1H0N7pHYbBk9jUj4awd6dVPRweaSm8y?startTime=1588795106000&_x_zm_rtaid=bp79UOdnQVuamy3OCN4kYA.1590750115444.5c8cc25b682ee9418e7b3c1b891685f8&_x_zm_rhtaid=897/"
                    title="Let's Learn SQL through Set Theory! Part 2 Application "
                    category="Webinar"
                    />

                    <Summary
                    link="https://github.com/beauvilerobed/Lets_learn_sql_webinar_1_and_2"
                    title="One of the best ways to really learn about something is having a concrete example (or counter- example) of that something. In this talk we will walkthrough a con- crete example. We will see the ba- sics of SQL in action on a newly designed database  and other awe- some stuff that I won’t speak of at this moment. You’ll just have to come  and see for yourself."
                    category="SQL, PHP and Powerpoint, Zoom, Mamp, phpMyAdmin"
                    />
            </div>
        </div>
        </div>

        {/* <!-- Third Grid: Swing By & Contact --> */}
        <div className="w3-row w3-animate-right container3" id="contact">
        <div className="w3-half w3-dark-grey w3-container w3-center">
            <div className="w3-padding-64 w3-animate-right">
            <h1><strong>Contact</strong></h1>
            </div>
            <div className="w3-padding-64 w3-animate-left">
            <p>..for a cup of coffee, or whatever.</p>
            <p>Orlando, FL</p>
            <p>(850) 354-0565</p>
            <p>robedbeauvile001@gmail.com</p>
            </div>
        </div>
        <div className="w3-half w3-light-grey w3-container" id="resume">
        <div className="w3-padding-64 w3-animate-left w3-center">
            <h1><strong>Resume</strong></h1>

                    <Icon icon={resume} />

                    <Thumbnail
                    link="https://github.com/beauvilerobed/Robed-Beauvile/blob/master/Robed%20Beauvil2.pdf"
                    title="See in Github"
                    />
            </div>
        </div>
        </div>
    </div>
  )
}
 
export default Projects;