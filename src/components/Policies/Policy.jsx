import React from "react";
import "./Policy.css";
import LeftMenu from "../LeftMenu";
import Navbar from "../Navbar";

const Policy = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid policy-layout">
                <div className="row">
                    {/* LeftMenu: Fixed width column */}
                    <div className="col-md-3 col-lg-2 left-menu-container">
                        <LeftMenu />
                    </div>

                    {/* Policy Content: Responsive content column */}
                    <div className="col-md-9 col-lg-10 policy-content">
                        <h1 className="policy-title">Privacy Policy</h1>
                        <p className="policy-description">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                        <section className="policy-section">
                            <h2>1. Information We Collect</h2>
                            <p>We may collect personal information such as your name, email address, and usage data to provide better services.</p>
                        </section>
                        <section className="policy-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>Your information is used to improve user experience, provide customer support, and ensure the security of our services.</p>
                        </section>
                        <section className="policy-section">
                            <h2>3. Your Rights</h2>
                            <p>You have the right to access, update, or delete your personal data. Contact us for more information.</p>
                        </section>
                        <section className="policy-section">
                            <h2>4. Data Security</h2>
                            <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
                        </section>
                        <section className="policy-section">
                            <h2>5. Updates to This Policy</h2>
                            <p>We may update this Privacy Policy periodically. Please review it regularly to stay informed about any changes.</p>
                        </section>
                        <section className="policy-section">
                            <h2>6. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, feel free to contact us at privacy@yourwebsite.com.</p>
                        </section>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Policy;
