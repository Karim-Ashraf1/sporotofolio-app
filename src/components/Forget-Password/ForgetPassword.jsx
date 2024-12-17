import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert("Password reset link has been sent to your email.");
            navigate("/"); // Redirect to login page after submission
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row rounded-5 p-3 shadow box-area loginconatiner">
                {/* Left Box */}
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#2EB62B" }}>
                    <div className="featured-image mb-3">
                        <img 
                            src="src/assets/Ronaldo.png" 
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
                            <h2 className="fw-bold">Forgot Your Password? 🔒</h2>
                            <p>Don't worry, we got you covered. Enter your email to reset your password.</p>
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
                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-lg w-100 fs-6 loginbtn fw-normal">
                                    Send Reset Link
                                </button>
                            </div>
                            <div className="row text-white">
                                <small>
                                    Remember your password?{" "}
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

export default ForgetPassword;
