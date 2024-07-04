import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

import { Tilt } from 'react-tilt'
import { Element } from 'react-scroll';
import { FaFacebook, FaGithub, FaGlassMartiniAlt, FaLink, FaLinkedin, FaMapMarkerAlt, FaNetworkWired, FaVoicemail } from 'react-icons/fa';

import {
   VerticalTimeline,
   VerticalTimelineElement
 } from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";

 import '../Style.css'
import { CgMail } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAddCall } from 'react-icons/md';
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


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errors, setErrors] = useState({});

const handleSubmit = (event) => {
  event.preventDefault();

  // Basic validation
  const newErrors = {};
  if (!name) newErrors.name = 'Name is required';
  if (!email) newErrors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
  if (!message) newErrors.message = 'Message is required';

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    setErrors({});
    // Handle form submission (e.g., send data to a server)
    console.log('Form submitted:', { name, email, message });
    toast.success('Your Message submitted successfully!');
    setName('');
    setEmail('');
    setMessage('');
  }
};

    return (
        <Element  style={{ height: '100vh' }} className=''>
        {/*My skill*/}
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
            

            {/* ------------projects--------------------------------------*/}


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
                    <FaLink className={` ${theme === 'light' ? 'text-white ' : 'text-gray-900'}`}></FaLink>
                 </a>
                 <a href='https://github.com/mr9asif/Traveler-Website' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Github Repo
                    <FaGithub className={` ${theme === 'light' ? 'text-white ' : 'text-gray-900'}`}></FaGithub>
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
                    <FaLink className={` ${theme === 'light' ? 'text-white ' : 'text-gray-900'}`}></FaLink>
                 </a>
                 <a href='https://github.com/mr9asif/Assignment-11' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Github Repo
                    <FaGithub className={` ${theme === 'light' ? 'text-white ' : 'text-gray-900'}`}></FaGithub>
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
                    <FaLink className={` ${theme === 'light' ? 'text-white ' : 'text-gray-900'}`}></FaLink>
                 </a>
                 <a href='https://github.com/mr9asif/Employee-Management' target='_blank' className={`${theme === 'light' ? 'bg-green-700 ' : 'bg-gray-300'} ${theme === 'light' ? 'text-white ' : 'bg-gray-600'} px-6 py-2 hover:border-green-400 hover:bg-gray-400 hover:text-white rounded-xl cursor-pointer flex items-center gap-2   hover:animate-bounce`}>Github Repo
                    <FaGithub className={` ${theme === 'light' ? 'text-white ' : 'text-gray-900'}`}></FaGithub>
                 </a>
                
                
                
                </div>
             </div>
             </section>


                         {/* ------------education--------------------------------------*/}

                         <section id='about'>
                         <div className='mt-28'>
                         <h1 className={`text-center text-5xl mb-2 font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>Education & Courses</h1>
                         <p className={`text-xl text-center my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>I am a Student of Computer Science</p>
                         </div>

                        <div className='flex items-center justify-center gap-5'>
                        <div className="App">
                        <VerticalTimeline layout="1-column-left">
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work font-bold"
                      
                        contentArrowStyle={{ borderRight: theme === 'light' ? '7px solid #68D391' : '7px solid #fff' }}
                        date="2020 - 2022"
                        iconStyle={{ background: theme === 'light' ? '#68D391' : 'white', color:theme === 'light' ? '#fff' : '#000000', }}
                        icon={<FaNetworkWired />}
                      >
                            <div className='flex flex-col items-start justify-start gap-2'>
                            <h3 className="vertical-timeline-element-title text-2xl font-bold">Higher School Certificate</h3>
                            <h4 className="vertical-timeline-element-subtitle font-semibold text-[14px]">Boropukur Nekmord High School</h4>
                            <p className="vertical-timeline-element-subtitle font-bold">GPA: 5.00</p>
                           
                            </div>
                          </VerticalTimelineElement>
                          
                          
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                      
                        contentArrowStyle={{ borderRight: theme === 'light' ? '7px solid #68D391' : '7px solid #fff' }}
                        date="2023 - present"
                        iconStyle={{ background: theme === 'light' ? '#68D391' : 'white', color:theme === 'light' ? '#fff' : '#000000', }}
                        icon={<FaNetworkWired />}
                      >
                            <div className='flex flex-col items-start justify-start gap-2'>
                            <h3 className="vertical-timeline-element-title text-2xl font-bold">Diploma In Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle font-semibold text-[14px]">Dinajpur polytechnic Institute</h4>
                            
                           
                            </div>
                          </VerticalTimelineElement>
                          
                          
                          
                           
                        
                          
                        </VerticalTimeline>
                      </div>
                       <div>
                       <div className="App">
                       <VerticalTimeline layout="1-column-left">
                       <VerticalTimelineElement
                       className="vertical-timeline-element--work font-bold"
                     
                       contentArrowStyle={{ borderRight: theme === 'light' ? '7px solid #68D391' : '7px solid #fff' }}
                       date="December 2023 - June 2024"
                       iconStyle={{ background: theme === 'light' ? '#68D391' : 'white', color:theme === 'light' ? '#fff' : '#000000', }}
                       icon={<FaNetworkWired />}
                     >
                           <div className='flex flex-col items-start justify-start gap-2'>
                           <h3 className="vertical-timeline-element-title text-2xl font-bold">Complete Web Developement Course</h3>
                           <h4 className="vertical-timeline-element-subtitle font-semibold text-[14px]">Programming Hero</h4>
                           
                          
                           </div>
                         </VerticalTimelineElement>
                         
                         
                     
                         
                         
                          
                       
                         
                       </VerticalTimeline>
                     </div>
                       </div>
                        </div>
                        
                         </section>

                           {/* ------------Contact--------------------------------------*/}
                           <section id='contact' className='max-w-8xl mx-auto '>
                           <ToastContainer />
                             <div>
                             <div className='mt-28 mb-12'>
                             <h1 className={`text-center text-5xl mb-2 font-bold ${theme === 'light' ? 'text-green-500 ' : 'text-white'}`}>Contact</h1>
                             <p className={`text-xl text-center my-4 font-semibold text-gray-300 ${theme === 'light' ? 'text-gray-700' : "text-gray-100"}`}>You can contact with me via this platform</p>
                             </div>

                             <div className='flex items-center justify-center gap-7'>
                                 <div className='w-1/2'>
                                 <form onSubmit={handleSubmit} className=" mx-auto p-4 bg-white shadow-md rounded-lg">
                                 <div className="mb-4">
                                   <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                   <input
                                     type="text"
                                     id="name"
                                     value={name}
                                     onChange={(e) => setName(e.target.value)}
                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                   />
                                   {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                 </div>
                                 <div className="mb-4">
                                   <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                   <input
                                     type="email"
                                     id="email"
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                   />
                                   {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                 </div>
                                 <div className="mb-4">
                                   <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                   <textarea
                                     id="message"
                                     value={message}
                                     onChange={(e) => setMessage(e.target.value)}
                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                   />
                                   {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                                 </div>
                                 <button
                                   type="submit"
                                   className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
                                 >
                                   Submit
                                 </button>
                               </form>
                                 </div>

                                 <div className='w-[45%] flex flex-col justify-start items-start gap-3'>
                                    <p className='text-xl font-semibold text-start mb-4'>Looking to start a new project? I'm here to help! Contact me anytime, day or night, and let's discuss your ideas</p>
                                 
                                 <h1 className='flex items-center gap-2 font-bold text-xl hover:text-green-400 hover:animate-pulse cursor-pointer  hover:border p-3 hover:rounded-xl'>
                                   <CgMail />
                                   asifalibd002@gmail.com
                                 </h1>
                                 <h1 className='flex items-center gap-2 font-bold text-xl hover:text-green-400 hover:animate-pulse cursor-pointer  hover:border p-3 hover:rounded-xl'>
                                   <MdAddCall />
                                  +8801792952161
                                 </h1>
                                 <h1 className='flex items-center gap-2 font-bold text-xl hover:text-green-400 hover:animate-pulse cursor-pointer  hover:border p-3 hover:rounded-xl'>
                                   < FaMapMarkerAlt/>
                                   Dinajpur,Bangladesh
                                 </h1>

                                 <div className='flex items-start gap-3'>
                                 <div className="border-green-500 border-2 ring-1 hover:text-white  text-green-500 rounded-[50%] p-3  hover:bg-green-500 dark:ring-white hover:animate-pulse">
                                 <a target="_blank"   href="">
                                 <FaFacebook className="text-xl  " />
                                 </a>
                                 </div>

                                 <div className="border-green-600 border-2 ring-1 hover:text-white  text-green-500 rounded-[50%] p-3  hover:bg-green-500 dark:ring-white hover:animate-pulse">
                                 <a target="_blank" className="group-hover:rotate-[360deg]" href="https://www.linkedin.com/in/mr9asif/">
                                 <FaLinkedin className="text-xl  " />
                                 </a>
                                 </div>
                                 <div className={`border-green-600 border-2 ring-1 hover:text-white  text-green-600 rounded-[50%] p-3  hover:bg-green-500 dark:ring-white hover:animate-pulse`}>
                                 <a target="_blank"   href="">
                                 <FaGithub className="text-xl  " />
                                 </a>
                                 </div>
                                 </div>


                                 
                                 
                              </div>
                             </div>
                            
                             </div>
                           </section>
                              
                             {/* ------------Footer--------------------------------------*/}
                             <footer className={`py-8 ${theme === 'light' ? "bg-gray-300" : "bg-gray-600"} ${theme === "light"? "text-gray-700" : "text-white"} w-full mt-8`}>
                                <h1 className={` ${theme === "light"? "text-green-600" : "text-white"} text-center text-xl font-bold`}>Asif ALi</h1>
                                <p className='text-center text-[13px] font-semibold'>© 2024 All rights reserved by Md. Asif Ali.</p>
                             </footer>

             </Element>

             
    );
};

export default MySkill;