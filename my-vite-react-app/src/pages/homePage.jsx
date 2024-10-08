import React, {useEffect} from 'react'
import image from '../assets/northcost-3.jpg'
import image2 from '../assets/20210402_225934.jpg'
import image3 from '../assets/20230202_025321.jpg'
import NavBar from '../components/NavBar'


const HomePage = () => {
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.parallax');
          sections.forEach(section => {
            const scrollPosition = window.pageYOffset;
            section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
        <div className='grid grid-rows-3'>
            <div className='section h-screen bg-cover bg-center flex parallax'  style={{ backgroundImage: `url(${image})` }}>
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
                <div className='self-center m-10'>
                    <div className='text-white flex flex-col'>
                        <h1 className='text-9xl'>Welcome.</h1>
                        <h3 className='text-3xl self-center typing-effect w-fit'>Grow Your Business Quickly</h3>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className='section h-screen bg-cover bg-center flex parallax'  style={{ backgroundImage: `url(${image2})` }}>
                
                </div>
            </div>
            <div>
                <div className='section h-screen bg-cover bg-center flex parallax'  style={{ backgroundImage: `url(${image3})` }}>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage;
