import React from 'react';   

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
            <div id="projects">
                <div id="machine-learning">
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>

                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                </div>
                <div id="web-develpment">
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>

                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                </div>
                <div id="data-structure">
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>

                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                </div>
                <div id="miscellaneous">
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>

                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                    <div className="project">
                    <img src={require("../img/robed_pic.jpg")} alt=""/>
                    <h3>Headline</h3>
                    <strong><a href="#/">GitHub</a></strong>
                    <p> Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data. 
                        <br></br>
                        Tools: Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn</p>

                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>  
);  
}  
}  
export default Projects;