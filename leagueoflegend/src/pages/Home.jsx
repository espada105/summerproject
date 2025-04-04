import React from 'react';
import Navigation from '../components/Navigation';
import ChampionSlider from '../components/ChampionSlider';
import Footer from '../components/Footer';

function Home() {
  const topRowImages = [
    '/images/Thresh.jpg',
    '/images/Seraphin.jpg',
    '/images/Rakan.jpg',
    '/images/Nautilus.jpg',
    '/images/Nami.jpg'
  ];
  
  const bottomRowImages = [
    '/images/Morgana.jpg',
    '/images/milio.jpg',
    '/images/Lux.jpg',
    '/images/Lulu.jpg',
    '/images/Leona.jpg',
    '/images/Janna.jpg',
    '/images/Braum.jpg',
    '/images/Blitzcrank.jpg'
  ];
  
  return (
    <div>
      <div style={{ height: 'auto', minHeight: '100vh' }}>
        <h1>All about supporters</h1>
        <p>This website will teach you how to become a Doraemon for Nojingu</p>
        
        <Navigation />
        
        <hr />
        
        <ChampionSlider images={topRowImages} />
        <ChampionSlider images={bottomRowImages} />
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;