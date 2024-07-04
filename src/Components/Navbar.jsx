import React, { useContext, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from './AuthContext/AuthContex';
import './Style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'blue' : 'light');
  };

  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div>
      <div className={`navbar lg:px-12 mx-auto shadow-lg max-w-8xl py-6 w-full fixed top-0 z-[999] h-[80px] ${theme === 'light' ? 'bg-white' : 'bg-gray-900 '} ${theme === 'light' ? 'text-black' : 'text-white'} `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ${isOpen ? 'block lg:w-52' : 'hidden lg:block'}`}>
              <ScrollLink to="skills" smooth={true} duration={500} className="text-xl font-bold hover-underline">Skills</ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} className="text-xl font-bold hover-underline">Projects</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="text-xl font-bold hover-underline">About Me</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-xl font-bold hover-underline">Contact</ScrollLink>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <h1 className={`text-4xl font-semibold ${theme === 'light' ? 'text-green-600' : 'text-white'}`}>
              Asif <span className="text-custom-green">.</span>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-between lg:gap-6">
            <ScrollLink to="skills" activeClass="active" offset={-78} smooth={true} duration={500} className={`font-bold nav-link ${theme === 'light' ? 'text-black' : 'text-white'} text-xl font-bold hover-underline hover:text-custom-green cursor-pointer text-[18px]`}>Skills</ScrollLink>
            <ScrollLink to="projects" smooth={true} offset={-78} duration={500} className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'} text-xl font-bold hover:text-green-600 cursor-pointer hover-underline text-[18px]`}>Projects</ScrollLink>
            <ScrollLink to="about" offset={-78} smooth={true} duration={500} onSetActive={handleSetActive} className={`font-bold ${activeLink === 'education' ? 'active' : ''} ${theme === 'light' ? 'text-black' : 'text-white'} text-xl font-bold hover:text-custom-green cursor-pointer hover-underline text-[18px]`}>About Me</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'} text-xl font-bold hover:text-custom-green cursor-pointer hover-underline text-[18px]`}>Contact</ScrollLink>
          </ul>
        </div>
        <div className="navbar-end items-center gap-8">
          <div className={`cursor-pointer group border rounded-xl px-2 lg:px-8 py-3 ${theme === 'light' ? 'bg-green-500' : 'bg-gray-300'} flex items-center gap-2`}>
            <a href="https://www.linkedin.com/in/mr9asif" target="_blank" rel="noopener noreferrer" className={`text-lg hover:animate-pulse font-bold ${theme === 'light' ? 'text-white' : 'text-black'}`}>
              Hire me
            </a>
            <span className="text-lg text-gradient-to-r from-cyan-500 to-blue-500">
              <FaArrowRight className={`font-bold group-hover:animate-bounce text-xl ${theme === 'light' ? 'text-white' : 'text-black'}`} />
            </span>
          </div>
          <div>
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleThemeChange} checked={theme === 'blue'} />
              <svg className="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg className="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.73-3.37,1,1,0,0,0-1.19-1.33A10,10,0,1,0,22.78,14.19,1,1,0,0,0,21.64,13Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
