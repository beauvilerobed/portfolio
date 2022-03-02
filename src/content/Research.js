import React from 'react';  
import '../style.css';  

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
    <div id="testimonials" className="tm-bg-gray">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <div className="tm-testimonials-inner">
                <h2 className="tm-color-gray tm-testimonial-col tm-page-title">Research</h2>
                <div className="tm-row tm-testimonial-row">                
                    <div className="tm-col tm-testimonial-col">
                        <p>
                            OCEAN vibes is free website template from 
                            <a rel="nofollow" href="https://templatemo.com" className="tm-color-primary">TemplateMo</a>
                            website. You are allowed to use
                            it for commercial purpose. You can convert this template as a CMS theme or a custom
                            website builder template.
                        </p>
                        <em className="tm-mb-30 tm-color-light-gray">
                            You may support us by telling your friends
                            about our TemplateMo site. Feel free to 
                            contact us if you have anything to ask.
                        </em>
                        <p>
                            You can make a little contribution via
                            <a rel="nofollow" href="http://paypal.me/templatemo" target="_parent"><strong>PayPal</strong></a>
                                or saying about TemplateMo to your friends. Duis egestas lorem eu nisi
                            finibus, sit amet elementum lacus pretium.
                        </p>
                        <p>
                            In tempor felis vitae nulla feugiat aliquam.
                            Vivamus vitae congue mi. Sed maximus velit
                            vestibulum nisl condimentum hendrerit.
                        </p>
                    </div>
                    <div className="tm-col tm-testimonial-col tm-testimonial-col-2">
                        <img src={require("../img/testimonial-01.jpg")} alt="" className="tm-mb-30"></img>
                        <blockquote>
                            <p>
                                "Suspendisse eu mollis diam, at ullamcorper
                                diam. Ut sit amet arcu metus. Nullam mattis
                                eros eget." by <span className="tm-color-primary">George, Chief Editor</span>
                            </p>
                        </blockquote>
                        <blockquote className="tm-mb-50">
                            <p>
                                "Quisque et lorem accumsan, sollicitudin
                                dolor vel, facilisis eros. Donec aliquet felis in
                                mollis egestas." by <span className="tm-color-primary">Mary, CEO of Web</span>
                            </p>
                        </blockquote>  
                        <div className="tm-text-center">
                            <a href="#/" className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-contact">
                                Contact Us
                            </a>
                        </div>                 
                    </div>
                    <div className="tm-col tm-testimonial-col tm-testimonial-col-2">
                        <p>
                            Duis sapien diam, eleifend eget vehicula sed,
                            convallis sit amet elit. Aenean condimentum
                            vulputate porta.
                        </p>
                        <p>
                            Mauris accumsan erat ante, id sagittis felis
                            gravida vitae. Sed iaculis tincidunt neque, a
                            molestie magna vehicula at.
                        </p>
                        <p>
                            Phasellus ornare magna nec nulla pharetra,
                            nec tristique elit lobortis.
                        </p>
                        <img src={require("../img/testimonial-02.jpg")} alt="" className="tm-mt-35"></img>
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