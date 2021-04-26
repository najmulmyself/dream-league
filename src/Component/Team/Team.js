import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TeamDetails from '../TeamDetails/TeamDetails';
import { useHistory } from 'react-router';
const Team = (props) => {
    const history = useHistory();
    const {name,img,type,id} = props;
    const handleClick = id =>{
        const url = `/team/${id}`;
        history.push(url);
    }
    return (
        <div className="team">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Sports Type: {type}</p>
            <button onClick={() => handleClick(id)}>Explore  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Team;