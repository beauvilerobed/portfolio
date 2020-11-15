import React from 'react';
import '../App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="project-title">
          <p><strong>{props.title}</strong></p>
        <div className="project-category"><p>{props.category}</p></div>
        </div>
            </a>
    </div>
  )
}
 
export default Thumbnail;