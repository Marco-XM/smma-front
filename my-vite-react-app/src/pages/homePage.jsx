import React, { useEffect } from 'react';
import image from '../assets/northcost-3.jpg';
import imagetop from '../assets/northcost-33.png';
import image2 from '../assets/20210402_225934.jpg';
import image3 from '../assets/20230202_025321.jpg';
import NavBar from '../components/NavBar';

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('.parallax');
      const topImage = document.querySelector('.top-image');

      sections.forEach((section) => {
        const speed = 0.25; // Adjust the speed factor to make the background scroll slower
        const offset = scrollPosition * speed;
        section.style.backgroundPositionY = `${offset}px`;
      });

      if (topImage) {
        const topImageSpeed = 0.25; // Adjust the speed factor for the top image
        const topImageOffset = scrollPosition * topImageSpeed;
        topImage.style.transform = `translateY(${topImageOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='grid grid-rows-3'>
        <div
          className='section h-screen bg-cover bg-center flex parallax relative overflow-hidden'
          style={{ backgroundImage: `url(${image})` }}
        >
          <img
            src={imagetop}
            alt="Top Overlay"
            className='top-image over absolute bottom-0 left-0 w-full h-full object-cover object-center shadow-image'
            style={{ zIndex: 1 }}
          />
          <div className='fixed w-full flex justify-between'>
            <div className='relative w-full'>
              <div className='absolute p-5 px-20 rounded-br-full text-white'>
                <div className='relative bg-white rounded text-black p-4'>
                  <h3 className='absolute right-0 bottom-0 mr-1 text-xs font-semibold'>BR</h3>
                </div>
              </div>
              <div className='absolute left-1/2 transform -translate-x-1/2 top-0 text-white p-5 px-20 rounded-bl-full rounded-br-full'>
                <NavBar />
              </div>
              <div className='absolute right-0 p-5 px-16 text-white rounded-bl-full'>Sign Up</div>
            </div>
          </div>
          <div className='self-center w-full flex justify-center '>
            <div className='text-white flex flex-col'>
              <h1 className='text-[12rem] -translate-y-36 bordered-text welcome-container'>Welcome</h1>
              <h3 className='text-3xl self-center typing-effect translate-x-48 -translate-y-32 font-bold' style={{ zIndex: 2 }}>Grow Your Business Quickly</h3>
            </div>
          </div>
        </div>
        <div
          className='section h-screen bg-cover bg-center flex parallax'
          style={{ backgroundImage: `url(${image2})` }}
        >
          {/* Content for the second section */}
        </div>
        <div
          className='section h-screen bg-cover bg-center flex parallax'
          style={{ backgroundImage: `url(${image3})` }}
        >
          {/* Content for the third section */}
        </div>
      </div>
    </>
  );
};

export default HomePage;