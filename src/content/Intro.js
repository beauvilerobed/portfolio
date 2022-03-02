import React from 'react';  
import '../style.css';  

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
        <div id="gallery" className="tm-bg-gray">
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
                                This CSS template is 100% free provided by 
                                <a rel="nofollow" href="https://templatemo.com/page/1" target="_parent">TemplateMo</a> 
                                website. You can use this template for any purpose. You can apply
                          this as a CMS theme or a custom website builder template. </p>
                            <p className="tm-mb-0">
                                <strong>Credit</strong> goes to Pexels for the video banner and images used in this template. Some images are taken from Unsplash. Both Pexels and Unsplash are great websites for free photos.
                            </p>
                        </div>
                        <div className="tm-col-6">
                            <p>
                                You are not allowed to re-distribute this
                                template as a downloadable ZIP file on
                                any template collection website.
                            </p>
                            <p>
                                Top right corner is a return home with an
                                icon that will close this pop-up page.
                            </p>
                            <p className="tm-mb-80">
                                Next Page will bring you to the gallery
                                page directly without going back to main
                                menu.
                            </p>                          
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