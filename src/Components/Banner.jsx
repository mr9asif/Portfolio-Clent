import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "./AuthContext/AuthContex";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";






const Banner = () => {
     const {theme}=useContext(AuthContext);
     console.log(theme)
    return (
        <div className={`max-w-8xl mx-auto px-24 my-4    py-8   p-5 rounded-lg lg:flex   justify-between items-center gap-20`}>
             
        
        
       
         
       <div className="flex flex-col justify-start items-start gap-4">
       <div>
       <h1 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : "text-gray-100"}`}>Fron-end Developer</h1>
       <h1 className={`text-5xl mb-3 tracking-wider font-semibold bg-gradient-to-r ${theme === 'light' ? 'text-green-600' : "text-gray-100"}`}>Hi<span className="text-">,</span> I<span className="text-green-600">'</span>m <span className="text-green-600">Asif</span> -  
         <span >
        <TypeAnimation className="text-green-600"
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
    


         <p className={`font-medium text-xl ${theme === 'light' ? 'text-gray-600' : "text-gray-100"}`}>A versatile developer with expertise in web design, front-end development, and full-stack development using the MERN stack. I am passionate about creating responsive and user-friendly web applications using React.js. With a keen eye for design and a focus on improved user experience, I excel at turning complex problems into simple, beautiful, and intuitive solutions.</p>
    </div>
  
    <div className="flex justify-start items-center gap-5">
        <div  className={`flex cursor-pointer items- hover:animate-pulse ${theme === 'light' ? "bg-green-500" : "bg-gray-200"} gap-2 px-4 py-2 border w-[190px] group rounded-2xl`}>
        <button className={`hover:animate-pulse font-semibold  ${theme === 'light' ? 'text-white' : 'text-green-500'} `}>Download Resume</button>
        <MdOutlineFileDownload  className={`font-bold group-hover:animate-bounce text-xl ${theme === 'light' ? 'text-white ' : 'text-green-500'}`}/>
        </div>
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
       <div  className="  p-2">
        <img  className={`w-[800px] p-1 border-4 ${theme === 'light' ? 'border-green-600 ' : 'border-white'}  rounded-[50%] h-[280px] `} src="https://i.postimg.cc/TPbJXW6V/Remove-background-project.png" alt="" />
       </div>
        </div>
    );
};

export default Banner;