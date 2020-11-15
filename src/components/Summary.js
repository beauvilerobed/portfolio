import React from 'react';
import '../App.css';
import '../App.scss'
 
function Summary(props) {
  return (
    <div>
      <a href={props.link} className="github-link" data-hover="GITHUB"><div className="github-link-filler"/></a>
      <div className="summary">
              <div className="summary-title"><p>{props.title}</p></div>
              <div className="summary-tools"><p><strong>Languages and Tools:</strong></p></div>
              <div><p>{props.category}</p></div>

      </div>
    </div>
  )
}
 
export default Summary;