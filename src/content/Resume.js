import React from 'react';
import Thumbnail from '../components/Thumbnail'
import '../App.css';
 
function Resume(props) {
  return (
    <div className="w3-half w3-container" id="resume">
    <div className="w3-padding-64 w3-animate-right w3-center">
        <h1><strong>Resume</strong></h1>

                <img scr={require('../Images/resume.png')} alt="" 
                    style={{width: 100, height: 100}}/>

                <Thumbnail
                link="https://github.com/beauvilerobed/Resume"
                title="Github"
                />
        </div>
    </div>
  )
}
 
export default Resume;