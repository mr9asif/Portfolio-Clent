import React, { useContext } from 'react';
import { GiAchievement } from 'react-icons/gi';
import { AuthContext } from './AuthContext/AuthContex';

import CountUp from 'react-countup';

const Achivement = () => {
    const {theme}=useContext(AuthContext);
    console.log(theme)
      
   

    return (
       
            <div className='w-[98%] mx-auto lg:flex  mb-16 justify-center items-center lg:gap-44'>
               <div className='flex   justify-center items-center gap-2 my-5'>
                  <h1 className={` text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>
                  <CountUp
                  start={0}
                  end={1}
                  duration={2.75}
                  separator=","
                  prefix=""
                  suffix="+"
                  className={`text-5xl ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}
                  />
                  
                  </h1>
                   <div className={`text-[12px] text-center font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Years Of</h1>
                      <h1>Experience</h1>
                   </div>
               </div>
               <div className='flex justify-center  items-center gap-2'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>
                  <CountUp
                  start={0}
                  end={15}
                  duration={2.75}
                  separator=","
                  prefix=""
                  suffix="+"
                  className={`text-5xl ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}
                  />
                  </h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Projects</h1>
                      <h1>Completed</h1>
                   </div>
               </div>
               <div className='flex justify-center items-center gap-2'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>
                  <CountUp
                  start={0}
                  end={8}
                  duration={2.75}
                  separator=","
                  prefix=""
                  suffix="+"
                  className={`text-5xl ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}
                  />
                  </h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Technologies</h1>
                      <h1>Mastered</h1>
                   </div>
               </div>
               <div className='flex justify-center items-center gap-2'>
                  <h1 className={`text-[52px] ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}>
                  <CountUp
                  start={0}
                  end={350}
                  duration={2.75}
                  separator=","
                  prefix=""
                  suffix="+"
                  className={`text-5xl ${theme === 'light' ? 'text-green-600' : "text-gray-100"} font-bold `}
                  />
                  </h1>
                   <div className={`text-[12px] font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
                      <h1>Code</h1>
                      <h1>Contributions</h1>
                   </div>
               </div>
            </div>          
    
    );
};

export default Achivement;