import React from 'react';
import './NetworkCard.css';

const NetworkCard = () => {
    return (
      <div className="player-card">
        <div className="cover-photo">
          <img src=".\src\assets\cover.webp" alt="Cover" className="cover-img" />
        </div>
        <div className="player-photo-container">
          <img src="./src/assets/profile pic.png" alt="Player" className="player-photo" />
        </div>
        <div className="player-content">
          <div className="player-header">
            <div className="player-info">
              <h2 className="player-name">Zeyad Waleed</h2>
              <p className="player-position">Midfielder</p>
              <div className="club-info">
                <p className="player-club">Real Madrid</p>
                <img src="./src/assets/Real_Madrid_CF.svg.webp" alt="Club Logo" className="club-logo" />
              </div>
            </div>
            <img src="./src/assets/qr-code.png" alt="QR Code" className="qr-code" />
          </div>
          <div className="action-buttons">
            <button className="follow-button">Follow</button>
            <button className="network-button">Add to Network</button>
          </div>
        </div>
      </div>
    );
};

export default NetworkCard;
