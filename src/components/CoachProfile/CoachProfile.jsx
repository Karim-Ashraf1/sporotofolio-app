import React, { useEffect } from "react";
import "./CoachProfile.css";

const CoachProfile = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".profile-tabs .tab");
    const sections = document.querySelectorAll(".profile-content > div");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        sections.forEach((s) => s.classList.remove("active"));

        tab.classList.add("active");
        const targetId = tab.getAttribute("data-tab");
        document.getElementById(targetId).classList.add("active");
      });
    });
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">Sportofolio</a>
        <nav className="navigation">
          <div className="links">
            <a href="../Home/home.html" className="home">Home</a>
            <a href="../Store/store.html" className="store">Store</a>
            <a href="../Blog/blog.html" className="blog">Blog</a>
          </div>
          <button className="login">Login</button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section className="profile-section">
          <div className="profile-header">
            <img
              src="src\assets\pep.jpeg"
              alt="Profile Picture"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1 className="profile-name">Pep Guardiola</h1>
              <p className="profile-location">Manchester, England</p>
              <button className="follow-button">+ Follow</button>
              <div className="profile-stats">
                <span>1M Followers</span> | <span>30K Ratings</span>
              </div>
              <p className="profile-bio">
                Pep Guardiola is the highly successful coach of Manchester City
                , having won 6 Premier League titles in just 7 years. However
                , in the last 10 matches, he has only won 1 game, because Rodri stole the Ballon d'Or from Vinícius Júnior
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="profile-tabs">
            <button className="tab active" data-tab="gallery">
              <i className="ri-play-line"></i>
            </button>
            <button className="tab" data-tab="info">
              <i className="ri-information-line"></i>
            </button>
          </div>

          {/* Content */}
          <div className="profile-content">
            <div className="gallery-section active" id="gallery">
              <div className="gallery-grid">
                <img
                  src="https://media.giphy.com/media/hryis7A55UXZNCUTNA/giphy.gif"
                  alt="ronaldo"
                />
                <img
                  src="https://media.giphy.com/media/jIMfuPWTrYgEw/giphy.gif"
                  alt="cr7"
                />
                <img
                  src="https://media.giphy.com/media/SKAQ4kWov6tdC/giphy.gif"
                  alt="ronaldo"
                />
                <img
                  src="https://media.giphy.com/media/ludb5M5f7udlDMGqVA/giphy.gif"
                  alt="cr7"
                />
                <img
                  src="https://media.giphy.com/media/4jtODh4Qekmic/giphy.gif"
                  alt="cr7"
                />
                <img
                  src="https://media.giphy.com/media/qlMvnlzaeSUwM/giphy.gif"
                  alt="cr7"
                />
              </div>
            </div>

            <div className="content-section" id="info">
              <div className="details-grid">
                <div className="detail-item">
                  <h3>Current Club</h3>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/ar/2/21/Al_Ahly_SC_logo_23.svg"
                    alt="Al Ahly"
                  />
                  <p>Al Ahly (2022–Present)</p>
                </div>
                <div className="detail-item">
                  <i className="ri-heart-line"></i>
                  <h3>Heart Rate</h3>
                  <p>70 BPM</p>
                </div>
                <div className="detail-item">
                  <i className="ri-calendar-schedule-line"></i>
                  <h3>Age</h3>
                  <p>18 years</p>
                </div>
                <div className="detail-item">
                  <i className="ri-footprint-line"></i>
                  <h3>Used Foot</h3>
                  <p>Right, Left</p>
                </div>
                <div className="detail-item">
                  <i className="ri-ruler-line"></i>
                  <h3>Length</h3>
                  <p>190 cm</p>
                </div>
                <div className="detail-item">
                  <i className="ri-fire-line"></i>
                  <h3>Calories</h3>
                  <p>620.9 kcal</p>
                </div>
                <div className="detail-item">
                  <i className="ri-scales-2-line"></i>
                  <h3>Weight</h3>
                  <p>91 kg</p>
                </div>
                <div className="detail-item">
                  <h3>Previous Clubs</h3>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/ar/e/ec/Zamalek_Logo.svg"
                    alt="Zamalek"
                  />
                  <p>Zamalek (2018–2022)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>Copyright © 2024 Sportofolio. All rights reserved</footer>
    </>
  );
};

export default CoachProfile;
