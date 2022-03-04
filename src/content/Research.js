import React from 'react';  
import Layout from '../components/Layout';


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
    <div className="tm-bg-gray set-hidden-overflow">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <div>
                <h2 className="tm-color-primary tm-page-title tm-text-center">Research</h2>
                <Layout/>
            </div>            
        </div>
    </div>  
</div>  
);  
}  
}  
export default Research;