import React from 'react';
import { useParams } from 'react-router';
import img from '../../Images/stadium.jpg'
import './Header.css'
const Header = (props) => {
    const {teamId} = useParams()
    const header = <h1>Dream Leauge</h1>
    const logo = props.logo;
    let show;
    let id;
    if (logo !== null) {
        show = <img className='header' src={logo}/>;
    }
    else{
        show = <h1> Dream Leauge</h1>;
    }
    return (
        <div className="header">
            {show}
        </div>
    );
};

export default Header;