import React from 'react';  

class Teaching extends React.Component {  
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
    <div id="about" className="tm-bg-gray">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <h2 className="tm-color-primary tm-page-title tm-text-center">Teaching</h2>
            <div className="tm-row tm-about-row .tm-text-center">
                <div className="tm-col tm-about-col">                    
                    <img src={require("../img/about.jpg")} alt="" className="tm-mb-30"></img>
                    <p className="tm-mb-40">
                        Suspendisse sit amet pellentesque nunc. Vivamus fringilla
                        tellus finibus lacus blandit, siet amet aliquet augue sagittis.
                        Duis nec auctor felis, nec ornare ex. In non ante ligula.
                    </p>
                    <p className="tm-mb-40">
                        Curabitur non augue dignissim est pulvibar lobortis. Nunc
                        vulputate, mi vel cursus mollis, justo mauris rutrum dui, id
                        egestas ante ligula id nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus.
                    </p>
                </div>
                <div className="tm-col tm-about-col">
                    <p className="tm-mb-40">
                        You are NOT allowed to re-distribute this template ZIP file
                        on any website that <span className="tm-color-primary">collects and reposts</span> free templates
                        from many different websites.
                    </p>
                    <p className="tm-mb-40">
                        Pellentesque vitae ipsum vel risus molestie cursus nec quis
                        lectus. Duis egestas lorem eu nisi finibus, sit amet
                        elementum lacus pretium. In tempor felis vitae nulla feugiat aliquam.
                    </p>
                    <p className="tm-mb-40">
                If you need a working HTML contact form, 
                please visit our <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact page</a>. </p>
                    <a href="#/" className="tm-btn tm-btn-primary mfp-prevent-close tm-btn-contact tm-mb-40">
                        Contact Us
                    </a>
                </div>               
            </div>
        </div>

    </div>  
</div>  
);  
}  
}  
export default Teaching;