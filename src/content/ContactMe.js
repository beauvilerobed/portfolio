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
                                <i className="fas fa-link tm-contact-link-icon"></i>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/robed-beauvil/">
                                <i className="fas fa-link tm-contact-link-icon"></i>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
            <div>
                <div>
                    
                    <form id="contact-form" action="" method="POST" className="tm-contact-form">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control rounded-0" placeholder="Full Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control rounded-0" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea rows="8" name="message" className="form-control rounded-0" placeholder="Message" required=""></textarea>
                        </div>

                        <div className="form-group tm-text-right">
                            <button type="submit" className="tm-btn tm-btn-primary set-width-100 set-font-1"><strong>Send</strong></button>
                        </div>
                    </form>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>  
</div>  
);  
}  
}  
export default ContactMe;