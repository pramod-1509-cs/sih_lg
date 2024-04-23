import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide the pop-up after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

  return (
    <div className={`popup ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
        <p>If you're well-versed in the subject, proceed directly to the quiz. Otherwise, enjoy an engaging game before testing your knowledge.</p>
        {/* Add any additional content or buttons as needed */}
      </div>
    </div>
  );
};

export default Popup;
