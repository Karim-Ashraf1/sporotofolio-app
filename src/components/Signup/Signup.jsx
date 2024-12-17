import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && name && email) {
            alert("Account created successfully!");
            navigate("/login"); // Redirect to login page after successful signup
        } else {
            alert("Please fill out all fields correctly.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row rounded-5 p-3 shadow box-area loginconatiner">
                {/* Left Box */}
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#2EB62B" }}>
                    <div className="featured-image mb-3">
                        <img 
                            src="src\assets\Ronaldo.png" 
                            className="img-fluid ronaldo"
                            style={{ width: "500px" }} 
                            alt="Cristiano Ronaldo" 
                        />
                    </div>
                    <small className="text-white text-wrap text-center" style={{ width: "17rem" }}>
                        "Maybe someone doesn't like me because I'm too good" - Cristiano Ronaldo, 2007
                    </small>
                </div>

                {/* Right Box */}
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4 text-white">
                            <h2 className="fw-bold">Hello, Champ 👋</h2>
                            <p>We are happy to have you here.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
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
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group mb-1">
                                <input
                                    type="password"
                                    className="form-control form-control-lg bg-light fs-6"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-lg w-100 fs-6 loginbtn fw-normal">
                                    Sign Up
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
                                    <small>Sign Up with Google</small>
                                </button>
                            </div>
                            <div className="row text-white">
                                <small>
                                    Have an account?{" "}
                                    <a 
                                        href="#" 
                                        className="text-white" 
                                        onClick={() => navigate("/")}
                                    >
                                        Login
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

export default Signup;
