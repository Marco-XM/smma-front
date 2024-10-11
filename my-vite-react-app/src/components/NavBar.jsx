import React from 'react';

const NavBar = () => {
    return (
        <div className="flex flex-col whitespace-nowrap md:flex-row gap-10 md:gap-12">
            <button>Services</button>
            <button>About Us</button>
            <button>Get Contact</button>
        </div>
    );
};

export default NavBar;