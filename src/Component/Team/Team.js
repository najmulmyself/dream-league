import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const {name,img,type} = props;
    return (
        <div className="team">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Sports Type: {type}</p>
            <button>Explore  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Team;