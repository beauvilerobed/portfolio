import React from 'react';
 
function Project(props) {
  return (
    <div className="project">
      <div className="center-div">
        <div id={props.pictureId} className="image-size"/>
          <div className="summary">
          <h3>{props.headline}</h3>
          <h2>
          <strong><button  className="tm-btn" href={props.link}>GitHub</button></strong>
          </h2>
          <p> {props.summary} <br></br><strong>Tools:</strong>{props.tools}</p>
          </div>
      </div>
    </div> 
  )
}
 
export default Project;