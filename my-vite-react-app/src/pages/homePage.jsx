import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/northcost-3.jpg';
import imagetop from '../assets/northcost-33.png';
import image5 from '../assets/Untitled-98.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Logo from '../components/Logo';

const HomePage = () => {
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

      // Update the scrolled state based on the scroll position
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        <div className={`fixed w-full ${scrolled ? 'bg-gray-700 bg-opacity-15 backdrop-blur-xl h-fit' : ''}`} style={{ zIndex: 5 }}>
          <div className=" m-2 flex justify-between">
            {/* <div className="flex pt-3 pl-3 pb-3 justify-center">
              <div className='triangleOut relative flex w-full h-full items-center'>
                <div className='color'></div>
                <div className='triangleIn flex absolute translate-x-[2.5px] translate-y-[3px] self-center'>
                </div>
              </div>
            </div> */}
            <Logo />
            <div className="text-white mr-5 self-center rounded-bl-full rounded-br-full hidden md:block">
              <NavBar />
            </div>
          </div>
        </div>
        <div className="self-center w-full" style={{ zIndex: 3 }}>
          <div className="text-white flex flex-col justify-around transform -translate-y-28">
          <h1 className="text-[5.5rem] sm:text-[9rem] md:[10rem] lg:text-[12rem] bordered-text welcome-container self-center" style={{ zIndex: 3 }}>
              Welcome
            </h1>
            <h3 className="translate-x-20 lg:text-2xl typing-effect font-thin self-center lg:translate-x-36 -translate-y-5" style={{ zIndex: 4 }}>
              From Start to Success, We Build the Arc
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

      <Footer/>

      {/* Burger Menu */}
      <div className="fixed top-0 right-0 p-5 z-50 md:hidden">
      <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
