import React from 'react';
 
function Project(props) {
  return (
    <div className="project">
          <div id={props.pictureId} className="image-size"/>
        <div className="summary">
        <h3>{props.headline}</h3>
        <strong><a href={props.link}>GitHub</a></strong>
        <p> {props.summary} <br></br><strong>Tools:</strong>{props.tools}</p>
        </div>

    </div> 
  )
}
 
export default Project;