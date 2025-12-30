import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo-icon">🎓</span> 
        <span className="logo-text">StudentPortal</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/userinfo">My Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Header;