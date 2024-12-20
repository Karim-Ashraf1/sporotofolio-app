import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="navbarr">
      <div className="logo-search-container">
        <div className="logo">
          <img
            src="./src/assets/logo.png"
            alt="Sportofolio Logo"
            className="logo-img"
          />
        </div>
        <SearchBar />
      </div>
      <div className="profile">
        <img src="./src/assets/profile pic.png" alt="Profile" />
        <div className="profile-text">
          <p className="greeting">Hello,</p>
          <p className="name">Zeyad Waleed</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
