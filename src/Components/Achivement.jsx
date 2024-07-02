import React, { useContext } from 'react';
import { GiAchievement } from 'react-icons/gi';
import { AuthContext } from './AuthContext/AuthContex';
import { FiBook } from 'react-icons/fi';

const Achivement = () => {
    const {theme}=useContext(AuthContext);
    console.log(theme)
    return (
       
            <div className='flex justify-center items-center gap-44'>
               <div className='flex items-center gap-2 my-5'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>1+</h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Years Of</h1>
                      <h1>Experience</h1>
                   </div>
               </div>
               <div className='flex items-center gap-2'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>15+</h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Projects</h1>
                      <h1>Completed</h1>
                   </div>
               </div>
               <div className='flex items-center gap-2'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>8</h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Technologies</h1>
                      <h1>Mastered</h1>
                   </div>
               </div>
               <div className='flex items-center gap-2'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>350+</h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Code</h1>
                      <h1>Contributions</h1>
                   </div>
               </div>
            </div>          
    
    );
};

export default Achivement;