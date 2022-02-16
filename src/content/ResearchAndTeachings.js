import React from 'react';
import Thumbnail from '../components/Thumbnail'
import '../App.css';
 
function ResearchAndTeachings(props) {
  return (
    <div className="w3-half w3-container" id="ResearchAndTeachings">
    <div className="w3-padding-64 w3-animate-right w3-center">
        <h1><strong>Research and Teachings</strong></h1>
                <div id="robedbeauvile" />
                <Thumbnail
                />
        </div>
    </div>
  )
}
 
export default ResearchAndTeachings;