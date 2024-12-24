import React, { useState, useEffect } from "react";
import "./Settings.css";
import LeftMenu from "../LeftMenu";
import Navbar from "../Navbar";
import { getName, setName } from "../Data/Data";

const Settings = () => {
    const [activeSection, setActiveSection] = useState("PublicProfile");
    const [settings, setSettings] = useState({
        name: getName(),
        publicEmail: "ZOZ@sportofolio.com",
        bio: "Talented goalkeeper currently playing for Al Ahly, one of Egypt's most prestigious football clubs. Born and raised in Cairo.",
        pronouns: "he/him",
        url: "http://sportofolio/profile/{id}",
        darkMode: false,
        emailNotifications: true,
        smsNotifications: false,
    });

    // Load settings from localStorage on component mount
    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem("userSettings"));
        if (savedSettings) {
            setSettings(savedSettings);
        }
    }, []);

    // Save settings to localStorage when they change
    useEffect(() => {
        localStorage.setItem("userSettings", JSON.stringify(settings));
    }, [settings]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(settings.name); 
        alert(`Name changed to: ${settings.name}`);
    };

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }));
    };

    return (
        <div>
            <Navbar />
            <LeftMenu />
            <div className="settings-container">
                <div className="settings-sidebar">
                    <ul>
                        <li
                            className={activeSection === "PublicProfile" ? "active" : ""}
                            onClick={() => setActiveSection("PublicProfile")}
                        >
                            Public profile
                        </li>
                        <li
                            className={activeSection === "Account" ? "active" : ""}
                            onClick={() => setActiveSection("Account")}
                        >
                            Account
                        </li>
                        <li
                            className={activeSection === "Appearance" ? "active" : ""}
                            onClick={() => setActiveSection("Appearance")}
                        >
                            Appearance
                        </li>
                        <li
                            className={activeSection === "Notifications" ? "active" : ""}
                            onClick={() => setActiveSection("Notifications")}
                        >
                            Notifications
                        </li>
                    </ul>
                </div>
                <div className="settings-content">
                    {activeSection === "PublicProfile" && (
                        <form onSubmit={handleNameChange}>
                            <h2>Public profile</h2>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={settings.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Public email</label>
                                <input
                                    type="email"
                                    name="publicEmail"
                                    value={settings.publicEmail}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Bio</label>
                                <textarea
                                    name="bio"
                                    value={settings.bio}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Pronouns</label>
                                <select
                                    name="pronouns"
                                    value={settings.pronouns}
                                    onChange={handleInputChange}
                                >
                                    <option value="he/him">he/him</option>
                                    <option value="she/her">she/her</option>
                                    <option value="they/them">they/them</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>URL</label>
                                <input
                                    type="url"
                                    name="url"
                                    value={settings.url}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="change-button">
                                Change Name
                            </button>
                        </form>
                    )}
                    {activeSection === "Account" && (
                        <div>
                            <h2>Account Settings</h2>
                            <p>Manage your account preferences here.</p>
                        </div>
                    )}
                    {activeSection === "Appearance" && (
                        <div>
                            <h2>Appearance Settings</h2>
                            <div className="form-group inline">
                                <label>Dark Mode</label>
                                <div
                                    className={`toggle ${
                                        settings.darkMode ? "active" : "inactive"
                                    }`}
                                    onClick={() => handleToggle("darkMode")}
                                ></div>
                            </div>
                        </div>
                    )}
                    {activeSection === "Notifications" && (
                        <div>
                            <h2>Notification Settings</h2>
                            <div className="form-group inline">
                                <label>Email Notifications</label>
                                <div
                                    className={`toggle ${
                                        settings.emailNotifications ? "active" : "inactive"
                                    }`}
                                    onClick={() => handleToggle("emailNotifications")}
                                ></div>
                            </div>
                            <div className="form-group inline">
                                <label>SMS Notifications</label>
                                <div
                                    className={`toggle ${
                                        settings.smsNotifications ? "active" : "inactive"
                                    }`}
                                    onClick={() => handleToggle("smsNotifications")}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
