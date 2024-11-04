import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import image from '../assets/home.JPG';
import imagetop from '../assets/northcost-33.png';
import image5 from '../assets/12.png';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Logo from '../components/Logo';
import Loading from '../components/Loading';
import { Helmet } from "react-helmet";



const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = '   From Start to Success, We Build the Arc.';
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Animation triggers when 10% of the component is in vie
  });



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
      const maxOffset = window.innerHeight; // Maximum offset value
    
      backgrounds.forEach((background, index) => {
        let offset = scrollPosition * speed;
        if (index === 1) {
          offset -= window.innerHeight;
          offset = Math.max(offset, maxOffset); // Subtract the height of the screen for the second section
        } else {
        offset = Math.min(offset, maxOffset); // Limit the offset to the maximum value
        background.style.backgroundPositionY = `${offset}px`;
        }
      });
    
      overlays.forEach((overlay, index) => {
        let overlayOffset = scrollPosition * overlaySpeed;
        if (index === 1) {
          overlayOffset -= window.innerHeight; // Subtract the height of the screen for the second section
        }
        overlayOffset = Math.min(overlayOffset, maxOffset); // Limit the offset to the maximum value
        overlay.style.backgroundPositionY = `${overlayOffset}px`;
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

  setTimeout(useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length - 1) {
        clearInterval(interval);
      }
    }, 70); // Adjust typing speed here
    return () => clearInterval(interval);
  }, []), 0);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
      <title>Arc Point Agency</title>
      <meta name="description" content="Enhancing brands with top-notch marketing and business solutions." />
      <meta property="og:title" content="Arc Point Agency - Elevate Your Brand" />
      <meta property="og:description" content="Enhancing brands with top-notch marketing and business solutions." />
      <meta property="og:image" content="/src/assets/white A with liquify background_png.png" />
      <meta property="og:url" content="https://arc-point-agency.vercel.app/" />
    </Helmet>
    <div className="grid">
        <div
          className="section h-screen bg-cover bg-center flex background relative overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            zIndex: 1,
          }}
        >
        {/* <div
          className="overlay absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
          style={{
            backgroundImage: `url(${imagetop})`,
            zIndex: 4,
          }}
        ></div> */}
        <div className={`fixed w-full transition-all duration-300 ${scrolled ? 'bg-gray-700 bg-opacity-15 backdrop-blur-xl h-fit' : ''}`} style={{ zIndex: 5 }}>
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
          <div className="text-white flex flex-col justify-around transform">
          <h1 className="text-[5.5rem] sm:text-[9rem] md:[10rem] lg:text-[12rem] font-bold welcome-container self-center" style={{ zIndex: 3 }}>
              Welcome
            </h1>
            <h3 className="translate-x-12 typing-effect text-md lg:text-2xl font-thin self-center lg:translate-x-36" style={{ zIndex: 4 }}>
              {typedText}
            </h3>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <button onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black rounded-full p-2 shadow-lg hover:p-3 hover:shadow-white-glow transition-all floating-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="section2"
        className='section relative h-screen bg-fixed bg-top background flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${image5})`, backgroundPosition: 'top' }}
        ref={sectionRef}
      >
          {/* Content for the second section */}
          <div className='text-white relative w-full font-extrabold flex flex-col justify-center gap-20 flex-wrap items-center'>
            <div className='bg-gray-800 bg-opacity-20 m-5 p-5 lg:p-20 rounded-xl flex flex-col justify-center gap-20'>
              <h2
                ref={ref}
                className={`text-left self-center leading-tight max-w-full md:max-w-3xl 
                  text-[2rem] md:text-[3.1rem] lg:text-[3.5rem] font-semibold transition-opacity duration-1000 transform ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <span className='whitespace-nowrap text-[1.3rem] lg:text-3xl font-bold underline italic'>Your success story begins here.</span><br/> Let's build your brand, create impactful content, and drive results that matter.
              </h2>
              <Link to="/packages" className='bg-black p-5 self-center rounded-xl bg-opacity-20 hover:bg-white hover:text-black transform hover:shadow-white-glow transition-all'>Discover Our Packages</Link>
              </div>
          </div>
        </div>

      <Footer/>

      {/* Burger Menu */}
      <div className="fixed top-0 right-0 p-5 z-50 md:hidden">
      <NavBar />
      </div>
    </div>
    </>
  );
};

export default HomePage;
