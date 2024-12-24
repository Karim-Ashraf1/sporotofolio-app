import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgetPassword from "./components/Forget-Password/ForgetPassword";
import CoachProfile from "./components/CoachProfile/CoachProfile";
import PlayerProfile from "./components/PlayerProfile/PlayerProfile";
import NetworkPage from "./NetworkPage"; 
import Store from "./components/Store/Store";
import Policy from "./components/Policies/Policy";
import Settings from "./components/Settings/Settings";

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
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route path="/CoachProfile" element={<CoachProfile />} />
                <Route path="/PlayerProfile" element={<PlayerProfile />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/network" element={<NetworkPage />} /> 
                <Route path="/store" element={<Store />} />
                <Route path="/policies" element={<Policy />} /> 
                <Route path="/settings" element={<Settings />} /> 
            </Routes>
        </Router>
    );
}

export default App;
