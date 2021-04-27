import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import RenderTeam from '../RenderTeam/RenderTeam';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [teamDetails,setTeamDetails] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams))
    },[])
    return (
        <div>
            {
                teamDetails.map(team => <RenderTeam country={team.strCountry} description={team.strDescriptionEN} year={team.intFormedYear} gender={team.strGender} type={team.strSport} id={team.idTeam} logo={team.strTeamBadge} name={team.strTeam}></RenderTeam>)
            }
        </div>
    );
};

export default TeamDetails;