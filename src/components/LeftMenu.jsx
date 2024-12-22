import React from 'react';
import './LeftMenu.css';
import { FaUser, FaSearch, FaCompass, FaPlus, FaCog, FaSignOutAlt, FaRegFileAlt, FaShoppingCart } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const LeftMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/', { replace: true });
  };

  const menuItems = [
    { path: '/home', icon: <FaCompass className="menu-icon" />, label: 'Explore' },
    { path: '/upload', icon: <FaPlus className="menu-icon" />, label: 'Upload' },
    { path: '/network', icon: <FaUser className="menu-icon" />, label: 'Network' },
    { path: '/store', icon: <FaShoppingCart className="menu-icon" />, label: 'Store' },
    { path: '/settings', icon: <FaCog className="menu-icon" />, label: 'Settings' },
  ];

  return (
    <div className="left-menu">
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span className="menu-text">{item.label}</span>
          </li>
        ))}
        <li className="menu-item" onClick={handleLogout}>
          <FaSignOutAlt className="menu-icon" />
          <span className="menu-text">Logout</span>
        </li>
        <hr />
        <li className="menu-item">
          <FaRegFileAlt className="menu-icon" />
          <span className="menu-text">Terms & Policies</span>
        </li>
        <li className="menu-itemC">
          <span className="menu-textcopy">© 2024 Sportofolio</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
