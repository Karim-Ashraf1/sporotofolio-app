import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="cover-photo">
        <img
          src=".\src\assets\post.png" 
          alt="Cover"
          className="cover-img"
        />
      </div>
      <div className="profile-photo-container">
        <img
          src=".\src\assets\profile pic.png"
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h2 className="player-name">Zeyad Waleed</h2>
        <p className="player-bio">Football Player</p>
        <p className="player-club">Real Madrid</p>
      </div>
    </div>
  );
};

export default ProfileCard;
