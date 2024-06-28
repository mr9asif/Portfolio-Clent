import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "./AuthContext/AuthContex";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Banner = () => {
     const {theme}=useContext(AuthContext);
     console.log(theme)
    return (
        <div className={`max-w-8xl mx-auto px-12 my-4  ${theme === 'light' ? "bg-gray-100" : "bg-gray-800"}  py-8   p-5 rounded-lg lg:flex  justify-between items-center gap-20`}>
             
        <div className="w-[700px]">
        <img className="w-[700px] h-[350px] rounded-lg" src="https://i.postimg.cc/DfcqFXvV/Picsart-24-01-12-09-48-23-046.jpg" alt="" />
       </div>
         
       <div>
       <div>
       <h1 className="text-5xl mb-3 tracking-wider font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Hi, I'm Asif Ali -  
         <span >
        <TypeAnimation
        sequence={[
         
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          ' Junior MERN Stack Developer',
          1000,
          ' Front-end Devoper',
          1000,
          ' React JS Developer',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      />
        </span>
       </h1>
    


         <p className="font-medium text-xl text-gray-600">A versatile developer with expertise in web design, front-end development, and full-stack development using the MERN stack. I am passionate about creating responsive and user-friendly web applications using React.js. With a keen eye for design and a focus on improved user experience, I excel at turning complex problems into simple, beautiful, and intuitive solutions.</p>
    </div>
  
    <div className="flex justify-start items-center gap-5">
        <div className="flex items-center bg-white gap-2 px-4 py-2 border w-[120px] rounded-2xl">
        <button className=" font-semibold  text-blue-400  ">Hire Me</button>
        <GoArrowUpRight  className="font-bold text-xl text-blue-400"/>
        </div>
        <div className="border-blue-500 border-2 ring-1 hover:text-white  text-blue-400 rounded-[50%] p-3  hover:bg-blue-400 dark:ring-white hover:animate-pulse">
        <a target="_blank"   href="">
        <FaFacebook className="text-xl  " />
        </a>
        </div>
        <div className="border-blue-500 border-2 ring-1 hover:text-white  text-blue-400 rounded-[50%] p-3  hover:bg-blue-400 dark:ring-white hover:animate-pulse">
        <a target="_blank"  href="https://www.linkedin.com/in/mr9asif/">
        <FaLinkedin className="text-xl  " />
        </a>
        </div>
        <div className="border-blue-500 border-2 ring-1 hover:text-white  text-blue-400 rounded-[50%] p-3  hover:bg-blue-400 dark:ring-white hover:animate-pulse">
        <a target="_blank"   href="">
        <FaGithub className="text-xl  " />
        </a>
        </div>
    </div>
       </div>
        </div>
    );
};

export default Banner;