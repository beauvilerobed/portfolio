import React from 'react';
import Thumbnail from '../components/Thumbnail'
import Icon from '../Images/ThumbnailImage'
import resume from '../Images/resume.png'
import '../App.css';
 
function Resume(props) {
  return (
    <div className="w3-half w3-container" id="resume">
    <div className="w3-padding-64 w3-animate-right w3-center">
        <h1><strong>Resume</strong></h1>

                <Icon icon={resume} />

                <Thumbnail
                link="https://github.com/beauvilerobed/Robed-Beauvile/blob/master/Robed%20Beauvil2.pdf"
                title="See in Github"
                />
        </div>
    </div>
  )
}
 
export default Resume;