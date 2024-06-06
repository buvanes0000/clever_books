import React, { useState } from 'react';
import './Hero.css';
import heroImage from '../assets/9881645_4267109.jpg';
import { FaBook, FaBookOpen, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <nav className="hero-navbar">
        <div className="nav-logo">CleverBooks</div>
        <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-toggle">
          <button onClick={toggleNavbar}>
            {isNavOpen ? <FaBookOpen className="icon-book-open" /> : <FaBook className="icon-book-closed" />}
          </button>
        </div>
      </nav>

      <div className="hero-content">
        <h1>Welcome to CleverBooks</h1>
        <p>Join us in a magical world where every page is an adventure. Discover tales of wonder and imagination!</p>
        <button>
          Start Your Journey 
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
