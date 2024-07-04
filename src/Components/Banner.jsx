import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "./AuthContext/AuthContex";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { Tilt } from "react-tilt";
import { downloadTextFile } from "./DownloadTextFile";

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

const handleDownload = () => {
  const filename = 'example.txt';
  const content = 'The Resume is Coming....';
  downloadTextFile(filename, content);
};


const Banner = () => {
     const {theme}=useContext(AuthContext);
     console.log(theme)
    return (
        <div className={`w-[98%]  lg:max-w-8xl mx-auto lg:px-24 my-8  pt-32   py-8   p-5 rounded-lg md:flex lg:flex   justify-between items-center  lg:gap-20`}>
             
        <Tilt className="cursor-pointer" options={defaultOptions}>
        <div  className="  p-2">
        <img  className={` md:w-[40%] lg:w-[800px] p-1 border-4 ${theme === 'light' ? 'border-green-600 ' : 'border-white'}  rounded-4xl lg:rounded-[50%] lg:h-[280px] `} src="https://i.postimg.cc/TPbJXW6V/Remove-background-project.png" alt="" />
       </div>
        </Tilt>
        
       
         
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
    


         <p className={`font-medium text-xl ${theme === 'light' ? 'text-gray-600' : "text-gray-100"}`}>As a multifaceted developer, I specialize in web design, front-end programming, and full-stack development using the MERN stack. I am enthusiastic about building responsive and user-centric web applications with React.js. With a sharp eye for aesthetics and a dedication to enhancing user interaction, I excel in converting intricate issues into streamlined, visually appealing, and user-friendly solutions.</p>
    </div>
  
    <div className="flex justify-start items-center gap-5">
        <div  onClick={handleDownload}  className={`flex cursor-pointer items- hover:animate-pulse ${theme === 'light' ? "bg-green-500" : "bg-gray-200"} gap-2 px-4 py-2 border w-[190px] group rounded-2xl`}>
        <button  className={`hover:animate-pulse font-semibold  ${theme === 'light' ? 'text-white' : 'text-green-500'} `}>Download Resume</button>
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
     
        </div>
    );
};

export default Banner;