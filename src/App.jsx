// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';  // Import the Navbar component
import './app.css';  // Global styles

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* Add other content or routes here */}
      </div>
    </div>
  );
};

export default App;
