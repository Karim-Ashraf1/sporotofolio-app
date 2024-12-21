import React from 'react';
import Navbar from './components/Navbar';
import LeftMenu from './components/LeftMenu';
import Post from './components/Post';
import RightMenu from './components/RightMenu';
import ProfileID from './components/ProfileID';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-layout">
        <LeftMenu />
        <div className="custom-post-container">
          <Post />
          <Post />
          <Post />
        </div>
        <div className="right-side">
          <ProfileID />
          <RightMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
