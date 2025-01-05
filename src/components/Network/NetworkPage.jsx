import React from 'react';
import NetworkCard from '../../components/NetworkCard/NetworkCard';
import Navbar from '../../components/Navbar/Navbar';
import './NetworkPage.css';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import RightMenu from '../../components/RightMenu/RightMenu';
import ProfileID from '../../components/Profile/ProfileID';

import bellingham from '../../assets/images/bellingham.jpeg';
import vini from '../../assets/images/vini.jpeg';
import mbappe from '../../assets/images/mbappe.jpeg';
import marmoush from '../../assets/images/marmoush.jpeg';
import lamine from '../../assets/images/lamine.jpeg';
import ronaldo from '../../assets/images/account.png';
import neymar from '../../assets/images/neymar.jpeg';
import messi from '../../assets/images/messi.jpeg';
import mosalah from '../../assets/images/mosalah.jpeg';
import lebronJames from '../../assets/images/lebron.jpg';
import bonmati from '../../assets/images/bonmati.jpeg';
import hanaGoda from '../../assets/images/hanagoda.jpeg';


import realmadrid from '../../assets/images/Real_Madrid_CF.svg.webp';

const NetworkPage = () => {
  const players = [
    {
      photo: ronaldo,
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      club: 'Al-Nassr',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: bellingham,
      name: 'Jude Bellingham',
      position: 'Midfielder',
      club: 'Real Madrid',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: vini,
      name: 'Vinicius Junior (Vini Jr.)',
      position: 'Forward',
      club: 'Real Madrid',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: marmoush,
      name: 'Omar Marmoush',
      position: 'Forward',
      club: 'Frankfurt',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code3.png',
    },
    {
      photo: lamine,
      name: 'Lamine Yamal',
      position: 'Forward',
      club: 'Barcelona',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: mosalah,
      name: 'Mohamed Salah',
      position: 'Forward',
      club: 'Liverpool',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code3.png',
    },
    {
      photo: lebronJames,
      name: 'Lebron James',
      position: 'Forward',
      club: 'Los Angeles Lakers',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: bonmati,
      name: 'Aitana Bonmatí',
      position: 'Forward',
      club: 'Barcelona',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: hanaGoda,
      name: 'Hanah Goda',
      position: 'Forward',
      club: 'Al-Ahly',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code3.png',
    },
    {
      photo: mbappe,
      name: 'Killian Mbappe',
      position: 'Forward',
      club: 'Real Madrid',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code1.png',
    },
    {
      photo: messi,
      name: 'Lionel Messi',
      position: 'Forward',
      club: 'Inter Miami',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code2.png',
    },
    {
      photo: neymar,
      name: 'Neymar Jr.',
      position: 'Forward',
      club: 'Al-Hilal',
      clubLogo: realmadrid,
      qrCode: './src/assets/qr-code3.png',
    },
    
    
  ];

  return (
    <div>
      <Navbar />
    <div className="network-page">
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
    </div>
  );
};

export default NetworkPage;
