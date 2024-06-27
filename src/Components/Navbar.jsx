import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar lg:px-12 mx-auto shadow-md max-w-8xl my-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <ScrollLink to="home" smooth={true} duration={500} className="text-xl font-bold hover-underline">Home</ScrollLink>
              <ScrollLink to="skills" smooth={true} duration={500} className="text-xl font-bold hover-underline">Skills</ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} className="text-xl font-bold hover-underline">Projects</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-xl font-bold hover-underline">Contact</ScrollLink>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            ASIF ALI
          </h1>
          
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-between lg:gap-6">
            <ScrollLink to="home" smooth={true} duration={500} className="font-bold text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-clip-text hover:text-transparent hover-underline text-[18px]" activeClass="font-extrabold text-orange-400 underline">Skills</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="font-bold text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-clip-text hover:text-transparent hover-underline text-[18px]" activeClass="font-bold text-orange-400 underline">Projects</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="font-bold text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-clip-text hover:text-transparent hover-underline text-[18px]" activeClass="font-bold text-orange-400 underline">Works</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="font-bold text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-clip-text hover:text-transparent hover-underline text-[18px]" activeClass="font-bold text-orange-400 underline">Testimonials</ScrollLink>
            <ScrollLink  to="contact" smooth={true} duration={500} className=" font-bold text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-clip-text hover:text-transparent hover-underline text-[18px]" activeClass="font-bold text-orange-400 underline" >Contact</ScrollLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
