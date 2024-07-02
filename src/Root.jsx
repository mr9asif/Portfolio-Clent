import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Achivement from './Components/Achivement';
import MySkill from './Components/Skill/MySkill';



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Achivement></Achivement>
            <MySkill></MySkill>
        </div>
    );
};

export default Root;