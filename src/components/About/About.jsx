import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import LeftMenu from "../LeftMenu/LeftMenu";

import KarimAshraf from "../../assets/images/karimashraf.png";
import ZeyadWaleed from "../../assets/images/profile pic.png";
import KareemAdel from "../../assets/images/kareemadel.png";
import AbdelrahmanElKady from "../../assets/images/elkady.png";

const AboutUs = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Karim Ashraf",
      image: KarimAshraf,
      description:
        "Forward-thinking and dynamic VR Developer with expertise in immersive technologies, virtual environments, and interactive simulations.",
      github: "https://github.com/Karim-Ashraf1",
      linkedin: "https://linkedin.com/in/karim-badawi",
    },
    {
      name: "Zeyad Waleed",
      image: ZeyadWaleed,
      description:
        "Creative and user-focused UI/UX Designer with a deep understanding of design principles, usability, and interaction design. ",
      github: "https://github.com/ZeyadWaleed7",
      linkedin: "https://linkedin.com/in/zeyad-waleed/",
    },
    {
      name: "Kareem Adel",
      image: KareemAdel,
      description:
        "Innovative and detail-oriented Software Developer with a solid foundation in software engineering, problem-solving.",
      github: "https://github.com/Kareemaadel",
      linkedin: "https://linkedin.com/in/kareem-adel-b4aa0a262/",
    },
    {
      name: "Abdelrahman El-Kady",
      image: AbdelrahmanElKady,
      description:
        "Passionate and creative Game Developer with a strong foundation in game mechanics.",
      github: "https://github.com/itsamekadio",
      linkedin: "https://linkedin.com/in/abd-elrahman-elkady-a59187313/",
    },
  ];

  return (
    <div>
      <Navbar />
      <LeftMenu />
      <div className="about-section">
        <h1 className="about-title">Meet Our Team</h1>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.image}
                alt={`Team Member ${index + 1}`}
                className="team-photo"
              />
              <h2 className="team-name">{member.name}</h2>
              <p className="team-description">{member.description}</p>
              <div className="team-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
