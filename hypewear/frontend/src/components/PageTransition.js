import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading animation
    setIsLoading(true);

    // Hide loading animation after short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500ms loading animation

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <div className="loader-spinner"></div>
        </div>
      )}
      <div className={`page-content ${isLoading ? 'fade-out' : 'fade-in'}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;