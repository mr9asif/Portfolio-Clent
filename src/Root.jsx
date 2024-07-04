import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Achivement from './Components/Achivement';
import MySkill from './Components/Skill/MySkill';

import Projects from './Components/projects/Projects';
import About from './Components/About/About';
import ScrollToTopButton from './Components/ScrollToTopButton';



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Achivement></Achivement>
            <MySkill></MySkill>
            <ScrollToTopButton></ScrollToTopButton>
          
          
        </div>
    );
};

export default Root;