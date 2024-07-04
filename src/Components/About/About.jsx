import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

const About = () => {
    const {theme}=useContext(AuthContext)
    return (
        <div>
        <h1 className={`text-center text-5xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>My Skills</h1>
        <p className={`text-xl text-center my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>Creating Stunning Websites with My Technical Skills and Expertise</p>
           
        </div>
    );
};

export default About;