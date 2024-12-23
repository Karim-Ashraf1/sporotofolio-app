import React, { useEffect } from "react";
import "./PlayerProfile.css";
import Navbar from '../Navbar';

const PlayerProfile = () => {
  useEffect(() => {
    // Add event listeners for tab switching
    const tabs = document.querySelectorAll(".profile-tabs .tab");
    const sections = document.querySelectorAll(".profile-content > div");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        sections.forEach((s) => s.classList.remove("active"));

        // Add active class
        tab.classList.add("active");
        const targetId = tab.getAttribute("data-tab");
        document.getElementById(targetId).classList.add("active");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      tabs.forEach((tab) =>
        tab.removeEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active"));
          sections.forEach((s) => s.classList.remove("active"));

          tab.classList.add("active");
          const targetId = tab.getAttribute("data-tab");
          document.getElementById(targetId).classList.add("active");
        })
      );
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section className="profile-section">
          <div className="profile-header">
            <img
              src="src\assets\mosamy.jpg"
              alt="Profile Picture"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1 className="profile-name">Zeyad Waleed</h1>
              <p className="profile-location">Cairo, Egypt</p>
              <button className="follow-button">+ Follow</button>
              <div className="profile-stats">
                <span>1M Followers</span> | <span>30K Ratings</span>
              </div>
              <p className="profile-bio">
                Talented goalkeeper currently playing for Al Ahly, one of
                Egypt's most prestigious football clubs. Born and raised in
                Cairo.
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="profile-tabs">
            <button className="tab active" data-tab="gallery">
              <i className="ri-play-line"></i>
            </button>
            <button className="tab" data-tab="info">
              <i className="ri-information-line"></i>
            </button>
          </div>

          {/* Profile Content */}
          <div className="profile-content">
            {/* Photos and Videos Section */}
            <div className="gallery-section active" id="gallery">
              <div className="gallery-grid">
                <img
                  src="https://media.giphy.com/media/hryis7A55UXZNCUTNA/giphy.gif?cid=ecf05e47uxzfhnfjrv62jpfej7vjzo2t1zix22zxfiy9la5l&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="ronaldo"
                />
                <img
                  src="https://media.giphy.com/media/jIMfuPWTrYgEw/giphy.gif?cid=ecf05e47diwoxjd9n618juxjuh09kkxnj2yfhjkhavrsbuqc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="cr7"
                />
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdkaTQ2dWF4cHI0MTRqYndsc2JoeGI2MWp2NHdrYWp5c2V1cXZlZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SKAQ4kWov6tdC/giphy.gif"
                  alt="ronaldo"
                />
                <img
                  src="https://media.giphy.com/media/ludb5M5f7udlDMGqVA/giphy.gif?cid=ecf05e47zqucb7ri4lcrnkofpvymhuhn4jy8g78yitji4rlc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="cr7"
                />
                <img
                  src="https://media.giphy.com/media/4jtODh4Qekmic/giphy.gif?cid=ecf05e47zqucb7ri4lcrnkofpvymhuhn4jy8g78yitji4rlc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="cr7"
                />
                <img
                  src="https://media.giphy.com/media/qlMvnlzaeSUwM/giphy.gif?cid=790b7611udtoib8u86wv0dh6hmibyh6ldhfaictyr79tcmwq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="cr7"
                />
              </div>
            </div>

            {/* Player Info Section */}
            <div className="content-section" id="info">
              <div className="details-grid">
                <div className="detail-item">
                  <h3>Current Club</h3>
                  <img src="https://upload.wikimedia.org/wikipedia/ar/thumb/2/21/Al_Ahly_SC_logo_23.svg/1538px-Al_Ahly_SC_logo_23.svg.png" />
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
                  <img src="https://upload.wikimedia.org/wikipedia/ar/thumb/e/ec/Zamalek_Logo.svg/162px-Zamalek_Logo.svg.png" />
                  <p>Zamalek (2018–2022)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlayerProfile;
