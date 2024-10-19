import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import packages from '../data/packagesData';


const Footer = () => {
    const navigate = useNavigate();

    const handleNavigateToAbout = () => {
        navigate('/about');
    }

    const handleContactUsClick = () => {
        navigate('/contact-us', { state: { packages } });
    };

    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col md:gap-10 lg:flex-row text-nowrap justify-between items-center">
                {/* Top left section for Arc Point Marketing */}
                <div className="flex flex-col gap-5 mb-10 md:mb-0 md:w-1/3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl self-center">Arc Point Marketing</h1>
                    <p className="text-sm sm:text-base md:text-lg self-center">From Start to Success, We Build the Arc</p>
                </div>

                {/* Centered buttons section */}
                <div className="flex flex-col items-center mb-10 md:mb-0 md:w-1/3">
                    <div className="flex space-x-2 sm:space-x-3 md:space-x-5 text-center">
                        <Link to="/services" className="text-white hover:text-gray-200 transition-all">Services</Link>
                        <span>|</span>
                        <Link to="/packages" className="text-white hover:text-gray-200 transition-all">Packages & Pricing</Link>
                        <span>|</span>
                        <button onClick={handleContactUsClick} className="text-white hover:text-gray-200 transition-all">Contact Us</button>
                        <span>|</span>
                        <Link to="/about" className="text-white hover:text-gray-200 transform transition-all">About Us</Link>
                    </div>
                </div>

                {/* Bottom centered social media section */}
                <div className="flex flex-col items-center md:w-1/3">
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-5">
                      <h3 className="text-xs sm:text-sm md:text-base mb-0">Follow us on:</h3>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f text-2xl sm:text-2xl md:text-3xl hover:text-blue-500 transform transition-all"></i>
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='instagram-icon transform transition-all'>
                      <svg className="w-9 h-9 transform transition-all" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#f09433" />
                                        <stop offset="25%" stopColor="#e6683c" />
                                        <stop offset="50%" stopColor="#dc2743" />
                                        <stop offset="75%" stopColor="#cc2366" />
                                        <stop offset="100%" stopColor="#bc1888" />
                                    </linearGradient>
                                </defs>
                                <path className="instagram-path" d="M7.75 2H16.25C19.0972 2 21.25 4.15279 21.25 7V16.25C21.25 19.0972 19.0972 21.25 16.25 21.25H7.75C4.90279 21.25 2.75 19.0972 2.75 16.25V7C2.75 4.15279 4.90279 2 7.75 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="instagram-path" d="M16.25 11.25C16.25 13.3211 14.5711 15 12.5 15C10.4289 15 8.75 13.3211 8.75 11.25C8.75 9.17893 10.4289 7.5 12.5 7.5C14.5711 7.5 16.25 9.17893 16.25 11.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="instagram-dot" d="M17.75 6.25H17.76" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in text-2xl sm:text-2xl md:text-3xl hover:text-blue-400 transform transition-all"></i>
                      </a>
                  </div>
              </div>
            </div>

            {/* Copyright section */}
            <div className="mt-10 text-center text-xs sm:text-sm md:text-base">
                © {new Date().getFullYear()} Arc Point Marekting. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;