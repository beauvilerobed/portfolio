import React from 'react';
import '../App.css';
import Thumbnail from '../components/Thumbnail.js';
import Summary from '../components/Summary.js';
import Extra from './Extra'
 
function Projects(props) {
  return (
    <div className="w3-row w3-animate-right container2">
    <div className="w3-half and w3-center" id="work">
        <div className="w3-padding-64 w3-animate-right">
            <h1><strong>Projects</strong></h1>
            <h4><strong>From Machine learning to Web Development</strong></h4>
                
                <div id="calbot"/>
                <Thumbnail
                title="Calculus-Calculator"
                category="E-learning Web Application"
                />
                <Summary
                link="https://github.com/beauvilerobed/calctutor123"
                title=""
                category="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                />

                <div id="starbucks"/>
                <Thumbnail
                title="Starbucks Rewards: Predicting Consumer Responses"
                category="Machine Learning/Data Science Project"
                />
                <Summary
                link="https://github.com/beauvilerobed/predict-consumer-responses"
                title=""
                category="Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn"
                />

                <div id="dogbreeds" />
                <Thumbnail 
                title="Dog Breeds Image Classification"
                category="Machine Learning/Deep Learning Project"
                />
                <Summary
                link="https://github.com/beauvilerobed/dog-breed-image-classification"
                title=""
                category="Python3, AWS Sagemaker, S3, Pytorch, matplotlib"
                />

                <div id="pyMatrix" />
                <Thumbnail 
                title="PyMatrix"
                category="OOP/Python Package"
                />
                <Summary
                link="https://github.com/beauvilerobed/py-matrix-package"
                title=""
                category="Python3"
                />

                <div id="sFITNESS" />
                <Thumbnail 
                title="sFITNESS"
                category="Automated Exercise and Diet Scheduler"
                />
                <Summary
                link="https://github.com/beauvilerobed/fullstack-fitness-trainer"
                title=""
                category="PHP, CSS3, JavaScript (React.js)"
                />
            <p><strong>Just call me awesome!</strong></p>
    </div>
    </div>
        <Extra />
    </div>
  )
}
 
export default Projects;