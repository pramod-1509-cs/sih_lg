import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import webLogo from '../assets/webLogo.png';
import chat_icon from '../assets/chat-icon.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
      <Link to="/" className="nav-link">Home</Link>
        {/* <Link to="/contact" className="nav-link">Contact</Link> */}
        <Link to="/privacy" className="nav-link">Privacy</Link>
        {/* <Link to="/community" className="nav-link">Community</Link> */}
        <Link to="/about" className="nav-link">About</Link>
        {/* <Link to="/register" className="nav-link">Register</Link> */}
        {/* <a href="http://127.0.0.1:7860/"><img src={chat_icon} alt="chat-icon" /></a> */}
      </div>
      <div className="nav-items">
        <img  className='logo' src={webLogo} alt="weblogo" />
        <Link to="/" className="nav-link">Home</Link>
        {/* <Link to="/contact" className="nav-link">Contact</Link> */}
        <Link to="/privacy" className="nav-link">Privacy</Link>
        {/* <Link to="/community" className="nav-link">Community</Link> */}
        <Link to="/about" className="nav-link">About</Link>
        {/* <Link to="/register" className="nav-link register">Register</Link> */}
        {/* <a href="http://127.0.0.1:7860/"><img className='chatIcon' src={chat_icon} alt="chat-icon" /></a> */}
      </div>
    </nav>
  );
}
