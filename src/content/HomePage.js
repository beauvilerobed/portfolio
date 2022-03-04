import React, {Component} from 'react';
import '../css/templatemo-ocean-vibes.css';
import '../App.css';
import '../App.scss';
import '../fontawesome/css/all.css';
import Teaching from '../content/Teaching';  
import Intro from '../content/Intro';  
import Projects from '../content/Projects'; 
import Research from '../content/Research'; 
import ContactMe from '../content/ContactMe'; 

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.setStateOfParent.bind(this);
        this.state = { 
            disabled: "0",
        }
    }
    
    viewId(e) {
        const id = e.target.id
        this.setState({ disabled: id })
    }
    
    setStateOfParent = (value) => {
        this.setState({disabled: value});
    }
    
    

    render(){  
    return ( 
    <div> 
    <header className="tm-site-header">
        <h1 className=""><span className="tm-color-primary">Robed Beauvile</span> <span className="tm-tagline tm-color-light-gray tm-text-right">"You only fail if you stop trying." -Unknown</span></h1>
        <em className="tm-color-gray-2">Ph.D. Candidate at University of Pittsburgh | Aspiring Machine Learning Engineer | Mathematics and Computer Science Fanatic</em>
    </header>

    <div id="tm-video-container">
        <video autoPlay muted loop id="tm-video">
            <source src={require("../video/Network.mp4")} type="video/mp4"></source>
        </video>  
    </div>
    <div className="tm-container">
        <nav className="tm-main-nav">
            <ul className="align-list" onClick={(this.state.disabled === "0") ? this.viewId.bind(this) : null}>
                <li className="tm-nav-item">
                        <a href="#Intro" className="tm-nav-link" id="1">
                        Introduction
                        </a>               
                </li>
                    <Intro show={(this.state.disabled === "1") ? true : false } setStateOfParent = {this.setStateOfParent}/>  
                <li className="tm-nav-item">
                    <a href="#Projects" className="tm-nav-link tm-gallery-link" id="2">
                        Projects
                    </a>
                    <Projects show={(this.state.disabled === "2") ? true : false } setStateOfParent = {this.setStateOfParent}/>  
                </li>
                <li className="tm-nav-item">
                    <a href="#Research" className="tm-nav-link" id="3">
                        Research
                    </a>
                    <Research show={(this.state.disabled === "3") ? true : false } setStateOfParent = {this.setStateOfParent}/> 
                </li>
                <li className="tm-nav-item">
                    <a href="#Teaching" className="tm-nav-link" id="4">
                    Teaching
                    </a>
                    <Teaching show={(this.state.disabled === "4") ? true : false } setStateOfParent = {this.setStateOfParent}/> 
                </li>
                <li className="tm-nav-item">
                    <a href="#Contact" className="tm-nav-link" id="5">
                        Contact Me
                    </a>
                    <ContactMe show={(this.state.disabled === "5") ? true : false } setStateOfParent = {this.setStateOfParent}/> 
                </li>
                <li className="tm-nav-item">
                    <a href={'/resume/robed_resume.pdf'} className="tm-nav-link" id="0" download="Robed Beauvile Resume">
                        Download Resume
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    <footer className="tm-footer">
        <span>Copyright &copy;  2021. All rights reserved. Hosted on GitHub</span>
        <span>Free CSS Template by 
        <a href="https://templatemo.com" title="free website templates" target="_parent" rel="nofollow">TemplateMo</a></span>
    </footer>
    </div>
);  
}
}

export default HomePage;