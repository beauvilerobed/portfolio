import React from 'react';  

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
                    <h2 className="tm-color-primary tm-page-title">Robed Beauvil-Owen</h2>
                    <div className="tm-row tm-content-row">
                        <div className="tm-col-6 tm-intro-col-l">
                            <p>
                            I'm a lifelong learner capable of handling ambiguity in an ever-changing environment. I specialize in building robust models, storytelling with data, building software, and providing insight through analytics and machine learning. I also conduct research in the areas of fixed point theory, frames, and generalized frames.                            </p>

                            <p>
                            I am Haitian born and Miami raised. I also love philosophy, breakdancing, and sketching landscapes.
                             </p>
                        </div>
                        <div className="tm-col-6">
                            <div className="tm-mb-80">
                                <strong>
                                Check out my LinkedIn and GitHub for more information!
                                </strong>
                                <ul className="tm-contact-links align-list">
                                    <li>
                                        <a href="https://github.com/beauvilerobed">
                                            <i className="fa-brands fa-github tm-contact-link-icon"></i>
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/robedbeauvile/">
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