import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

import { Tilt } from 'react-tilt'
import { Element } from 'react-scroll';
import { FaGithub, FaLink } from 'react-icons/fa';
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
        <Element  style={{ height: '100vh' }} className=''>
        <div  id='skills' className=' z-10 section'>
            <h1 className={`text-center text-5xl font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>My Skills</h1>
             <p className={`text-xl text-center my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>Creating Stunning Websites with My Technical Skills and Expertise</p>
                
             <div  className='w-[60%] px-24 my-4'>
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

             <section id='projects' className='my-16'>
             <div className='mt-28'>
             <h1 className={`text-center text-5xl mb-2 font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>My Recent Projects</h1>
             <p className={`text-xl text-center my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>Here is my Latest Projects that i build using my skills.</p>
             </div>
             <div>
             
                <div className='flex items-center gap-5 mt-8 px-12'>
                  
                  <div className='p-2 rounded-xl overflow-hidden'>
                  <Tilt options={defaultOptions} className="">
                  
                  <img src="https://i.postimg.cc/0Qx1Qr1s/Screenshot-2024-07-04-010318.png" alt="" />
                  </Tilt>
                  </div>
                  <div className='p-2 rounded-xl overflow-hidden'>
                  <Tilt options={defaultOptions} className="">
                  
                  <img src="https://i.postimg.cc/C1NTfYwf/Screenshot-2024-07-04-010415.png" alt="" />
                  </Tilt>
                  </div>
                  
                  
                </div>
                <div className='flex-col justify-start items-center px-12 my-3'>
                <h1 className={` text-3xl mb-2 font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>Traveler Website provide the user to visite all over the world</h1>
                <p className={`text-xl  my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>You can visit a lot of country using this website by perchesing ticket.you can see the details and the spot of that country . you can also add that country in your list. we provide so cheap service.</p>
                </div>
                <div className={`flex items-start justify-start  gap-7 font-extrabold text-2xl px-12`}>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'}  p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Tailwind CSS</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>React JS</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Metarial UI</h1>
                </div>


                <div className={`flex items-start justify-start my-8  gap-7 font-extrabold text-2xl px-12`}>
                 <a href='https://steady-baklava-3119cd.netlify.app/' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Live Link
                    <FaLink className={` ${theme === 'light' ? 'text-white ' : 'bg-gray-900'}`}></FaLink>
                 </a>
                 <a href='https://github.com/mr9asif/Traveler-Website' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Github Repo
                    <FaGithub className={` ${theme === 'light' ? 'text-white ' : 'bg-gray-900'}`}></FaGithub>
                 </a>
                
                
                
                </div>
             </div>
             <div>
             
                <div className='flex items-center gap-5 mt-8 px-12'>
                  
                  <div className='p-2 rounded-xl overflow-hidden'>
                  <Tilt options={defaultOptions} className="">
                  
                  <img src="https://i.postimg.cc/28FDs4sx/Screenshot-2024-07-04-015951.png" alt="" />
                  </Tilt>
                  </div>
                  <div className='p-2 rounded-xl overflow-hidden'>
                  <Tilt options={defaultOptions} className="">
                  
                  <img src="https://i.postimg.cc/nhFJpXZf/Screenshot-2024-07-04-020115.png" alt="" />
                  </Tilt>
                  </div>
                  
                  
                </div>
                <div className='flex-col justify-start items-center px-12 my-3'>
                <h1 className={` text-3xl mb-2 font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>BlogNestle will colaborate with blogers and the readers.</h1>
                <p className={`text-xl  my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>Using BlogNestle people can write thier own blog and publish it,user can read it and also comment it. User can also add that in their Wishlist.</p>
                </div>
                <div className={`flex items-start justify-start  gap-7 font-extrabold text-2xl px-12`}>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'}  p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>React JS</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Firebase</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Node JS</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>MongoDB</h1>
                </div>


                <div className={`flex items-start justify-start my-8  gap-7 font-extrabold text-2xl px-12`}>
                 <a href='https://relaxed-strudel-f0e9a5.netlify.app/' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Live Link
                    <FaLink className={` ${theme === 'light' ? 'text-white ' : 'bg-gray-900'}`}></FaLink>
                 </a>
                 <a href='https://github.com/mr9asif/Assignment-11' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Github Repo
                    <FaGithub className={` ${theme === 'light' ? 'text-white ' : 'bg-gray-900'}`}></FaGithub>
                 </a>
                
                
                
                </div>
             </div>
             <div>
             
                <div className='flex items-center gap-5 mt-8 px-12'>
                  
                  <div className='p-2 rounded-xl overflow-hidden'>
                  <Tilt options={defaultOptions} className="">
                  
                  <img src="https://i.postimg.cc/0QhLqyxz/Screenshot-2024-07-04-021154.png" alt="" />
                  </Tilt>
                  </div>
                  <div className='p-2 rounded-xl overflow-hidden'>
                  <Tilt options={defaultOptions} className="">
                  
                  <img src="https://i.postimg.cc/j2VkF3QN/Screenshot-2024-07-04-021243.png" alt="" />
                  </Tilt>
                  </div>
                  
                  
                </div>
                <div className='flex-col justify-start items-center px-12 my-3'>
                <h1 className={` text-3xl mb-2 font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>EmpowerManage basically build for manage a company Employee and Hr</h1>
                <p className={`text-xl  my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>In this Admin can make Hr and also Fire. Hr can pay Salay their Employee. Empoyee will submit theri work.</p>
                </div>
                <div className={`flex items-start justify-start  gap-7 font-extrabold text-2xl px-12`}>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'}  p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>React JS</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Firebase</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Node JsI</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>Express JSI</h1>
                 <h1 className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-300'} ${theme === 'light' ? 'text-gray-700 ' : 'bg-gray-600'} p-2 rounded-xl cursor-pointer  hover:animate-bounce`}>MongoDB</h1>
                </div>


                <div className={`flex items-start justify-start my-8  gap-7 font-extrabold text-2xl px-12`}>
                 <a  href='https://thunderous-brioche-852547.netlify.app/' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Live Link
                    <FaLink className={` ${theme === 'light' ? 'text-white ' : 'bg-gray-900'}`}></FaLink>
                 </a>
                 <a href='https://github.com/mr9asif/Employee-Management' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Github Repo
                    <FaGithub className={` ${theme === 'light' ? 'text-white ' : 'bg-gray-900'}`}></FaGithub>
                 </a>
                
                
                
                </div>
             </div>
             </section>
             </Element>

             
    );
};

export default MySkill;