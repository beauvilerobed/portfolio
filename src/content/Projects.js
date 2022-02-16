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
                
                <div id="calbot"/>
                <Thumbnail
                title="Calculus-Calculator"
                category="E-learning Application"
                />
                <Summary
                link="https://github.com/beauvilerobed/calctutor123"
                title="Designed and launched a website illustrating a multi-step visualization of integrals and derivatives. Used a chatbot, built from scratch, to assist students with topics such as integrating by parts."
                category="Python3, JavaScript, NLTK, Django, Keras, NumPy"
                />

                <div id="starbucks"/>
                <Thumbnail
                title="Starbucks Rewards: Predicting Consumer Responses"
                category="Machine Learning/Data Science"
                />
                <Summary
                link="https://github.com/beauvilerobed/predict-consumer-responses"
                title="Utilized Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                category="Python3, AWS Sagemaker, S3, XGBoost, pandas, scikit-learn"
                />

                <div id="dogbreeds" />
                <Thumbnail 
                title="Dog Breeds Image Classification"
                category="Machine Learning/Deep Learning"
                />
                <Summary
                link="https://github.com/beauvilerobed/dog-breed-image-classification"
                title="Applied profiling, debugging, and hyperparameter tuning to refine the performance of a convolutional neural network for image classification."
                category="Python3, AWS Sagemaker, S3, Pytorch, matplotlib"
                />

                <div id="pyMatrix" />
                <Thumbnail 
                title="PyMatrix-package"
                category="OOP/Python Package"
                />
                <Summary
                link="https://github.com/beauvilerobed/py-matrix-package"
                title="Retrieves matrix dimensions, their trace, and performs matrix addition, subtraction, multiplication, and scalar multiplication."
                category="Python3"
                />
            <p><strong>Just call me awesome!</strong></p>
    </div>
    </div>
        <Extra />
    </div>
  )
}
 
export default Projects;