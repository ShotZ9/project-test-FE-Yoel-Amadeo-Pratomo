import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

const Banner = ({ imageUrl }) => {
  const bannerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollPosition * 0.3; // Adjust parallax speed here

  return (
    <div className="banner" ref={bannerRef}>
      <div className="banner-image-container">
        <img
          src={imageUrl}
          alt="Banner"
          className="banner-image"
          style={{ transform: `translateY(${parallaxOffset}px)` }} // Parallax effect on image
        />
      </div>
      <div className="banner-content">
        <div className="banner-text" style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}>{/* Parallax on text */}
          <h1>Ideas</h1>
          <p>Where all our great things begin</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;