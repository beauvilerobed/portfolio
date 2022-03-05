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
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <h2 className="tm-color-primary">Contact Me</h2>
                    <ul className="tm-contact-links align-list">
                        <li>
                            <a href="tel:8503540565">
                                <i className="fas fa-phone tm-contact-link-icon"></i>
                                Tel: 850-354-0565
                            </a>
                        </li>
                        <li>
                            <a href="mailto:Robedbeauvile@gmail.com">
                                <i className="fas fa-at tm-contact-link-icon"></i>
                                Robedbeauvile@gmail.com
                            </a>
                        </li>
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

                    <div id="cf">
                        <img src={require("../img/calc_bot.png")} alt=""/>
                        <img src={require("../img/robed_pic_work.jpg")} alt=""/>
                        <img src={require("../img/automobiles.jpeg")} alt=""/>
                        <img src={require("../img/bike_sharing.png")} alt=""/>
                        <img src={require("../img/cNN.png")} alt=""/>
                        <img src={require("../img/download_1.png")} alt=""/>
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