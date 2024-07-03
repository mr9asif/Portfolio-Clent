import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

const Projects = () => {
    const {theme}=useContext(AuthContext)
    return (
        <section >
        <div>
        <h1 className={`text-center text-5xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>My Recent Projects</h1>
        <p className={`text-xl text-center my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>Here is my Latest Projects that i build using my skills.</p>
        </div>
        </section>
    );
};

export default Projects;