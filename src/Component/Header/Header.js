import React from 'react';
import img from '../../Images/stadium.jpg'
import './Header.css'
const Header = (props) => {
    const logo = props.logo;
    console.log(logo)
    let show;
    if (logo) {
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