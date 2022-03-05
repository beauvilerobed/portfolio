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
    <div id="about" className="tm-bg-gray set-hidden-overflow">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <h2 className="tm-color-primary tm-page-title tm-text-center">Teaching</h2>
            <table>
            <tbody>
            <tr>
                <th>Subject</th>
                <th>Semester</th>
            </tr>
            <tr>
                <td>ALGEBRA (Recitation, Lecture)</td>
                <td>Summer Term 2017-2018, Summer Term 2018-2019</td>
            </tr>
            <tr>
                <td>BUSINESS CALCULUS (Recitation)</td>
                <td>Summer Term 2017-2018, Fall Term 2019-2020</td>
            </tr>
            <tr>
                <td>ANALYTC GEOMETRY AND CALCULUS 1 (Recitation, Lecture)</td>
                <td>Fall Term 2018-2019, Summer Term 2020-2021, Spring Term 2021-2022</td>
            </tr>
            <tr>
                <td>ANALYTC GEOMETRY AND CALCULUS 2 (Recitation)</td>
                <td>Fall Term 2018-2019, Spring Term 2018-2019, Spring Term 2019-2020, Spring Term 2021-2022</td>
            </tr>
            <tr>
                <td>ANALYTC GEOMETRY AND CALCULUS 3 (Recitation)</td>
                <td>Spring Term 2020-2021 </td>
            </tr>
            <tr>
                <td>APPLIED DISCRETE MATHEMATICS (Lecture)</td>
                <td>Spring Term 2020-2021</td>
            </tr>
            <tr>
                <td>INTRO THEORETICAL MATHEMATICS (Recitation)</td>
                <td>Fall Term 2021-2022</td>
            </tr>
            </tbody>
            </table>
        </div>

    </div>  
</div>  
);  
}  
}  
export default Teaching;