import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title, videoUrl, description }) {
  return (
    <div className="topbox" id="topbox">
      <div className="button">
        <Link to="/">
          <button className="custom-btn">
            이전
          </button>
        </Link>
      </div>
      
      <div>
        <h1>{title}</h1>        
        <div className="box0">
          <hr />
          {videoUrl && (
            <iframe 
              className="youtube" 
              src={videoUrl} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ width: '90%', height: '60%' }}
            ></iframe>
          )}
          {description && <p>{description}</p>}
        </div>
      </div>
      
      <button className="custom-btn">
        NEXT
      </button>
    </div>
  );
}

export default Header;