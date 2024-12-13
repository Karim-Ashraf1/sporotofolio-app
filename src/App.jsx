import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleLogin = () => {
        setIsAuthorized(true);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthorized ? (
                            <Navigate to="/home" />
                        ) : (
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <h1>Sportofolio Login</h1>
                                <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
                                    Login
                                </button>
                            </div>
                        )
                    }
                />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
