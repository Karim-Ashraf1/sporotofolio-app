import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Signup.css";
import { emails, addEmail } from "../Data/Data";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const sendEmail = (email) => {
        const templateParams = {
            user_email: email,
            user_name: name,
            sender_email: "sportofolioapp@gmail.com",
            sender_name: "Sportofolio",
            email_subject: "Welcome to Sportofolio – Your Journey Starts Here!",
            email_content: `Hi ${name},\n\nCongratulations on joining the Sportofolio community! 🎉\n\nWe’re thrilled to have you on board. Sportofolio is designed to help athletes like you showcase your talent, connect with opportunities, and achieve your goals.\n\nHere’s what you can do next:\n\n- Complete Your Profile: Add details about your achievements, skills, and aspirations to stand out.\n- Explore Opportunities: Discover teams, scouts, and coaches looking for talent like yours.\n- Connect with Others: Build your network with fellow athletes and professionals in the sports industry.\n\nIf you have any questions or need help getting started, our support team is here for you. Simply reply to this email or visit our Help Center.\n\nLet’s make your sports journey unforgettable!\n\nWelcome to the team,\nThe Sportofolio Team`,
    
        };

        emailjs
            .send(
                "service_s7v8jy5",
                "template_1bxwh0p",
                templateParams,
                "9XO3HQagnoUS_bDL7"
            )
            .then(
                (response) => {
                    addEmail(email);
                    alert("Account created successfully! Please check your email :)");
                    console.log("Email sent successfully!", response.status, response.text);
                    navigate("/");
                },
                (error) => {
                    alert("Failed to create Account, Please enter valid email.");
                    console.error("Failed to send email.", error);
                }
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const domain = email.split("@")[1];

        if (!emails.includes(email) &&  password === confirmPassword && name && email) {
            sendEmail(email);
        } else if (emails.includes(email)) {
            alert("This email is already registered. Please login.");
        } else if(password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else if (!name || !email) {
            alert("Please fill out all fields correctly.");
        } else {
            alert("Please enter valid credentials.");
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
