import React, { useEffect, useState } from 'react';
import image from '../assets/northcost-3.jpg';
import imagetop from '../assets/northcost-33.png';
import image4 from '../assets/Untitled-6.jpg';
import image5 from '../assets/Untitled-98.jpg';
import NavBar from '../components/NavBar';
import CurvedTriangleLogo from '../components/Logo';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const setInitialPosition = () => {
      const overlays = document.querySelectorAll('.overlay');
      const backgrounds = document.querySelectorAll('.background');

      backgrounds.forEach(background => {
        background.style.backgroundPositionY = `0px`;
      });
      overlays.forEach(overlay => {
        overlay.style.backgroundPositionY = `0px`;
      });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const overlays = document.querySelectorAll('.overlay');
      const backgrounds = document.querySelectorAll('.background');

      const speed = 0.25; // Speed factor for the background parallax effect
      const overlaySpeed = 0.25; // Speed factor for the overlay

      backgrounds.forEach((background) => {
        const offset = scrollPosition * speed; 
        background.style.backgroundPositionY  = `${offset}px`;
      });

      overlays.forEach((overlay) => {
        const overlayOffset = scrollPosition * overlaySpeed; 
        overlay.style.backgroundPositionY  = `${overlayOffset}px`;
      });
    };

    setInitialPosition();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="grid">
        <div
          className="section h-screen bg-cover bg-center flex background relative overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            zIndex: 1,
          }}
        >
        <div
          className="overlay absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
          style={{
            backgroundImage: `url(${imagetop})`,
            zIndex: 4,
          }}
        ></div>
        <div className={`fixed w-full flex justify-between ${scrolled ? 'bg-white h-20' : ''}`} style={{ zIndex: 5 }}>
          <div className="relative w-full m-3 flex">
            <div className="flex pt-3 pl-3 pb-3 justify-center">
              <div className='triangleOut relative flex w-full h-full items-center'>
                <div className='color'></div>
                {/* <div className='triangleIn flex absolute translate-x-[2.5px] translate-y-[3px] self-center'>
                </div> */}
              </div>
            </div>
            <h1 className='self-center text-[2rem] font-semibold text-white'>RC</h1>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 text-white p-5 px-20 rounded-bl-full rounded-br-full hidden md:block">
              <NavBar />
            </div>
            <div className="absolute right-0 p-5 px-16 text-white rounded-bl-full hidden md:block">Sign Up</div>
          </div>
        </div>
        <div className="self-center w-full" style={{ zIndex: 3 }}>
          <div className="text-white flex flex-col justify-around transform -translate-y-28">
          <h1 className="text-[5.5rem] sm:text-[9rem] md:[10rem] lg:text-[12rem] bordered-text welcome-container self-center" style={{ zIndex: 3 }}>
              Welcome
            </h1>
            <h3 className="translate-x-20 lg:text-2xl typing-effect font-thin self-center lg:translate-x-36 -translate-y-5" style={{ zIndex: 4 }}>
              Grow Your Business Quickly
            </h3>
          </div>
        </div>
      </div>

        <div
          className='section relative h-screen bg-cover bg-center flex background'
          style={{ backgroundImage: `url(${image5})` }}
        >
          {/* Content for the second section */}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          className='section p-20 h-fit bg-cover bg-center background'
          style={{ backgroundColor: `black` }}
        >
          {/* Content for the third section */}
          <div className='flex flex-col justify-center'>
            <div className='flex justify-around'>
              <div className='self-center'>
                <div>
                  <div className='triangleFooter relative flex w-full h-full'>
                  </div>
                </div>
              </div>
              <div className='self-center m-20'>
                <h1 className="text-4xl text-white text-center">About Us</h1>
                <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero nec n</p>
              </div>
            </div>
            <div className="flex space-x-10 self-center mb-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-white text-3xl hover:text-blue-400 transform transition-all"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="relative inline-block">
                <i className="fab fa-instagram text-white text-3xl relative z-10 icon-gradient"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-white text-3xl hover:text-blue-500 transform transition-all"></i>
              </a>
            </div>
          </div>
        </div>
      {/* Burger Menu */}
      <div className="fixed top-0 right-0 p-5 z-50 md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute flex flex-col gap-10 top-0 right-0 text-white mt-12 mr-5 rounded-lg shadow-lg p-5 shadow-image">
            <NavBar />
            <button className="right-0 px-16 rounded-bl-full whitespace-nowrap">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
