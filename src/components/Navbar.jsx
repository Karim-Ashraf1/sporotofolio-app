// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="./src/assets/logo.png" alt="Sportofolio Logo" className="logo-img" />
      </div>

      {/* Navbar Links */}
      <ul className="navbar-links">
        <li><a href="#foryou">For You</a></li>
        <li><a href="#network">Network</a></li>
        <li><a href="#messages">Messages</a></li>
        <li><a href="#opportunities">Opportunities</a></li>
      </ul>

      {/* Profile Section */}
      <div className="profile">
        <img src=".\src\assets\profile pic.png" alt="Profile" /> {/* Placeholder image */}
        <div className="profile-text">
          <p className="greeting">Hello,</p>
          <p className="name">Zeyad Waleed</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
