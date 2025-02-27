import React from 'react';
import TypingText from './TypingText';

const Apps = () => {
  const headerText = `<i><h1>Hii all,<br>I am Syed Wasima..<br>An Enthusiastic FullStack Developer</h1></i>`;
  const paragraphText = `<p><i>I am an Engineering Student in the field of Computer Science having a good Knowledge<br> on both Frontend and Backend Technologies as well as in DataBases</i></p>`;
  const typingSpeed = 100; // Speed in milliseconds

  return (
    <div className='hero'>
      <TypingText text={headerText} speed={typingSpeed} />
      <TypingText text={paragraphText} speed={typingSpeed} />
    </div>
  );
};

export default Apps;
