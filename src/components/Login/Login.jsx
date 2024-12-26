import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import { emails } from "../Data/Data";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email || password.length < 6) {
            alert("Please enter valid credentials.");
            return;
        }
    
        const domain = email.split("@")[1];
        
        if(! emails.includes(email)){
            alert("Email not found. Please sign up first.");
            return;
        }
        if (domain === "coach.com" || domain === "player.com") {
            localStorage.setItem("userDomain", domain);
            onLogin();
            navigate(domain === "coach.com" ? "/CoachProfile" : "/PlayerProfile");
        } else {
            alert("Invalid email domain. Please use a @coach.com or @player.com email.");
        }
    };
    

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row rounded-5 p-0 shadow box-area login-container">
                {/* Left Section */}
                <div className="col-md-6 rounded-4 d-flex flex-column justify-content-center align-items-center left-box">
                    <div className="featured-image mb-3">
                        <img src="src\assets\Ronaldo.png" className="img-fluid ronaldo" alt="Cristiano Ronaldo" />
                    </div>
                    <small className="text-white text-wrap text-center quote">
                        "Maybe someone doesn't like me because I'm too good" <br /> - Cristiano Ronaldo, 2007
                    </small>
                </div>

                {/* Right Section */}
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4 text-white">
                            <h2 className="fw-bold">Hello, Champ 👋</h2>
                            <p>We are happy to have you back.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="example@sportofolio.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check pt-2">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary text-white">
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div className="forgot pt-2">
                                    <small>
                                        <a
                                            href="#"
                                            className="text-white"
                                            onClick={() => navigate("/ForgetPassword")}
                                         >
                                            Forgot Password?
                                        </a>
                                    </small>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-lg w-100 fs-6 loginbtn fw-normal">
                                    Login
                                </button>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-light w-100 fs-6">
                                    <img
                                        src="src\assets\google.png"
                                        style={{ width: "20px" }}
                                        className="me-2"
                                        alt="Google Logo"
                                    />
                                    <small>Sign In with Google</small>
                                </button>
                            </div>
                            <div className="row text-white">
                                <small>
                                    Don't have an account?{" "}
                                    <a  
                                        href="#" 
                                        className="text-white"
                                        onClick={() => navigate("/Signup")}
                                    >
                                        Sign Up
                                    </a>
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;