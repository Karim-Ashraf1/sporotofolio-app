import React from 'react';
import NetworkCard from './components/NetworkCard';
import Navbar from './components/Navbar';
import './NetworkPage.css';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import ProfileID from './components/ProfileID';

const NetworkPage = () => {
  const players = [
    {
      photo: './src/assets/player1.jpg',
      name: 'Lionel Messi',
      position: 'Forward',
      club: 'Inter Miami',
      clubLogo: './src/assets/inter-miami-logo.png',
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: './src/assets/player2.jpg',
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      club: 'Al-Nassr',
      clubLogo: './src/assets/al-nassr-logo.png',
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: './src/assets/player3.jpg',
      name: 'Neymar Jr.',
      position: 'Forward',
      club: 'Al-Hilal',
      clubLogo: './src/assets/al-hilal-logo.png',
      qrCode: './src/assets/qr-code3.png',
    },
    {
      photo: './src/assets/player1.jpg',
      name: 'Lionel Messi',
      position: 'Forward',
      club: 'Inter Miami',
      clubLogo: './src/assets/inter-miami-logo.png',
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: './src/assets/player2.jpg',
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      club: 'Al-Nassr',
      clubLogo: './src/assets/al-nassr-logo.png',
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: './src/assets/player3.jpg',
      name: 'Neymar Jr.',
      position: 'Forward',
      club: 'Al-Hilal',
      clubLogo: './src/assets/al-hilal-logo.png',
      qrCode: './src/assets/qr-code3.png',
    },
    {
      photo: './src/assets/player1.jpg',
      name: 'Lionel Messi',
      position: 'Forward',
      club: 'Inter Miami',
      clubLogo: './src/assets/inter-miami-logo.png',
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: './src/assets/player2.jpg',
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      club: 'Al-Nassr',
      clubLogo: './src/assets/al-nassr-logo.png',
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: './src/assets/player3.jpg',
      name: 'Neymar Jr.',
      position: 'Forward',
      club: 'Al-Hilal',
      clubLogo: './src/assets/al-hilal-logo.png',
      qrCode: './src/assets/qr-code3.png',
    },
    {
      photo: './src/assets/player1.jpg',
      name: 'Lionel Messi',
      position: 'Forward',
      club: 'Inter Miami',
      clubLogo: './src/assets/inter-miami-logo.png',
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: './src/assets/player2.jpg',
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      club: 'Al-Nassr',
      clubLogo: './src/assets/al-nassr-logo.png',
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: './src/assets/player3.jpg',
      name: 'Neymar Jr.',
      position: 'Forward',
      club: 'Al-Hilal',
      clubLogo: './src/assets/al-hilal-logo.png',
      qrCode: './src/assets/qr-code3.png',
    },
    
    
  ];

  return (
    <div className="network-page">
      <Navbar />
      <LeftMenu />
      <div className="cards-container">
        {players.map((player, index) => (
          <NetworkCard

          
            key={index}
            photo={player.photo}
            name={player.name}
            position={player.position}
            club={player.club}
            clubLogo={player.clubLogo}
            qrCode={player.qrCode}
          />
        ))}
      </div>
      <div className="right-side">
          <ProfileID />
          <RightMenu />
        </div>
    </div>
  );
};

export default NetworkPage;
