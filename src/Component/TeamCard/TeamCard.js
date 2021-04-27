import React from 'react';
import './TeamCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faMapMarkerAlt , faFlag, faFutbol, faMars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';
import male from '../../Images/male.png'
import female from '../../Images/female.png'
const TeamCard = (props) => {
    const {name,year,type,gender,id,country,logo,description} = props;
    let cardImg;
    if (gender === 'Male'){
        cardImg = male;
    }
    else{
        cardImg = female;
    }
    return (
        <div>
                <div className='dashboard-container'>
                    <div className="team-card">
                        <div className='internal-style'> 
                            <h2>{name}</h2>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Founded : {year} </p>
                            <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country : {country} </p>
                            <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sports Type : {type} </p>
                            <p><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender : {gender} </p>
                        </div>
                        <div className='internal-style'>
                            <img className='team-photo' src={cardImg} alt=""/>
                        </div>
                </div>
            <p>{description}</p>
            </div>
            
                <div className='icon-div'>
                    <FontAwesomeIcon icon={faTwitter} className={'icon'}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFacebook} className={'icon'}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faYoutube} className={'icon'}></FontAwesomeIcon>
                </div>
        </div>
    );
};

export default TeamCard;