import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import packages from '../data/packagesData';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleContactUsClick = () => {
        navigate('/contact-us', { state: { packages } });
    };

    return (
        <div className="w-full z-50">
            <div className="m-5">
                <div className="hidden md:flex flex-1 justify-end items-center space-x-10 text-nowrap">
                    <Link to="/services" className="text-white hover:text-gray-200 transition-all">Services</Link>
                    <Link to="/packages" className="text-white hover:text-gray-200 transition-all">Packages & Pricing</Link>
                    <button onClick={handleContactUsClick} className="text-white hover:text-gray-200 transition-all">Contact Us</button>
                    <Link to="/about" className="text-white hover:text-gray-200 transform transition-all">About Us</Link>
                </div>
                <div className="fixed top-0 right-0 m-8 z-50 md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute flex flex-col gap-10 top-0 right-0 bg-gray-700 bg-opacity-30 mt-12 mr-11 rounded-lg shadow-lg items-center p-5 shadow-image text-nowrap">
                    <Link to="/services" className="text-white hover:text-gray-200 transition-all">Services</Link>
                    <Link to="/packages" className="text-white hover:text-gray-200 transition-all">Packages & Pricing</Link>
                    <button onClick={handleContactUsClick} className="text-white hover:text-gray-200 transition-all">Contact Us</button>
                    <Link to="/about" className="text-white hover:text-gray-200 transform transition-all">About Us</Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;