import React from 'react';
import '../App.css';
import '../App.scss'
 
function Summary(props) {
  return (
    <div>
      <a href={props.link} className="github-link" data-hover="GITHUB"><div className="github-link-filler"/></a>
      <div className="summary">
              <div className="summary-title">{props.title}</div>
              <div className="summary-tools"><strong>Languages and Tools:</strong>{props.category}</div>

      </div>
    </div>
  )
}
 
export default Summary;