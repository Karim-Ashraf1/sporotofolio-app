import React from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import LeftMenu from './components/LeftMenu';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="sidebar-container">
        <LeftMenu />
        <div className="main-content">
          <div className="posts-container">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
