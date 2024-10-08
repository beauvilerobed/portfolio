import React from 'react';  

class ContactMe extends React.Component {  
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    } 

    handleClick = () =>  {
        this.props.setStateOfParent("0");
    }

    render() {  
    return (
    <div className='popup' style={(this.props.show) ? {display: "block"} : {display: "none"}} >  
    <div className='popup_open'> 
    <div id="contact" className="tm-bg-gray set-hidden-overflow">
            <span className="tm-close-popup" onClick={this.handleClick}>
                Return Home
                <i className="fas fa-times"></i>
            </span>
            <h2 className="tm-color-primary">Contact Me</h2>
                    <ul className="tm-contact-links align-list">
                        <li>
                            <a href="mailto:Robedbeauvil@gmail.com">
                                <i className="fas fa-at tm-contact-link-icon"></i>
                                Robedbeauvil@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/beauvilerobed">
                                <i className="fa-brands fa-github tm-contact-link-icon"></i>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/robedbeauvile">
                                <i className="fa-brands fa-linkedin tm-contact-link-icon"></i>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                    <h7 className="tm-color-grey">Let's take a moment to commemorate the pictures that were used for this website...</h7>
                    <div id="cf">
                        <img src={require("../img/calc_bot.png")} alt=""/>
                        <img src={require("../img/robed_pic_work.jpg")} alt=""/>
                        <img src={require("../img/automobiles.jpeg")} alt=""/>
                        <img src={require("../img/bike_sharing.png")} alt=""/>
                        <img src={require("../img/cNN.png")} alt=""/>
                        <img src={require("../img/startbucks.avif")} alt=""/>
                        <img src={require("../img/DSA.png")} alt=""/>
                        <img src={require("../img/hangman.jpeg")} alt=""/>
                        <img src={require("../img/learnSQL.png")} alt=""/>
                        <img src={require("../img/learnSQL2.png")} alt=""/>
                        <img src={require("../img/logo2.png")} alt=""/>
                        <img src={require("../img/microblog.jpeg")} alt=""/>
                        <img src={require("../img/ml_workflow.png")} alt=""/>
                        <img src={require("../img/operationalize.png")} alt=""/>
                        <img src={require("../img/search_image.png")} alt=""/>
                        <img src={require("../img/sFITNESS.jpeg")} alt=""/>
                        <img src={require("../img/robed_pic.jpg")} alt=""/>
                    </div>
        </div>
    </div> 
</div>  
);  
}  
}  
export default ContactMe;