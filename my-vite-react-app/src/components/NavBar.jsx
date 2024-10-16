import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="w-full z-50">
            <div className="m-5">
                <div className="hidden md:flex flex-1 justify-end items-center space-x-10 text-nowrap">
                    <Link to="/services" className="text-white hover:text-gray-200 transition-all">Services</Link>
                    <Link to="/packages" className="text-white hover:text-gray-200 transition-all">Packages</Link>
                    <Link to="/contact" className="text-white hover:text-gray-200 transition-all">Contact Us</Link>
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
                <div className="absolute flex flex-col gap-10 top-0 right-0 text-white mt-12 mr-11 rounded-lg shadow-lg p-5 shadow-image text-nowrap">
                    <button onClick={toggleMenu}>Services</button>
                    <button onClick={toggleMenu}>Packages</button>
                    <button onClick={toggleMenu}>Contact Us</button>
                    <button onClick={handleNavigateToAbout}>About Us</button>
                </div>
            )}
        </div>
    );
};

export default NavBar;