import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
      <div className="profile-card">
        <div className="cover-photo">
          <img src=".\src\assets\cover.webp" alt="Cover" className="cover-img" />
        </div>
        <div className="profile-photo-container">
          <img src=".\src\assets\profile pic.png" alt="Profile" className="profile-img" />
        </div>
        <div className="profile-content">
          <div className="profile-info">
            <h2 className="player-name">Zeyad Waleed</h2>
            <p className="player-bio">Football Player</p>
            <div className="club-info">
              <p className="player-club">Real Madrid</p>
              <img src="./src/assets/Real_Madrid_CF.svg.webp" alt="Club Logo" className="club-logo" />
            </div>
          </div>
          <div className="qr-code">
            <img src="./src/assets/qr-code.png" alt="QR Code" className="qr-img" />
          </div>
        </div>
      </div>
    );
  };

export default ProfileCard;
