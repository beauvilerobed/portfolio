import React from 'react';
import './App.css';
 
function Summary(props) {
  return (
    <div className="summary">
        <a href={props.link}>
            <div className="summary-title">{props.title}
            <div className="summary-tools"><strong>Languages and Tools:</strong><br></br> {props.category}</div>
            </div>
        </a>
    </div>
  )
}
 
export default Summary;