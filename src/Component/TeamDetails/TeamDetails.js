import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [teamDetails,setTeamDetails] = useState();
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const teamData = data.teams;
            console.log(teamData)
            return setTeamDetails(teamData)
        })
    },[])
    return (
        <div>
            <h1>Here's Team id {teamId} and Details</h1>
            {
                // teamDetails.map(team => console.log(team[0].strTeam) )
            }
        </div>
    );
};

export default TeamDetails;