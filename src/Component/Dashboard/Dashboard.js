import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Dashboard.css';
const Dashboard = () => {
    const [team,setTeam] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data => {
            const final = data.teams;
            return setTeam(final);
        })
    },[])
    return (
        <div className="dashboard-container">
            {
                team.map(eachTeam => <Team id={eachTeam.idTeam} name={eachTeam.strTeam} type={eachTeam.strSport} img={eachTeam.strTeamBadge}></Team>)
            }
        </div>
    );
};

export default Dashboard;