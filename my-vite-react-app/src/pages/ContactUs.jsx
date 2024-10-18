import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    const location = useLocation();
    const { selectedPlan, packages } = location.state || {};
    const [selectedPlanState, setSelectedPlanState] = useState(selectedPlan);

    const handlePlanChange = (event) => {
        const selectedPlanTitle = event.target.value;
        const newSelectedPlan = packages.find(pkg => pkg.title === selectedPlanTitle);
        setSelectedPlanState(newSelectedPlan);
    };

    return (
        <div className='flex flex-col min-h-screen bg-cover bg-center bg-black'>
            <div className='fixed w-full z-50'>
                <div className="m-2 flex justify-between items-center">
                    <Logo />
                    <div className="text-white mr-5 rounded-bl-full rounded-br-full">
                        <NavBar />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center lg:gap-20 mt-32 lg:mt-40'>
                <h1 className='text-6xl lg:text-8xl text-white font-semibold mb-16'>Contact Us</h1>

                <div className='flex flex-col lg:flex-row gap-10 w-full max-w-6xl'>
                    <div className='bg-white bg-opacity-15 backdrop-blur-xl p-10 rounded-lg shadow-lg w-full lg:w-2/3'>
                        <form className='flex flex-col gap-5'>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <input type='text' placeholder='Your Name' className='flex-1 p-4 rounded-md bg-gray-800 text-white' />
                                <input type='email' placeholder='Your Email' className='flex-1 p-4 rounded-md bg-gray-800 text-white' />
                            </div>
                            <input type='text' placeholder='Subject' className='p-4 rounded-md bg-gray-800 text-white' />
                            <textarea placeholder='Your Message' className='p-4 rounded-md bg-gray-800 text-white h-40'></textarea>
                            <button type='submit' className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white py-4 rounded-md hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition-all'>Send Message</button>
                        </form>
                    </div>

                    <div className='flex flex-col gap-5 w-full lg:w-1/3'>
                        <select
                            className='p-4 rounded-md bg-gray-800 text-white'
                            value={selectedPlanState ? selectedPlanState.title : ''}
                            onChange={handlePlanChange}
                        >
                            <option value='' disabled>Select a plan</option>
                            {packages.map((pkg, index) => (
                                <option key={index} value={pkg.title}>{pkg.title}</option>
                            ))}
                        </select>
                        {selectedPlanState && (
                            <div className={`${selectedPlanState.color} flex flex-col justify-between text-white p-6 bg-opacity-15 backdrop-blur-xl rounded-lg shadow-lg`}>
                                <div>
                                    <h1 className='text-2xl font-bold mb-2'>{selectedPlanState.title}</h1>
                                    <h2 className='text-xl mb-4'>{selectedPlanState.subtitle}</h2>
                                    <div>
                                        <h2 className='text-lg font-semibold mb-2'>Features:</h2>
                                        <ol className='list-disc list-inside'>
                                            {selectedPlanState.features.map((feature, idx) => (
                                                <li key={idx} className='mb-1'>{feature}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 items-center w-full mt-4'>
                                    <h2 className='text-2xl font-bold'>{selectedPlanState.price}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 self-center mt-20 mb-20 w-full max-w-6xl'>
                    <div className='flex-1 bg-white bg-opacity-15 backdrop-blur-xl p-10 rounded-lg shadow-lg'>
                        <h2 className='text-2xl font-semibold text-white mb-5'>Contact Information</h2>
                        <div className='flex items-center gap-5 mb-5'>
                            <FontAwesomeIcon icon={faPhone} className='text-white text-2xl' />
                            <p className='text-white'>+1 (123) 456-7890</p>
                        </div>
                        <div className='flex items-center gap-5 mb-5'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-white text-2xl' />
                            <p className='text-white'>info@yourbusiness.com</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='text-white text-2xl' />
                            <p className='text-white'>123 Business St, Business City, BC 12345</p>
                        </div>
                    </div>
                    <div className='flex-1 bg-white bg-opacity-15 backdrop-blur-xl p-10 rounded-lg shadow-lg'>
                        <h2 className='text-2xl font-semibold text-white mb-5'>Our Location</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484726!2d-122.419415484681!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0f0f0f%3A0x4c0f0f0f0f0f0f0f!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            ></iframe>
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;