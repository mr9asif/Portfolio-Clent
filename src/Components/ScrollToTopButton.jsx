import React, { useContext } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { animateScroll as scroll } from 'react-scroll';
import { AuthContext } from './AuthContext/AuthContex';

const ScrollToTopButton = () => {
  const { theme } = useContext(AuthContext);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,  // Scroll duration in milliseconds
      smooth: 'easeInOutQuart'  // Easing function
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-4 bg-green-500  px-4 py-2 rounded-full shadow-lg focus:outline-none 
                  ${theme === 'light' ? 'hover:bg-green-600' : 'hover:bg-gray-400'} 
                   ${theme === 'light' ? 'bg-green-600' : 'bg-white'}
                   ${theme === 'light' ? 'text-white' : 'text-black'}
                  `}
      onClick={scrollToTop}
    >
      <BiArrowToTop className="text-xl font-bold" />
    </button>
  );
};

export default ScrollToTopButton;
