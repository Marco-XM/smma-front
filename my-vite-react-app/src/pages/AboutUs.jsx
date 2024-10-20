import React, { useState, useEffect } from 'react';
import image from '../assets/smma.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Logo from '../components/Logo';
import Touch10Icon from '../components/touch-10-stroke-rounded'; // Import the Touch10Icon component
import MouseLeftClick04Icon from '../components/mouse-left-click-04-stroke-rounded'; // Import the MouseLeftClick04Icon component
import Loading from '../components/Loading';


const AboutUs = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);



  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

useEffect(() => {
  const backgroundImg = new Image();
  const overlayImg = new Image();

  backgroundImg.src = image;

  const handleImageLoad = () => {
    setLoading(false);
  };

  backgroundImg.onload = handleImageLoad;
  overlayImg.onload = handleImageLoad;
}, []);

if (loading) {
  return <Loading />;
}

  return (
    <div className='flex flex-col min-h-screen lg:gap-20 bg-cover' style={{ backgroundImage: `url(${image})` }}>
      <div className={`fixed w-full z-50 ${scrolled ? 'bg-gray-700 bg-opacity-15 backdrop-blur-xl h-fit' : ''}`}> {/* Add z-index to ensure NavBar stays on top */}
        <div className="m-2 flex justify-between">
          <Logo />
          <div className="text-white mr-5 self-center rounded-bl-full rounded-br-full  md:block">
            <NavBar />
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-grow m-10 items-center gap-48 mt-20'> {/* Remove relative positioning */}
        <h1 className='text-6xl lg:text-8xl text-white font-semibold mt-20'>About Us</h1>
        <div className='flex flex-col lg:flex-row max-w-6xl gap-20 lg:gap-20 mb-5'>
          <div className='relative bg-white rounded-xl cursor-pointer bg-opacity-0' onClick={toggleVisibility1}>
            <p className='text-white text-left text-sm lg:text-lg md:text-md font-semibold bg-blue-500 bg-opacity-25 p-10 rounded-xl'>
              At Arc Point, we believe that every brand has a unique story waiting to be told. Our mission is to help businesses, especially young entrepreneurs, craft that narrative through tailored marketing strategies and innovative digital solutions.
            </p>
            <div className={`absolute flex flex-col justify-center items-center w-full bg-white bottom-0 left-0 rounded-xl overflow-hidden transform transition-all duration-500 h-full bg-opacity-0 ${isVisible1 ? 'backdrop-blur-xl' : 'backdrop-blur-0 opacity-0'}`}>
              <h1 className='self-center text-2xl sm:text-4xl p-6 text-white font-thin'>What We Believe</h1>
              {isMobile ? (
                <Touch10Icon className='text-white self-center text-2xl' />
              ) : (
                <MouseLeftClick04Icon className='text-white self-center text-2xl' />
              )}
            </div>
          </div>
          <div className='relative bg-white rounded-xl cursor-pointer bg-opacity-0' onClick={toggleVisibility2}>
            <p className='text-white text-left text-sm lg:text-lg md:text-md font-semibold bg-blue-500 bg-opacity-25 p-10 rounded-xl'>
              Founded with a passion for creativity and growth, we combine strategic thinking with a deep understanding of modern digital landscapes. From content creation to community management, every service we offer is designed to guide you through each chapter of your business journey. Together, From Start to Success, We Build the Arc.
            </p>
            <div className={`absolute flex flex-col justify-center items-center w-full bg-white bottom-0 left-0 rounded-xl overflow-hidden transform transition-all duration-500 h-full bg-opacity-0 ${isVisible2 ? 'backdrop-blur-xl' : 'backdrop-blur-0 opacity-0'}`}>
              <h1 className='self-center text-2xl sm:text-4xl p-6 text-white font-thin'>Founded with a passion for creativity and growth...</h1>
              {isMobile ? (
                <Touch10Icon className='text-white self-center text-2xl' />
              ) : (
                <MouseLeftClick04Icon className='text-white self-center text-2xl' />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="fixed top-0 right-0 p-5 z-50 md:hidden">
            <NavBar />
      </div>
    </div>
  );
};

export default AboutUs;