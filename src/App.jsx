import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

function AnimatedRoutes({ isAuthorized, handleLogin }) {
    const location = useLocation();

    const pageVariants = {
        initial: { opacity: 0.5 },
        animate: { opacity: 1 },
        exit: { opacity: 0.5 },
    };
    
    const pageTransition = {
        duration: 0.2,
    };
    

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        isAuthorized ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Signup />
                        </motion.div>
                    }
                />
                <Route
                    path="/ForgetPassword"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <ForgetPassword />
                        </motion.div>
                    }
                />
                <Route
                    path="/CoachProfile"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <CoachProfile />
                        </motion.div>
                    }
                />
                <Route
                    path="/PlayerProfile"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <PlayerProfile />
                        </motion.div>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/network"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <NetworkPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/store"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Store />
                        </motion.div>
                    }
                />
                <Route
                    path="/policies"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Policy />
                        </motion.div>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Settings />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleLogin = () => {
        setIsAuthorized(true);
    };

    return (
        <Router>
            <AnimatedRoutes isAuthorized={isAuthorized} handleLogin={handleLogin} />
        </Router>
    );
}

export default App;
