import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import Logo from '../components/Logo';
import image from '../assets/Unti.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCamera, faPalette, faGlobe, faAd, faUsers, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Loading from '../components/Loading';


// Data array for services
const services = [
    {
        title: 'Marketing Strategy & Planning',
        items: [
            { name: 'Marketing Strategy', description: 'We craft personalized marketing strategies tailored to your brand’s unique goals and target audience, ensuring your message reaches the right people, at the right time, with maximum impact.' },
            { name: 'Social Media Marketing Plan', description: 'Our social media experts develop actionable plans that boost engagement, build community, and elevate your online presence across platforms like Instagram, Facebook, and LinkedIn.' }
        ],
        icon: faBullhorn,
    },
    {
        title: 'Content Creation & Management',
        items: [
            { name: 'Content Creation', description: 'From blog posts to social media content, we create compelling narratives that resonate with your audience, positioning your brand as an industry leader.' },
            { name: 'Photography', description: 'Capture your brand\'s essence with high-quality, professional photography that speaks volumes and leaves a lasting impression.' },
            { name: 'Video Editing', description: 'Bring your story to life through creative, professional video editing, designed to captivate and convert your audience.' }
        ],
        icon: faCamera,
    },
    {
        title: 'Branding & Design',
        items: [
            { name: 'Branding or Rebranding', description: 'Whether you\'re launching a new brand or refreshing an existing one, we help craft a strong identity that tells your story and stands out in the market.' }
        ],
        icon: faPalette,
    },
    {
        title: 'Web & Digital Services',
        items: [
            { name: 'Web Development', description: 'We design and develop responsive, user-friendly websites that serve as the digital hub of your business, seamlessly integrating your brand’s visual identity and goals.' },
            { name: 'SEO Campaign', description: 'Enhance your search engine visibility with our expert SEO services, designed to drive traffic and improve your ranking on Google.' }
        ],
        icon: faGlobe,
    },
    {
        title: 'Advertising & Media Buying',
        items: [
            { name: 'Media Buying (Ads Management)', description: 'Maximize your ad spending with data-driven strategies to reach the right audience at the best rates. We focus on turning impressions into profit and growing your business.' }
        ],
        icon: faAd,
    },
    {
        title: 'Community Management',
        items: [
            { name: 'Moderation', description: 'We manage and engage with your community to build trust, address concerns, and foster a positive environment across your social media platforms.' }
        ],
        icon: faUsers,
    },
];


const Services = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);



    const toggleItem = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    const className = 'p-4 bg-green-300 bg-opacity-0 backdrop-blur-xl flex gap-5 flex-col rounded-xl shadow-md flex-1 relative';
    const innerBoxClass = 'p-5 bg-blue-300 bg-opacity-0 rounded-md flex-1';
    const descriptionClass = 'p-2 font-semibold bg-black text-white bg-opacity-40 rounded-md transition-all duration-500 ease-in-out backdrop-blur-xl';

    // Function to calculate z-index based on the position of the box in the array
    const calculateZIndex = (index, total) => {
        return total - index; // Higher index for earlier boxes
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

      const handleClickOutside = (event) => {
        if (activeItem && !event.target.closest('.ServiceButton')) {
            setActiveItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [activeItem]);
    
      if (loading) {
        return <Loading />;
      }

    return (
        <div className={`relative flex flex-col min-h-screen bg-cover bg-center bg-black`} style={{ backgroundImage: `url(${image})` }}>
            <div className={` fixed w-full z-50 ${scrolled ? 'bg-gray-700 bg-opacity-15 backdrop-blur-xl h-fit' : ''}`}>
                <div className="m-2 flex justify-between items-center">
                    <Logo />
                    <div className="text-white mr-5 self-center rounded-bl-full rounded-br-full  md:block">
                        <NavBar />
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className='flex flex-col items-center lg:gap-20 mt-32 lg:mt-40'>
            {/* Title */}
            <h1 className='text-6xl lg:text-8xl text-white font-semibold mb-16'>Services</h1>

            {/* Service Boxes Container */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 w-full'>
                {/* Dynamic Service Boxes */}
                {services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className='flex flex-col gap-10 text-white relative'>
                        <div
                            className={className}
                            style={{ zIndex: calculateZIndex(serviceIndex, services.length) }} 
                        >
                            <FontAwesomeIcon icon={service.icon} className='text-2xl' />
                            <h1 className='font-semibold text-xl mb-2 self-center'>{service.title}</h1>
                            <div className={innerBoxClass}>
                                {service.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className='relative border-b border-t'>
                                        <button
                                            className='w-full bg-gray-800 flex flex-col text-white p-4 text-center rounded-md transform transition-all bg-opacity-0 ServiceButton'
                                            onClick={() => toggleItem(`${serviceIndex}-${itemIndex}`)}
                                        >
                                            <div className='self-center'>
                                                {item.name}
                                            </div>
                                            <FontAwesomeIcon icon={faChevronDown} className={`self-center mt-2 hoverEffect ${activeItem === `${serviceIndex}-${itemIndex}` ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                        <div
                                            className={`${descriptionClass} ${activeItem === `${serviceIndex}-${itemIndex}` ? 'max-h-40 z-50' : 'max-h-0 opacity-0'}`}
                                            style={{ position: 'relative', top: '100%', left: 0, right: 0 }}
                                        >
                                            <p className='opacity-100'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        <div className="fixed top-0 right-0 p-5 z-50 md:hidden">
            <NavBar />
        </div>
    </div>
);
};

export default Services;