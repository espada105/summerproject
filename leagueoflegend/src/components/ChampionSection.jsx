import React from 'react';

function ChampionSection({ champion, backgroundImage, videoUrl, comment, details, nextLink }) {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    backgroundImage: `url(${backgroundImage})`,
    fontSize: '200px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    fontFamily: '"Cormorant Garamond", serif',
    height: '100vh'
  };

  return (
    <>
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={headerStyle}>
          {champion}
          <a href={nextLink}>
            <button className="custom-btn">
              NEXT
            </button>
          </a>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'black' }}>
        <div style={{ width: '50%', backgroundColor: 'black', color: 'white' }}>
          <div style={{ width: '100%', height: '50%', backgroundColor: '#000000' }}>
            <iframe 
              width="90%" 
              height="90%" 
              style={{ margin: '5%' }}
              src={videoUrl} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div style={{ width: '640px', height: '295px', margin: '5%', backgroundColor: '#111111', fontSize: '20px', padding: '20px' }}>
            {comment}
          </div>
        </div>
        <div style={{ width: '50%', backgroundColor: '#000000', color: 'white' }}>
          <div style={{ margin: '40px', height: '700px', backgroundColor: '#111111', color: 'white', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '25px' }}>
              {details}
            </div>
            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end', paddingBottom: '40px', marginTop: 'auto' }}>
              <a href={nextLink}>
                <button className="custom-btn">
                  NEXT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChampionSection;