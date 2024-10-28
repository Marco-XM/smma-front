import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import packages from '../data/packagesData';
import image from '../assets/Untitled-98.jpg';
import Loading from '../components/Loading';

const ContactUs = () => {
    const location = useLocation();
    const { selectedPlan, packages } = location.state || {};
    const [selectedPlanState, setSelectedPlanState] = useState(selectedPlan);
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [thankYouMessage, setThankYouMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: '',
        message: '',
    });

    const handlePlanChange = (selectedOption) => {
        const newSelectedPlan = packages.find(pkg => pkg.title === selectedOption.value);
        setSelectedPlanState(newSelectedPlan);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonLoading(true);


        const emailData = {
            from_name: formData.name,
            from_email: formData.email,
            phoneNumber: formData.phoneNumber,
            companyName: formData.companyName,
            subject: formData.subject,
            message: formData.message,
            selected_plan: selectedPlanState ? selectedPlanState.title : 'No plan selected',
        };

        try {
            await axios.post('https://smma-back.vercel.app/send-email', emailData);
            setThankYouMessage(true);
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setButtonLoading(false);
        }
    };

    const options = packages.map(pkg => ({
        value: pkg.title,
        label: pkg.title,
    }));

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
        <div className='flex flex-col min-h-screen bg-cover bg-start bg-cyan-300' style={{ backgroundImage: `url(${image})` }}>
            <div className={` fixed w-full z-50 ${scrolled ? 'bg-gray-700 bg-opacity-15 backdrop-blur-xl h-fit' : ''}`}>
                <div className="m-2 flex justify-between items-center">
                    <Logo />
                    <div className="text-white mr-5 self-center rounded-bl-full rounded-br-full  md:block">
                        <NavBar />
                    </div>
                </div>
            </div>

            <div className='flex flex-col min-h-screen m-5 lg:m-0'>
                <div className='flex flex-col items-center lg:gap-10 mt-32 lg:mt-40'>
                    <h1 className='text-6xl lg:text-8xl text-white font-semibold mb-16'>Contact Us</h1>

                    <div className='flex flex-col lg:flex-row gap-10 w-full max-w-6xl mb-20'>
                        <div className='bg-white bg-opacity-15 backdrop-blur-xl p-10 rounded-lg shadow-lg w-full lg:w-2/3'>
                        {thankYouMessage ? (
                                <div className='text-white text-center'>
                                    <h2 className='text-2xl font-semibold mb-4'>Thank you for reaching out!</h2>
                                    <p>Our team will be in touch with you shortly.</p>
                                </div>
                            ) : (
                            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                                <div className='flex flex-col flex-wrap md:flex-row gap-5 mb-5'>
                                    <input
                                        type='text'
                                        name='name'
                                        required
                                        placeholder='Your Name'
                                        className='flex-1 p-4 rounded-md placeholder:text-white bg-gray-800 bg-opacity-20 text-white'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type='email'
                                        name='email'
                                        required
                                        placeholder='Your Email'
                                        className='flex-1 p-4 rounded-md placeholder:text-white bg-gray-800 bg-opacity-20 text-white'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type='text'
                                        name='phoneNumber'
                                        placeholder='Phone Number'
                                        className='flex-1 p-4 rounded-md placeholder:text-white bg-gray-800 bg-opacity-20 text-white'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type='text'
                                        name='companyName'
                                        required
                                        placeholder='Company Name'
                                        className='flex-1 p-4 rounded-md placeholder:text-white bg-gray-800 bg-opacity-20 text-white'
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        className='p-4 rounded-t-md placeholder:text-white bg-gray-800 bg-opacity-20 text-white'
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                    <span className='border'></span>
                                    <textarea
                                        name='message'
                                        required
                                        placeholder='Your Message'
                                        className='p-4 rounded-b-md placeholder:text-white bg-gray-800 bg-opacity-20 text-white h-40'
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <button
                                    type='submit'
                                    className='bg-gradient-to-r mt-5 from-red-500 via-orange-500 to-yellow-500 text-white py-4 rounded-md hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition-all'
                                    disabled={buttonLoading}
                                >
                                    {buttonLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                            )}
                        </div>

                        <div className='flex flex-col gap-5 w-full lg:w-1/3'>
                            <Select
                                className='text-center border-none rounded-md bg-gray-800 bg-opacity-20 backdrop-blur-xl z-40 text-white'
                                value={options.find(option => option.value === (selectedPlanState ? selectedPlanState.title : ''))}
                                onChange={handlePlanChange}
                                options={options}
                                placeholder="Select a plan"
                                isSearchable={false}
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        backgroundColor: 'rgba(31, 41, 55, 0.2)', // Tailwind's gray-800 with opacity
                                        color: 'white',
                                    }),
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: 'white',
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: 'white',
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: 'rgba(31, 41, 55, 0.8)', // Tailwind's gray-800 with opacity
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isSelected ? 'rgba(31, 41, 55, 0.8)' : 'rgba(31, 41, 55, 0.2)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(31, 41, 55, 0.5)',
                                        },
                                    }),
                                }}
                            />
                            {selectedPlanState && (
                                <div className={`${selectedPlanState.color} flex flex-col justify-between text-white p-6 bg-opacity-15 z-4 backdrop-blur-xl rounded-lg shadow-lg`}>
                                    <div>
                                        <h1 className='text-2xl font-bold mb-2'>{selectedPlanState.title}</h1>
                                        <h2 className='text-xl mb-4'>{selectedPlanState.subtitle}</h2>
                                        <div>
                                        {selectedPlanState.title !== 'Custom Package' && (
                                                <h2 className='text-lg font-semibold mb-2'>Features:</h2>
                                            )}
                                            <ol className='list-disc list-inside'>
                                                {selectedPlanState.features.map((feature, idx) => (
                                                    <li key={idx} className='mb-1'>{feature}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
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

export default ContactUs;