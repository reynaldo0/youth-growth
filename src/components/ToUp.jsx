import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 z-[99999] right-8 bg-primary hover:bg-yellow-200 hover:text-primary text-white rounded-full p-3 shadow shadow-white transition-transform duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transform: 'translateY(0)', transition: 'transform 0.3s ease' }}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ToTopButton;