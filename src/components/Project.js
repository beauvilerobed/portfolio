import React from 'react';
 
function Project(props) {
  return (
    <div className="project">
      <div className="center-div">
        <div id={props.pictureId} className="image-size"/>
          <div className="summary">
          <h3>{props.headline}</h3>
          <h2>
          <a href={props.link} className="et-white"><button className="tm-btn"><strong>GitHub</strong></button></a>
          </h2>
          <p> <strong className={(props.dontShowSummary) ? "hide-this" : ""}>Project includes:</strong>{props.summary} <br></br><strong className={(props.dontShowTools) ? "hide-this" : ""}>Tools:</strong>{props.tools}</p>
          </div>
      </div>
    </div> 
  )
}
 
export default Project;