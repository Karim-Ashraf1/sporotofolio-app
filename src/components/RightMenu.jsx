import React from 'react';
import './RightMenu.css';

const RightMenu = () => {
  const suggestedAccounts = [
    {
      photo: './src/assets/account.png',
      name: 'Cristiano Ronaldo',
      bio: 'Football Player',
    },
    {
      photo: './src/assets/account.png',
      name: 'Cristiano Ronaldo',
      bio: 'Football Coach',
    },
  ];

  return (
    <div className="right-menu">
      <h2 className="right-menu-title">Suggested Accounts</h2>
      <div className="right-menu-tabs">
        <button className="right-menu-tab">Coaches</button>
        <button className="right-menu-tab">Clubs</button>
        <button className="right-menu-tab">Players</button>
      </div>
      <div className="suggested-accounts">
        {suggestedAccounts.map((account, index) => (
          <div key={index} className="account-item">
            <img
              src={account.photo}
              alt={`${account.name}'s profile`}
              className="account-photo"
            />
            <div className="account-info">
              <p className="account-name">{account.name}</p>
              <p className="account-bio">{account.bio}</p>
            </div>
            <button className="sp-follow-button">
              <span className="plus-icon">Follow</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightMenu;
