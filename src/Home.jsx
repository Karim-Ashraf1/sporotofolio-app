import React from 'react';
import Navbar from './components/Navbar';
import LeftMenu from './components/LeftMenu';
import Post from './components/Post';
import RightMenu from './components/RightMenu';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-layout">
        <LeftMenu />
        <div className="posts-container">
          <Post />
          <Post />
          <Post />
        </div>
        <RightMenu />
      </div>
    </div>
  );
};

export default Home;
