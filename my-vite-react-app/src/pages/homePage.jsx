import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/northcost-3.jpg';
import imagetop from '../assets/northcost-33.png';
import image5 from '../assets/Untitled-98.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Logo from '../components/Logo';
import Loading from '../components/Loading';


const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'From Start to Success, We Build the Arc';


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

  useEffect(() => {
    const backgroundImg = new Image();
    const overlayImg = new Image();

    backgroundImg.src = image;
    overlayImg.src = imagetop;

    const handleImageLoad = () => {
      setLoading(false);
    };

    backgroundImg.onload = handleImageLoad;
    overlayImg.onload = handleImageLoad;
  }, []);

  useEffect(() => {
    let index = -1;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length - 1 ) {
        clearInterval(interval);
      }
    }, 70); // Adjust typing speed here
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
          <h1 className="text-[5.5rem] sm:text-[9rem] md:[10rem] lg:text-[12rem] font-bold welcome-container self-center" style={{ zIndex: 3 }}>
              Welcome
            </h1>
            <h3 className="translate-x-20 typing-effect text-xs lg:text-2xl font-thin self-center lg:translate-x-36 -translate-y-5" style={{ zIndex: 4 }}>
              {typedText}
            </h3>
          </div>
        </div>
      </div>

        <div
          className='section relative h-screen bg-fixed bg-center flex background'
          style={{ backgroundImage: `url(${image5})` }}
        >
          {/* Content for the second section */}
          <div className='text-white text-8xl font-extrabold flex justify-center items-center'>
              <h2 className='self-center text-center bg-gray-600 bg-opacity-25'>Your success story begins here. Let's build your brand, create impactful content, and drive results that matter.</h2>
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
