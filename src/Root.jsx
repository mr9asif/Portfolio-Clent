import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Achivement from './Components/Achivement';
import MySkill from './Components/Skill/MySkill';

import Projects from './Components/projects/Projects';
import About from './Components/About/About';



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