import React from 'react';  
import '../style.css';  

class Projects extends React.Component {  
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
    <div id="gallery" className="tm-bg-gray">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
                {/* <!-- Gallery navigation and description --> */}
                <div className="nav-gallery">
                    <h2 className="tm-color-primary tm-mt-35 tm-page-title">Projects</h2>
                        <ul className="tm-gallery-links">
                            <li>
                                <a href="#/" className="active tm-gallery-link" data-filter="*">
                                    <i className="fas fa-layer-group tm-gallery-link-icon"></i>
                                    All
                                </a>
                            </li>
                            <li>
                                <a href="#/" className="tm-gallery-link" data-filter="portrait">
                                    <i className="fas fa-portrait tm-gallery-link-icon"></i>
                                    Machine Learning/Data Science
                                </a>
                            </li>
                            <li>
                                <a href="#/" className="tm-gallery-link" data-filter="nature">
                                    <i className="fas fa-leaf tm-gallery-link-icon"></i>
                                    Data Structures and Algorithms
                                </a>
                            </li>
                            <li>
                                <a href="#/" className="tm-gallery-link" data-filter="animal">
                                    <i className="fas fa-paw tm-gallery-link-icon"></i>
                                    Web Developement
                                </a>
                            </li>
                            <li>
                                <a href="#/" className="tm-gallery-link" data-filter="building">
                                    <i className="far fa-building tm-gallery-link-icon"></i>
                                    Miscellaneous
                                </a>
                            </li>
                        </ul>
                    </div>
            <div>
                <div align="center">                    
                    <img src={require("../img/about.jpg")} alt=""></img>
                    <p>
                        Suspendisse sit amet pellentesque nunc. Vivamus fringilla
                        tellus finibus lacus blandit, siet amet aliquet augue sagittis.
                        Duis nec auctor felis, nec ornare ex. In non ante ligula.
                    </p>
                    <p>
                        Curabitur non augue dignissim est pulvibar lobortis. Nunc
                        vulputate, mi vel cursus mollis, justo mauris rutrum dui, id
                        egestas ante ligula id nunc. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus.
                    </p>
                </div>
                <div>
                    <p>
                        You are NOT allowed to re-distribute this template ZIP file
                        on any website that <span className="tm-color-primary">collects and reposts</span> free templates
                        from many different websites.
                    </p>
                    <p>
                        Pellentesque vitae ipsum vel risus molestie cursus nec quis
                        lectus. Duis egestas lorem eu nisi finibus, sit amet
                        elementum lacus pretium. In tempor felis vitae nulla feugiat aliquam.
                    </p>
                    <p>
                If you need a working HTML contact form, 
                please visit our <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact page</a>. </p>
                </div>               
            </div>
        </div>
    </div>  
</div>  
);  
}  
}  
export default Projects;