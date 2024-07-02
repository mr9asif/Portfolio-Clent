import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

import { Tilt } from 'react-tilt'
const MySkill = () => {
    const {theme}=useContext(AuthContext)

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
    return (
        <div className='my-16 z-10'>
            <h1 className={`text-center text-5xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>My Skills</h1>
             <p className={`text-xl text-center my-6 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>Creating Stunning Websites with My Technical Skills and Expertise</p>
                
             <div className='w-[60%] px-24 my-8'>
             <h1 className={`text-start text-4xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>Front-End Technology</h1>
            {/* <p className={`text-xl text-start my-6 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>
             With front-end technologies, I specialize in crafting user-centric websites and web apps. Using HTML, CSS, and JavaScript, I design responsive layouts and interactive features. Frameworks like React  enhance functionality, while Bootstrap and Tailwind expedite development with ready-to-use components and efficient styling. </p>*/}
        
             </div>
             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto'>
               <div className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin my-transition overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center   font-bold my-2'>HTML5</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/1GzSwm8/css3.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>CSS3</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>Tailwind CSS</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/L5LMsPQ/bootstrap.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>Bootstrap</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/fHt8LFJ/mui.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>Metarial UI</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.postimg.cc/yxb0pGQ5/image.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>DaisyUI</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/VBJgmgv/javascript.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>JavaScript</h1>
               </div>
               <div  className=' w-[200px]'>
               <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
               <div className={`rounded-lg hover:grayscale-0 grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
               <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/sW5JBYT/reactjs.png" alt="" />
            </div>
             </Tilt>
               
              <h1 className='text-center font-bold my-2'>React JS</h1>
               </div>
               
             </div>
              
             <div className='w-[60%] px-24 my-8'>
             <h1 className={`text-start text-4xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>Back-End Technology</h1>
             </div>
              
              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto'>
              
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/g6D3GsT/nodejs.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>Node Js</h1>
              </div>
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/wJDDjpc/expressjs.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>Express Js</h1>
              </div>
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/WGVjtbX/mongodb.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>Mongo DB</h1>
              </div>
              
              </div>


              <div className='w-[60%] px-24 my-8'>
              <h1 className={`text-start text-4xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>Others Technology</h1>
              </div>


              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto'>
              
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/Zd51cmf/npm.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>npm</h1>
              </div>
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/gJNnM1S/git.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>git</h1>
              </div>
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/17zCq0t/visual-studio-code.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>Visual Studio Code</h1>
              </div>
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/n7KcsPK/github.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>Github</h1>
              </div>
              <div className=' w-[200px]'>
              <Tilt options={defaultOptions} className="" style={{ height: 180, width: 200 ,}}>
              <div className={`rounded-lg hover:grayscale-0  grayscale-[100%] group group-hover:animate-spin overflow-hidden cursor-pointer dark:text-white ${theme === 'light' ? 'bg-green-200' : "bg-white"} flex justify-center p-3 bg-blend-darken`}>
              <img className='p-6 group-hover:animate-bounce   size-[150px] my-transtion' src="https://i.ibb.co/sQ6mHJw/figma.png" alt="" />
           </div>
            </Tilt>
              
             <h1 className='text-center   font-bold my-2'>Figma</h1>
              </div>
              
              </div>
             </div>
    );
};

export default MySkill;