import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "../../src/assets/banner1.png", 
        "../../src/assets/banner2.png", 
        "../../src/assets/banner3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    const handleButtonClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="banner-container">
            <div className="banner-image">
                <img src={images[currentImageIndex]} alt="Banner" />
            </div>
            <div className="banner-buttons">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`banner-button ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
