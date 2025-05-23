import React from 'react';
import { Link } from 'react-router-dom';

function SupportDefinition() {
  return (
    <div>
      <div className="topbox">
        <div className="button">
          <Link to="/">
            <button className="custom-btn">이전</button>
          </Link>
        </div>
        <h1>What is supporter</h1>
        <div className="button"></div>
      </div>
      
      <hr />
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ width: '55%', display: 'flex', flexWrap: 'wrap' }}>
          <img src="/images/서폿의 정의1.jpeg" alt="Support Definition" style={{ width: '50%', height: '50%' }} />
          <img src="/images/서폿의 정의2.jpeg" alt="Support Definition" style={{ width: '50%', height: '50%' }} />
          <img src="/images/서폿의 정의3.jpeg" alt="Support Definition" style={{ width: '50%', height: '50%' }} />
          <img src="/images/서폿의 정의4.jpeg" alt="Support Definition" style={{ width: '50%', height: '50%' }} />
        </div>
        
        <div style={{ width: '30%', marginLeft: '5%', marginRight: '5%', fontSize: '20px' }}>
          리그오브레전드에서 다섯가지 포지션중 하나인 서포터라인은 원래 원딜을 보조하기 위한 역할로 만들어지게 되었다.<br />
          이 라인이 결정된 이상, 더 이상 물러설 곳은 없다. 닷지를 하던가 감정을 배제하고 게임에 임해야한다. <br />
          어머니와 같은 존재로 징징대는 노진구를 데리고 대학을 보내야한다. 나쁜 원딜은 없다. 그들은 평상시에는 정상이지만
          그 라인에 가게되는 순간 예민해지며 정상이 아니게 되기에 우리는 이를 이해하고 어머니의 마음으로 키워나가야 한다.
          그저 숟가락인 노진구를 키워 융단폭격기로 만들어야 우리의 몫을 다하는 것이기에 그들이 템을 뽑을때까지 모든 노력을 해줘야한다.
        </div>
      </div>
    </div>
  );
}

export default SupportDefinition;