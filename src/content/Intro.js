import React from 'react';  
import Latex from 'react-latex';

class Intro extends React.Component { 
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    } 

    handleClick = () =>  {
        this.props.setStateOfParent("0");
    }
    

    render() {  
    return (
    <div className="popup" style={(this.props.show) ? {display: "block"} : {display: "none"}} >  
        <div className="popup_open"> 
        <div id="gallery" className="tm-bg-gray set-hidden-overflow">
        <div id="intro">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <div className="tm-row tm-intro-row tm-color-light-gray">
                <img src={require("../img/robed_pic.jpg")} alt="" className="tm-intro-img"></img>

                <div className="tm-col tm-intro-pad">
                    <h2 className="tm-color-primary tm-page-title">Introducing Robed Beauvile</h2>
                    <div className="tm-row tm-content-row">
                        <div className="tm-col-6 tm-intro-col-l">
                            <p>
                            I am currently a graduate student at University of Pittsburgh, In pure Mathematics, I mainly work with weakly compact convex subsets of <Latex>$L^1[0,1]$</Latex> that fail the fixed point property for nonexpansive mapping. In Applied Mathematics, I moslty investigate the development of finite normalized tight frames in Hilbert Spaces and <Latex>$R^k$</Latex>, with a particular focus on their connections in deep learning and sparse approximation.
                            </p>

                            <p>
                            I am Haitian born and Miami raised, and naturally I love philosophy, breakdancing, and sketching landscapes.

                             </p>
                        </div>
                        <div className="tm-col-6">
                            <p>
                            Outside of research and academics, I plan to continue the development of Cal-Tutor, an AI-powered calculus tutor. The idea came from my need to make differentiating and integration straightforward and more interactive for students. In Addition, I intend on becoming a Machine Learning developer or engineer for innovative and inspiring product development projects soon.

                            </p>
                            <div className="tm-mb-80">
                                <strong>
                                Check out my linkedin and github for more information!
                                </strong>
                                <ul className="tm-contact-links align-list">
                                    <li>
                                        <a href="https://github.com/beauvilerobed">
                                            <i className="fa-brands fa-github tm-contact-link-icon"></i>
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/robed-beauvil/">
                                            <i className="fa-brands fa-linkedin tm-contact-link-icon"></i>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>  
                            </div>                     
                        </div>
                    </div>
                </div>                
            </div> 
        </div>
        </div>
    </div>  
</div>  
);  
}  
}  
export default Intro;