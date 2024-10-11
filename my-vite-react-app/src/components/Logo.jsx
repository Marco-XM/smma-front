import React from 'react';

const CurvedTriangleLogo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M50 10 
             L90 80 
             A 10 10 0 0 1 80 90
             L20 90
             A 10 10 0 0 1 10 80 
             Z" 
          fill="white" />
        <circle cx="50" cy="65" r="8" fill="black" />
      </svg>
      <span style={{ fontSize: '36px', fontWeight: 'bold', marginLeft: '10px' }}>RC</span>
    </div>
  );
};

export default CurvedTriangleLogo;
