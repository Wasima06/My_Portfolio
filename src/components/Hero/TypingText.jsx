import React, { useState, useEffect } from 'react';
import './TypingText.css';

const TypingText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <div dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingText;
