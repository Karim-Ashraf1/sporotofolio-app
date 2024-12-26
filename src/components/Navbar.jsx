import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';
import { getName } from "./Data/Data";

const Navbar = () => {
  const navigate = useNavigate();

  const name = getName();

  
  const userDomain = localStorage.getItem("userDomain");
  const profileRoute = userDomain === "coach.com" ? "/CoachProfile" : "/PlayerProfile";
  
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
      <div className="profile" onClick={() => navigate(profileRoute)}>
        <img src="./src/assets/profile pic.png" alt="Profile" />
        <div className="profile-text">
          <p className="greeting">Hello,</p>
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
