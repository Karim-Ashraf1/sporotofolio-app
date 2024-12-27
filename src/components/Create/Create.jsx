import React, { useState } from 'react';
import './Create.css';
import LeftMenu from "../LeftMenu";
import Navbar from "../Navbar";
import { FaClock, FaFile, FaVideo, FaExpand } from 'react-icons/fa';

const Create = () => {
    const [postText, setPostText] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    const handlePostChange = (e) => {
        setPostText(e.target.value);
    };

    const handleUpload = () => {
        alert('Post uploaded successfully!');
    };

    return (
        <div>
            <Navbar />
                <LeftMenu />
            <div className="upload-container d-flex flex-column gap-3"> 
                
                <div className="upload-form">
                    <h2>Upload Video or Photo</h2>
                    <textarea
                        className="post-input"
                        placeholder="Write something about your video/photo..."
                        value={postText}
                        onChange={handlePostChange}
                    />
                    <div className="file-upload-section">
                        <input
                            type="file"
                            multiple
                            accept="video/*,image/*"
                            onChange={handleFileChange}
                            id="fileInput"
                            className="file-input"
                        />
                        <label htmlFor="fileInput" className="upload-label">
                            Select videos to upload<br />
                            <span>Or drag and drop them here. You can upload up to 30 videos.</span>
                        </label>
                        {selectedFiles && (
                            <div className="file-preview">
                                {Array.from(selectedFiles).map((file, index) => (
                                    <div key={index} className="file-item">
                                        {file.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className="upload-btn" onClick={handleUpload}>
                        Post
                    </button>
                </div>
                <div className="upload-info d-flex gap-2">
                    <div className="d-flex flex-column">
                    <p className="Upload-title">
                        <FaClock className="info-icon" />
                        Size and duration
                    </p>
                    <p>Maximum size: 10 GB, video duration: 60 minutes.</p>
                    </div>

                    <div className="d-flex flex-column">
                    <p className="Upload-title">
                        <FaFile className="info-icon" />
                        File formats
                    </p>
                    <p>Recommended: ".mp4". Other major formats are supported.</p>
                    </div>

                    <div className="d-flex flex-column">
                    <p className="Upload-title">
                        <FaVideo className="info-icon" />
                        Video resolutions
                    </p>
                    <p>High-resolution recommended: 1080p, 1440p, 4K.</p>
                    </div>

                    <div className="d-flex flex-column">
                    <p className="Upload-title">
                        <FaExpand className="info-icon" />
                        Aspect ratios
                    </p>
                    <p>Recommended: 16:9 for landscape, 9:16 for vertical.</p>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Create;
