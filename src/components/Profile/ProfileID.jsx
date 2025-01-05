import React from 'react';
import './ProfileID.css';
import { getName } from "../Data/Data";

const ProfileID = () => {
   const name = getName();

    return (
      <div className="sp-player-card">
        <div className="cover-photo">
          <img src=".\src\assets\images\cover.webp" alt="Cover" className="cover-img" />
        </div>
        <div className="player-photo-container">
          <img src="./src/assets/images/profile pic.png" alt="Player" className="player-photo" />
        </div>
        <div className="player-content">
          <div className="player-header">
            <div className="player-info">
              <h2 className="sp-player-name">{name}</h2>
              <p className="player-position">Midfielder</p>
              <div className="club-info">
                <p className="player-club">Real Madrid</p>
                <img src="./src/assets/images/Real_Madrid_CF.svg.webp" alt="Club Logo" className="club-logo" />
              </div>
            </div>
            <img src="./src/assets/images/qr-code.png" alt="QR Code" className="qr-codde" />
          </div>
        </div>
      </div>
    );
};

export default ProfileID;
