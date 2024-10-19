import React from 'react';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-ring1"></div>
      <div className="loading-ring1"></div>
      <div className="loading-ring1"></div>
      <div className="loading-ring1"></div>
      <div className="loading-ring2"></div>
      <div className="loading-ring2"></div>
      <div className="loading-ring2"></div>
      <div className="loading-ring2"></div>
      <div className="loading-ring"></div>
      <div className="loading-ring"></div>
      <div className="loading-ring"></div>
      <div className="loading-ring0"></div>
        <span className='text-white font-bold absolute z-50 circle'>Loading...</span>
    </div>
  );
};

export default Loading;