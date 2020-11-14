import React from 'react';
import '../App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
        <div className="project-title">
          <strong>{props.title}</strong>
        <div className="project-category">{props.category}</div>
        </div>
    </div>
  )
}
 
export default Thumbnail;