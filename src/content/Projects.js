import React from 'react';
import '../App.css';
import Thumbnail from '../components/Thumbnail.js';
import Summary from '../components/Summary.js';
import Extra from './Extra'
 
function Projects(props) {
  return (
    <div className="w3-row w3-animate-right container2">
    <div className="w3-half and w3-center" id="work">
        <div className="w3-padding-64 w3-animate-right">
            <h1><strong>Projects</strong></h1>
                
                <div id="calbot"/>
                <Thumbnail
                title="Calculus-Calculator"
                category="E-learning App"
                />
                <Summary
                link="https://github.com/beauvilerobed/calctutor123"
                title="Artificial math tutor that helps you find derivatives  and indefinite integrals through a step-by-step process with optional c."
                category="Python3, HTML/CSS, Javascript, Django, Bootstrap, D3.js, Keras, NLTK, Tensorflow, JSON, Sympy, Numpy"
                />

                <div id="TWITTY"/>
                <Thumbnail
                title="TWITY"
                category=" Microblogging App"
                />
                <Summary
                link="https://github.com/beauvilerobed/twity-app"
                title="Allow users to exchange small elements of content such as short sentences, short posts, quick thoughts ranging from followers to everyone."
                category="Python3, HTML/CSS, Javascript, Flask, Bootstrap, Jinja2, SQLAlchemy"
                />

                <div id="sFITNESS" />
                <Thumbnail 
                title="sFITNESS"
                category="Fitness and Wellness App"
                />
                <Summary
                link="https://github.com/beauvilerobed/sFITNESS"
                title="sFITNESS is an automated personal trainer that wants to make exercise  and wellness simple.
                Health  and fitness should not need to be difficult  and it should be sustainable."
                category="PHP, MySQL, CSS, Javascript, phpMyAdmin, React, MAMP, Bootstrap"
                />
            <p><strong>Just call me awesome!</strong></p>
    </div>
    </div>
        <Extra />
    </div>
  )
}
 
export default Projects;