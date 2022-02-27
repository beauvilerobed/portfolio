import React from 'react';
import Summary from '../components/Summary'
import '../App.css';
 
function Research(props) {
  return (
    <div className="w3-half w3-container" id="Research">
    <div className="w3-padding-64 w3-animate-right w3-center">
        <h1><strong>Research</strong></h1>
        <h4><strong>Fixed Point Theory and Local Optimization</strong></h4>
                <div id="robedbeauvile" />
                <Summary
                title="I am currently investigating weakly compact convex subsets of $L[0, 1]$ that fails to have the fixed point property for nonexpansive maps, with the help of my thesis advisor, Dr. Christopher J. Lennard, we analysized matrix structures using python, mathematica, and matlab which are representations of linear combinations of simple functinons in L[0,1] which were recursively defined. We use convex analysis and measure theory to constuct copies of L[0,1] in certain minimal invarient under nonexpansive mappings. In addition, I am also studying how the theory of finite normalized tight frames (FNTFs) are developed. An important theorem is the characterization of all FNTFs in terms of the minima of a potential energy function, which was designed to measure the total orthogonality of a Bessel sequence"
                category="Python3, Matlab, matplotlib, numpy"
                />
        </div>
    </div>
  )
}
 
export default Research;