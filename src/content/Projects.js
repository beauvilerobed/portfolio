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
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
                <div className="nav-gallery">
                    <h2 className="tm-color-primary tm-mt-35 tm-page-title">Projects</h2>
                        <ul className="tm-gallery-links align-list">
                            <li>
                                <a href="#/" className={`${(this.state.all) ? "active" : ""} tm-gallery-link` } onClick={() => this.showAllDiv(!this.state.all)}>
                                    <i className="fas fa-layer-group tm-gallery-link-icon"></i>
                                    All
                                </a>
                            </li>
                            <li>
                                <a href="#/"className={`${this.isState("1") ? "active" : ""} tm-gallery-link` } onClick={() => this.enableDiv(this.state.machineLearning)}>
                                    <i className="fas fa-portrait tm-gallery-link-icon"></i>
                                    Machine Learning/Data Science
                                </a>
                            </li>
                            <li>
                                <a href="#/" className={`${this.isState("2") ? "active" : ""} tm-gallery-link` }  onClick={() => this.enableDiv(this.state.datastructure)}>
                                    <i className="fas fa-leaf tm-gallery-link-icon"></i>
                                    Data Structures and Algorithms
                                </a>
                            </li>
                            <li>
                                <a href="#/" className={`${this.isState("3") ? "active" : ""} tm-gallery-link` }  onClick={() => this.enableDiv(this.state.webdev)}>
                                    <i className="fas fa-paw tm-gallery-link-icon"></i>
                                    Web Developement
                                </a>
                            </li>
                            <li>
                                <a href="#/" className={`${this.isState("4") ? "active" : ""} tm-gallery-link` }  onClick={() => this.enableDiv(this.state.misc)}>
                                    <i className="far fa-building tm-gallery-link-icon"></i>
                                    Miscellaneous
                                </a>
                            </li>
                        </ul>
                    </div>
            <div id="projects">
                <div id="machine-learning" style={this.isState("1")? {display: "block"} : {display: "none"}}>
                    <Project
                        pictureId="calbot"
                        headline="Calculus Tutor Bot"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                        <Project
                        pictureId="calbot"
                        headline="Calculus Tutor Bot"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                    <Project
                        pictureId="calbot"
                        headline="Calculus Tutor Bot"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                </div>


                <div id="data-structure" style={this.isState("2")  ? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="DSA"
                        headline="DSA"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                <Project
                        pictureId="DSA"
                        headline="DSA"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                <Project
                        pictureId="DSA"
                        headline="DSA"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />       
                </div>


                <div id="web-development" style={this.isState("3")  ? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="sFITNESS"
                        headline="fitness"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                <Project
                        pictureId="sFITNESS"
                        headline="fitness"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                <Project
                        pictureId="sFITNESS"
                        headline="fitness"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                </div>


                <div id="miscellaneous" style={this.isState("4")  ? {display: "block"} : {display: "none"}}>
                <Project
                        pictureId="learnSQL"
                        headline="SQL"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                <Project
                        pictureId="learnSQL"
                        headline="SQL"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                    />
                <Project
                        pictureId="learnSQL"
                        headline="SQL"
                        link="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
                        summary="Extreme Gradient Boosting and Data Mining techniques to optimize promotion targeting for Starbucks' simulated data."
                        tools="Python3, JavaScript, NLTK, Django, Keras, NumPy, Pandas"
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