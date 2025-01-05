import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { getName } from "../Data/Data";
import { FaBell,FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const name = getName();

  
  const userDomain = localStorage.getItem("userDomain");
  const profileRoute = userDomain === "coach.com" ? "/CoachProfile" : "/PlayerProfile";
  
  return (
    <div className="navbarr">
      <div className="logo-search-container">
        <div className="logo">
          <img src="./src/assets/images/logo.png" alt="Sportofolio Logo" className="logo-img" />
        </div>
        <SearchBar />
      </div>
      <div className="nav-right">
      <div className="notification-container" onClick={() => setShowNotifications(!showNotifications)}>
        <div className="notification">
          <FaBell className="bell-icon" />
          <span className="notification-dot"></span>
        </div>
      </div>

      {showNotifications && (
        <div className="notifications-dropdown">
          <h3>Notifications</h3>
          <div className="notifications-list">
            <div className="notification-item">
              <img src="./src/assets/images/karimashraf.png" alt="User" />
              <div className="notification-content">
                <p><strong>karim Ashraf</strong> <br /> liked your post</p>
                <span>2h ago</span>
              </div>
            </div>
            <div className="notification-item">
              <img src="./src/assets/images/kareemadel.png" alt="User" />
              <div className="notification-content">
                <p><strong>kareem Adel</strong> <br />Posted new video </p>
                <span>2h ago</span>
              </div>
            </div>
            <div className="notification-item">
              <img src="./src/assets/images/elkady.png" alt="User" />
              <div className="notification-content">
                <p><strong>Abdelrahman el Kadi</strong> <br /> sent "please send me you portofolio as so.."</p>
                <span>2h ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="notification-container">
        <div className="notification">
          <FaPaperPlane className="bell-icon" />
        </div>
      </div>
        <div className="profile" onClick={() => navigate(profileRoute)}>
          <img src="./src/assets/images/profile pic.png" alt="Profile" />
          <div className="profile-text">
            <p className="greeting">Hello,</p>
            <p className="name">{name}</p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
