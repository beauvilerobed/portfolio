import React from 'react';  


class Research extends React.Component {  
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    } 

    handleClick = () =>  {
        this.props.setStateOfParent("0");
    }

    render() {  
    return (
<   div className='popup' style={(this.props.show) ? {display: "block"} : {display: "none"}} >  
    <div className='popup_open'> 
    <div className="tm-bg-gray set-hidden-overflow">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <div>
                <h2 className="tm-color-primary tm-page-title tm-text-center">Research</h2>
                <div id="container">
                    <div id="wrapper">
                        <div id="content">
                                    <h3><strong>Fixed Point Theory</strong></h3>
                                        <p>
                                        In 1981, Dale Alspach produced the first example of a non-expansive mapping T
                                            on a weakly compact convex subset of a Banach space that is fixed point-free. Using Zorn’s
                                            lemma, there exists a minimally weak compact, convex subset of which is T-invariant and
                                            fixed point free. I investigate special closed linear spans that "should" contains a copy of
                                            Lebesgue integrable functions on the unit interval.
                                            of G-frames in terms of G-Riesz bases.                                        
                                        </p>
                                    <h3><strong>Frame and Generalized Frames</strong></h3>
                                        <p>
                                        Wenchang Sun introduced
                                            generalized frames and included ordinary frames. I currently use many ideas from Operator
                                            Theory to show characterizations of Frames in terms of Riesz bases and characterizations
                                            of G-frames in terms of G-Riesz bases.                              
                                        </p>
                                        <h3><strong>Local Optimization</strong></h3>
                                        <p>I am also studying how the theory of finite normalized tight frames (FNTFs) is developed in Hilbert 
                                            spaces (both finite and infinite-dimensional). An influential theorem is the characterization of all 
                                            FNTFs in terms of the minima of a potential energy function. This was designed to measure the total 
                                            orthogonality of a Bessel sequence. I am particularly interested in their connections in Deep Learning 
                                            and Sparse Approximation. One fascinating connection is the deep frame potential: it's a measure of 
                                            coherence that is approximately related to representation stability but has minimizers based solely on 
                                            the network structure.                            
                                        </p>
                                </div>
                            </div>
                            <div id="navigation">
                                <h3><strong>Key Words</strong></h3>
                                <ul>
                                    <li>Weakly Compact</li>
                                    <li>Non-Expansive Mappings</li>
                                    <li>Asymptotically Isometric Copy</li>
                                    <li>Convex subsets</li>
                                    <li>Deep Learning</li>
                                    <li>Deep Frames</li>
                                    <li>Convex subsets</li>
                                    <li>Minima</li>
                                    <li>Frame Potential</li>
                                    <li>Finite Normalized Tight Frames</li>
                                    <li>Bessel Sequences</li>
                                    <li>Sparse Approximation</li>
                                    <li>Potential Energy Function</li>
                                    <li>Minimizers</li>
                                </ul>
                            </div>
                    </div> 
            </div>            
        </div>
    </div>  
</div>  
);  
}  
}  
export default Research;