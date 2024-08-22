import React from 'react';  
import Project from '../components/Project'

class Projects extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { 
            project: "1",
            all: false,
            machineLearning: "1",
            datastructure: "2",
            webdev: "3",
            misc: "4",
        }
        this.handleClick.bind(this);
        this.enableDiv.bind(this);
        this.showAllDiv.bind(this);
        this.isState.bind(this);

    } 

    handleClick = () =>  {
        this.props.setStateOfParent("0");
    }

    enableDiv = (e) => {
        this.setState({ project: e })
        this.setState({ all: false})
    }

    showAllDiv = (e) => {
        console.log(e)
        this.setState({ all: e})

    }

    isState = (e) => {
       return (this.state.project === e || this.state.all)
    }



    render() {  
    return (
    <div className='popup' style={(this.props.show) ? {display: "block"} : {display: "none"}} >  
    <div className='popup_open'> 
    <div id="gallery" className="tm-bg-gray set-hidden-overflow">
            <span className="tm-close-popup" onClick={this.handleClick}>
                Return Home
                <i className="fas fa-times"></i>
            </span>
                <div className="nav-gallery">
                    <h2 className="tm-color-primary tm-mt-35 tm-page-title">Projects</h2>
                        <ul className="tm-gallery-links align-list">
                            <li>
                                <span className={`${(this.state.all) ? "active" : ""} tm-gallery-link` } onClick={() => this.showAllDiv(!this.state.all)}>
                                    <i className="fas fa-layer-group tm-gallery-link-icon"></i>
                                    All
                                </span>
                            </li>
                            <li>
                                <span className={`${this.isState("1") ? "active" : ""} tm-gallery-link` } onClick={() => this.enableDiv(this.state.machineLearning)}>
                                    <i className="fas fa-solid fa-robot tm-gallery-link-icon"></i>
                                    Machine Learning/Data Science
                                </span>
                            </li>
                            <li>
                                <span className={`${this.isState("2") ? "active" : ""} tm-gallery-link` }  onClick={() => this.enableDiv(this.state.datastructure)}>
                                    <i className="fas fa-code tm-gallery-link-icon"></i>
                                    Data Structures and Algorithms
                                </span>
                            </li>
                            <li>
                                <span className={`${this.isState("3") ? "active" : ""} tm-gallery-link` }  onClick={() => this.enableDiv(this.state.webdev)}>
                                    <i className="fa-solid fa-window-restore tm-gallery-link-icon"></i>
                                    Web Developement
                                </span>
                            </li>
                            <li>
                                <span className={`${this.isState("4") ? "active" : ""} tm-gallery-link` }  onClick={() => this.enableDiv(this.state.misc)}>
                                    <i className="fa-solid fa-database tm-gallery-link-icon"></i>
                                    Miscellaneous
                                </span>
                            </li>
                        </ul>
                    </div>
            <div id="projects">
                <div id="machine-learning" style={this.isState("1")? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="practicalstats"
                        headline="Statistics for Data Science"
                        link="https://github.com/beauvilerobed/statistics-for-data-science-and-machine-learning"
                        summary=" This is a composition of practical statistics notes, projects, and tutorials needed for data science. For academic and self-learning purposes.."
                        tools=" Python3, S3, XGBoost, pandas, scikit-learn, statsmodels, SciPy, numpy"
                    />
                    <Project
                        pictureId="dsmlprojects"
                        headline="Data Science and Machine Learning Projects and Tutorials"
                        link="https://github.com/beauvilerobed/ds-ml-notes-projects-and-tutorials"
                        summary=" This is a project of projects that includes Data Science/Machine Learning/Deep Learning notes, and tutorials for academic and self-learning purposes."
                        tools=" Python3, S3, XGBoost, pandas, scikit-learn, tensorflow, Latex"
                    />
                    <Project
                        pictureId="starbucks"
                        headline="Starbucks Rewards: Predicting Consumer Responses"
                        link="https://github.com/beauvilerobed/predict-consumer-responses"
                        summary=" Exploratory Data Analysis, Feature Engineering, Model Training, Hyperparameter Tuning, Deployment, Testing and Evaluation, Cleanup Cloud Resources, Write Report"
                        tools=" Python3, S3, XGBoost, pandas, scikit-learn"
                    />
                    <Project
                        pictureId="calbot"
                        headline="Calculus Chatbot"
                        link="https://github.com/beauvilerobed/calc-tutor-bot/tree/master/chatbot"
                        summary=" Tokenization, Stemming, Word Lemmatization, Model Training, Testing and Evaluation"
                        tools=" Python3, NLTK, Django, Keras, NumPy"
                    />
                        <Project
                        pictureId="dogbreeds"
                        headline="Dog Breeds Image Classification"
                        link="https://github.com/beauvilerobed/dog-breed-image-classification"
                        summary=" Data staging, Model training, Hyperparameter Tuning, Deployment, Testing and Evaluation, Cleanup Cloud Resources"
                        tools=" Python3, S3, Pytorch, matplotlib"
                    />
                    <Project
                        pictureId="bike-sharing"
                        headline="Predict Bike Sharing Demand with AutoGluon"
                        link="https://github.com/beauvilerobed/predict-bike-sharing-demand"
                        summary=" Exploratory Data Analysis, Feature Engineering, Hyperparameter Tunning, Submit Predictions on Kaggle, Write Report"
                        tools=" Python3, AutoGluon, Pandas, MXNet"
                    />
                    <Project
                        pictureId="ml-workflow"
                        headline="Build a ML Workflow for Scones Unlimited"
                        link="https://github.com/beauvilerobed/ml-workflow-build-for-scones-unlimited"
                        summary=" Data Staging, Model Training and Deployment, Lambdas and Step Function Workflow, Testing and Evaluation, Cleanup Cloud Resources"
                        tools=" Python3, AWS SageMaker, Lambdas, Step Functions, S3, NumPy, Pandas, matplotlib"
                    />
                    <Project
                        pictureId="operationalize-ml-project"
                        headline="Operationalizing an AWS ML Project"
                        link="https://github.com/beauvilerobed/operationalize-ml-project"
                        summary=" Train and Deploy a Model, Adjust on EC2, Set up Lambda Functions and Auto-Scaling, Ensure Security on ML Pipeline"
                        tools=" Python3, AWS SageMaker, Lambdas, Step Functions, S3, PyTorch,NumPy, Pandas, matplotlib"
                    />
                </div>


                <div id="data-structure" style={this.isState("2")  ? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="DSA"
                        headline="Topics from Data Stuctures and Algorithms Online Courses."
                        link="https://github.com/beauvilerobed/data-structures-and-algorithms"
                        summary=" Data Structures, Algorithms on Graphs, Algorithms on Strings, Divide and Concquer, Sorting and Seaching, Randomized Algorithms, Graph Search, Shortest Path, Greedy Algorithms, Minimum Spanning Trees, Dynamic Programming, and NP-Complete Problems"
                        dontShowTools={true}
                    />     
                </div>


                <div id="web-development" style={this.isState("3")  ? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="calbot"
                        headline="Calculus-Tutor-Bot"
                        link="https://github.com/beauvilerobed/calc-tutor-bot"
                        summary=" Virtual Environment, Model Training and Integration, CAS for Computation Logic, Front-End Visualization"
                        tools=" Python3, JavaScript, NLTK, Django, Keras, NumPy"
                    />
                <Project
                        pictureId="sFITNESS"
                        headline="Full-stack Automated Exercise and Diet Scheduler"
                        link="https://github.com/beauvilerobed/sfitness"
                        summary=" Relational database schemas, API development, Front-end Visualization and Presentation"
                        tools=" PHP, React, CSS, MAMP web Stack, MySQL, Youtube Iframe API"
                    />
                <Project
                        pictureId="search-image"
                        headline="Search Image Web Application"
                        link="https://github.com/beauvilerobed/search-image-app"
                        summary=" API key, Backend to Process Request, Front-End Presentation"
                        tools=" React, Node.js, Flickr Photo Search API, AJAX"
                    />
                <Project
                        pictureId="micro-blog"
                        headline="Micro-blog Web Application"
                        link="https://github.com/beauvilerobed/microblog-app"
                        summary=" Virtual Environment, Database Modelling, Routes for CRUD Architecture, Front-End for User Interface"
                        tools=" Python3, Flask, HTML, CSS"
                    />

                <Project
                        pictureId="robedbeauvile_pic_2"
                        headline="Personal Website"
                        link="https://github.com/beauvilerobed/portfolio"
                        tools=" React, SCSS, CSS, HTML, node.js"
                        dontShowSummary={true}
                    />
                </div>


                <div id="miscellaneous" style={this.isState("4")  ? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="learnSQL"
                        headline="Lets Learn SQL Through Set Theory"
                        link="https://github.com/beauvilerobed/sql-seminar"
                        summary=" A seminar talk about learning the basics SQL using Set Theory."
                        tools=" Microsoft Powerpoint"
                    />
                <Project
                        pictureId="learnSQL2"
                        headline="Lets Learn SQL Through Set Theory (Part 2 Applications)"
                        link="https://github.com/beauvilerobed/sql-seminar"
                        summary=" A seminar talk using a SQL Database."
                        tools=" MAMP, MySQL, Microsoft Powerpoint"
                    />
                <Project
                        pictureId="pyMatrix"
                        headline="Py-Matrix Python Package"
                        link="https://github.com/beauvilerobed/py-matrix-package"
                        summary=" A Matrix Class: Retrieve matrix dimensions, its trace, perform matrix algebra."
                        tools=" Python3, Unittest"
                    />
                <Project
                        pictureId="hangman"
                        headline="26 Level guessing Game (Hang Man 2.0)"
                        link="https://github.com/beauvilerobed/guessing-game"
                        dontShowSummary={true}
                        tools=" C++"
                    />
                <Project
                        pictureId="automobile"
                        headline="Automobile Data Tracker"
                        link="https://github.com/beauvilerobed/auto-tracker"
                        tools=" PHP, MySQL, MAMP, CSS"
                        dontShowSummary={true}
                    />               
                </div>
            </div>
        </div>
    </div>  
</div>  
);  
}  
}  
export default Projects;