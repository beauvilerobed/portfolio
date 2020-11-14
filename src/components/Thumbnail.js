import React from 'react';
import '../App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="project-title"><strong>{props.title}</strong>
        <div className="project-category">{props.category}</div>
        </div>
            </a>
    </div>
  )
}
 
export default Thumbnail;