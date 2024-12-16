import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

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
                        isAuthorized ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />
                    }
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
