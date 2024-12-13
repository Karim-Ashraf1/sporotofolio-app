import React from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img src="src/assets/profilepostpic.png" alt="Profile" className="post-profile-pic" />
        <div className="post-user-info">
          <p className="post-user-name">Real Madrid C.F.</p>
          <p className="post-time">2h</p>
        </div>
      </div>

      <div className="post-content">
        <p>💪 Final session ahead of Rayo clash!
        🔥 ¡Último entrenamiento antes del partido contra el Rayo!
        #RMCity #RayoRealMadrid
        </p>

        <img src="src/assets/post.png" alt="Post content" className="post-image" />
      </div>

      <div className="post-actions">
        <button className="post-action-btn">
          <FaThumbsUp className="iconpadding" />
          Like
        </button>
        <button className="post-action-btn">
          <FaComment className="iconpadding" />
          Comment
        </button>
        <button className="post-action-btn">
          <FaShare className="iconpadding" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
