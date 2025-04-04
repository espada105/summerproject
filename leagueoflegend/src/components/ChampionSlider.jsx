import React from 'react';

function ChampionSlider({ images }) {
  return (
    <div className="container">
      <div className="slide-container">
        {images.map((image, index) => (
          <div className="slide-image" key={index}>
            <img src={image} alt="Champion" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="slide-image" key={`duplicate-${index}`}>
            <img src={image} alt="Champion" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChampionSlider;