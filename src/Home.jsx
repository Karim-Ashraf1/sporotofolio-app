import React from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div  className="home-container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
