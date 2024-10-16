import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../assets/white ARC and gradient bg.png';

const Logo = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  }

  return (
    <div className='ml-5 w-20 h-20 self-center font-semibold text-white cursor-pointer' onClick={handleNavigateToHome}>
      <img src={image} alt="" />
    </div>
  )
}

export default Logo;
