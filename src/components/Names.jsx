import React from 'react';
import Name from './Name';

const Names = () => {
  const textToType = "Wasima Syed";
  const typingSpeed = 100; // Speed in milliseconds

  return (
    <div>
      <h1>Wasima Syed</h1>
      <Name text={textToType} speed={typingSpeed} />
    </div>
  );
};

export default Names;
