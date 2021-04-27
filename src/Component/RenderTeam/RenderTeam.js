import React from 'react';
// import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import TeamCard from '../TeamCard/TeamCard';

const Test = (props) => {
    const {name,year,type,gender,id,country,logo,description} = props;
    return (
        <div>
            <Header logo={logo}></Header>
            <TeamCard name={name} year={year} type={type} gender={gender} description={description} country={country}></TeamCard>
        </div>
    );
};

export default Test;