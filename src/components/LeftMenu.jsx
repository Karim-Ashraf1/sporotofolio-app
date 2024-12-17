import React from 'react';
import './LeftMenu.css';
import { FaUser, FaSearch, FaCompass, FaPlus, FaCog, FaSignOutAlt, FaRegFileAlt,FaShoppingCart } from 'react-icons/fa';

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <ul className="menu-items">
        <li className="menu-item">
          <FaSearch className="menu-icon" />
          <span className="menu-text">Search</span>
        </li>
        <li className="menu-item">
          <FaCompass className="menu-icon" />
          <span className="menu-text">Explore</span>
        </li>
        <li className="menu-item">
          <FaPlus className="menu-icon" />
          <span className="menu-text">Upload</span>
        </li>
        <li className="menu-item">
          <FaUser className="menu-icon" />
          <span className="menu-text">Network</span>
        </li>
        <li className="menu-item">
          <FaShoppingCart className="menu-icon" />
          <span className="menu-text">Shop</span>
        </li>
        <li className="menu-item">
          <FaCog className="menu-icon" />
          <span className="menu-text">Settings</span>
        </li>
        <li className="menu-item">
          <FaSignOutAlt className="menu-icon" />
          <span className="menu-text">Logout</span>
        </li>
        <hr />
        <li className="menu-item">
          <FaRegFileAlt className="menu-icon" />
          <span className="menu-text">Terms & Policies</span>
        </li>
        <li className="menu-item">
          <span className="menu-textcopy">© 2024 Sportofolio</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
