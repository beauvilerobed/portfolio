import React from 'react';
import Thumbnail from '../components/Thumbnail'
import '../App.css';
 
function Research(props) {
  return (
    <div className="w3-half w3-container" id="Research">
    <div className="w3-padding-64 w3-animate-right w3-center">
        <h1><strong>Research</strong></h1>
                <div id="robedbeauvile" />
                <Thumbnail
                title="I am currently investigating weakly compact convex subsets of $L[0, 1]$ that fails to have the fixed point property for nonexpansive maps. Also, studying how the theory of finite normalized tight frames (FNTFs) are developed. An important theorem is the characterization of all FNTFs in terms of the minima of a potential energy function, which was designed to measure the total orthogonality of a Bessel sequence"
                category="Fixed Point Theory and Local Optimization"
                />
        </div>
    </div>
  )
}
 
export default Research;