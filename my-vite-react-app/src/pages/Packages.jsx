import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import image from '../assets/laser.jpg';
import packages from '../data/packagesData';
import Loading from '../components/Loading';


const Packages = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    const handleChoosePlan = (plan) => {
        navigate('/contact-us', { state: { selectedPlan: plan, packages } });
    };

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
        <div>
            <div className='flex flex-col min-h-screen bg-cover bg-center bg-black' style={{ backgroundImage: `url(${image})` }}>
                <div className={`fixed w-full z-50 ${scrolled ? 'bg-gray-700 bg-opacity-15 backdrop-blur-xl h-fit' : ''}`}>
                    <div className="m-2 flex justify-between items-center">
                        <Logo />
                        <div className="text-white mr-5 rounded-bl-full rounded-br-full">
                            <NavBar />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-grow items-center lg:gap-20 mt-32 lg:mt-40'>
                <h1 className='text-6xl lg:text-8xl text-white font-semibold mb-16'>Our Packages</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 w-full px-5'>
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`${pkg.color} flex flex-col justify-between text-white p-6 bg-opacity-15 backdrop-blur-xl rounded-lg shadow-lg ${index === packages.length - 1 ? 'col-span-1 md:col-span-2 flex-row lg:col-span-3' : ''}`}
                        >
                            <div className='flex flex-col'>
                                <h1 className={`text-2xl font-bold self-center mb-2 ${index === packages.length - 1 ? 'text-4xl self-start' : ''}`}>{pkg.title}</h1>
                                <div className={`flex flex-col gap-4 w-full `}>
                                    <h2 className={`text-lg font-semibold ${index === packages.length - 1 ? 'text-4xl items-center hidden' : ''}`}>
                                        {index === packages.length - 1 ? 'Custom Package' : 'Features:'}
                                    </h2>
                                    <ol className='list-disc list-inside'>
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className='mb-1'>{feature}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 items-center w-full mt-4'>
                                <h2 className={`border-l p-4 text-xl mb-4 font-light text-left text-[1rem] ${index === packages.length - 1 ? 'max-w-6xl text-center' : ''}`}>{pkg.subtitle}</h2>
                                <h2 className='text-2xl font-bold'>{pkg.price}</h2>
                                <button
                                    className={`border text-white py-2 px-4 w-full lg:w-10 text-nowrap rounded-full hover:w-full transform transition-all ${index === packages.length - 1 ? 'max-w-xl w-full text-center' : ''}`}
                                    onClick={() => handleChoosePlan(pkg)}
                                >
                                    {pkg.buttonText}
                                </button>
                                </div>
                            </div>
                        ))}
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

export default Packages;