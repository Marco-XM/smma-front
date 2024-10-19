import React from 'react';

const Loading = () => {
  const ringDurations = [
    '2s', '2.5s', '3s', '3.5s', '4s', '4.5s', '5s', '5.5s', '6s', '6.5s', '7s', '7.5s'
  ];

  return (
    <div className="loading-wrapper">
      {ringDurations.map((duration, index) => (
        <div
          key={index}
          className={`loading-ring${index % 3}`}
          style={{ animationDuration: duration }}
        ></div>
      ))}
      <span className='text-white font-bold absolute z-50 circle'>Loading...</span>
    </div>
  );
};

export default Loading;