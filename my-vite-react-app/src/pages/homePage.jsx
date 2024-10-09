import React, { useEffect } from 'react';
import image from '../assets/northcost-3.jpg';
import imagetop from '../assets/northcost-33.png';
import image4 from '../assets/Untitled-6.jpg';
import image5 from '../assets/Untitled-98.jpg';
import NavBar from '../components/NavBar';

const HomePage = () => {
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
    <div className="grid grid-rows-3">
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
        <div className="fixed w-full flex justify-between" style={{ zIndex: 5 }}>
          <div className="relative w-full">
            <div className="absolute p-5 px-20 rounded-br-full text-white">
              <div className="relative bg-white rounded text-black p-4">
                <h3 className="absolute right-0 bottom-0 mr-1 text-xs font-semibold">BR</h3>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 text-white p-5 px-20 rounded-bl-full rounded-br-full">
              <NavBar />
            </div>
            <div className="absolute right-0 p-5 px-16 text-white rounded-bl-full">Sign Up</div>
          </div>
        </div>
        <div className="self-center w-full" style={{ zIndex: 3 }}>
          <div className="text-white flex flex-col justify-around transform -translate-y-28">
            <h1 className="text-[12rem] bordered-text welcome-container self-center" style={{ zIndex: 3 }}>
              Welcome
            </h1>
            <h3 className="text-2xl typing-effect font-thin self-center translate-x-36 -translate-y-5" style={{ zIndex: 4 }}>
              Grow Your Business Quickly
            </h3>
          </div>
        </div>
      </div>

        <div
          className='section h-screen bg-cover bg-center flex background'
          style={{ backgroundImage: `url(${image5})` }}
        >
          {/* Content for the second section */}
        </div>

        <div
          className='section h-screen bg-cover bg-center flex background'
          style={{ backgroundImage: `url(${image4})` }}
        >
          {/* Content for the third section */}
        </div>
    </div>
  );
};

export default HomePage;
