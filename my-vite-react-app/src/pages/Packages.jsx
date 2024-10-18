import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from '../assets/Untitled-2.jpg';
import packages from '../data/packagesData';

const Packages = () => {
    const navigate = useNavigate();

    const handleChoosePlan = (plan) => {
        navigate('/contact-us', { state: { selectedPlan: plan, packages } });
    };

    const buttonColors = [{
        color: 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500',
        buttonColor: 'from-red-600 via-orange-600 to-yellow-600'
    }, {
        color: 'bg-gradient-to-r from-green-500 via-blue-500 to-purple-500',
        buttonColor: 'from-green-600 via-blue-600 to-purple-600'
    }, {
        color: 'bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500',
        buttonColor: 'from-yellow-600 via-pink-600 to-red-600'
    }]
    
    

    return (
        <div className='flex flex-col min-h-screen bg-cover bg-center bg-black' style={{ backgroundImage: `url(${Image})` }}>
            <div className='fixed w-full z-50'>
                <div className="m-2 flex justify-between items-center">
                    <Logo />
                    <div className="text-white mr-5 rounded-bl-full rounded-br-full">
                        <NavBar />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center lg:gap-20 mt-32 lg:mt-40'>
                <h1 className='text-6xl lg:text-8xl text-white font-semibold mb-16'>Our Packages</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 w-full px-5'>
                    {packages.map((pkg, index) => (
                        <div key={index} className={`${pkg.color} flex flex-col justify-between text-white p-6 bg-opacity-15 backdrop-blur-xl rounded-lg shadow-lg`}>
                            <div>
                                <h1 className='text-2xl font-bold mb-2'>{pkg.title}</h1>
                                <h2 className='text-xl mb-4'>{pkg.subtitle}</h2>
                                <div>
                                    <h2 className='text-lg font-semibold mb-2'>Features:</h2>
                                    <ol className='list-disc list-inside'>
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className='mb-1'>{feature}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 items-center w-full mt-4'>
                                <h2 className='text-2xl font-bold'>{pkg.price}</h2>
                                <button
                                    className={`border text-white py-2 px-4 w-10 text-nowrap rounded-full ${buttonColors.color} hover:${buttonColors.color} hover:w-full transform transition-all`}
                                    onClick={() => handleChoosePlan(pkg)}
                                >
                                    {pkg.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Packages;