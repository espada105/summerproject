import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px' }}>
        <Link to="/definition">
          <button className="custom-btn">
            서폿의 정의
          </button>
        </Link>
        
        <Link to="/basics">
          <button className="custom-btn">
            서폿의 기본
          </button>
        </Link>
        
        <Link to="/noblesse">
          <button className="custom-btn">
            황금도구-노블레스
          </button>
        </Link>
        
        <Link to="/utility">
          <button className="custom-btn">
            혜지-유틸리티
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;