

// pages/SupportBasics.jsx
import React from 'react';
import Header from '../components/Header';
import ChampionSection from '../components/ChampionSection';

function SupportBasics() {
  return (
    <div>
      <Header 
        title="Support Basics"
        videoUrl="https://www.youtube.com/embed/vUCQfu4wf3c"
        description="서폿 기본기에 대해 알아봅시다"
      />
      
      <ChampionSection 
        champion="챔피언 상대"
        backgroundImage="/images/Nautilus.jpg"
        videoUrl="https://www.youtube.com/embed/_15rwm40THo"
        comment="*comment: 상대 챔피언에 대한 이해는 서포터의 기본입니다."
        details={
          <>
            <img src="/images/nautilus1.png" width="580px" alt="Nautilus" />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            - 기본적으로는 콩콩이룬을 사용한다.<br />
            - 암살자가 많은 경우에는 수호자를 드는 것을 추천한다.<br />
            - 보조룬은 일반적으로 영감을 들어준다.<br />
            - 보조룬은 한 방이 강한 상대(파이크,노틸,블츠)일 경우에 뼈방패를 반드시 들어야한다.<br />
          </>
        }
        nextLink="#라인전운영"
      />
      
      <ChampionSection 
        champion="라인전 운영"
        backgroundImage="/images/Blitzcrank.jpg"
        videoUrl="https://www.youtube.com/embed/aMhQZI1MkEs"
        comment="라인전 운영은 서포터로서 초반 게임을 좌우합니다."
        details={
          <>
            <img src="/images/blitzcrank1.png" width="580px" alt="Blitzcrank" />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            - 기본적으로는 콩콩이룬을 사용한다.<br />
            - 암살자가 많은 경우에는 수호자를 드는 것을 추천한다.<br />
            - 보조룬은 일반적으로 영감을 들어준다.<br />
            - 보조룬은 한 방이 강한 상대(파이크,노틸,블츠)일 경우에 뼈방패를 반드시 들어야한다.<br />
          </>
        }
        nextLink="#라인전후운영"
      />
      
      <ChampionSection 
        champion="라인전 후 운영"
        backgroundImage="/images/Leona.jpg"
        videoUrl="https://www.youtube.com/embed/E6Ic0PyVUVc"
        comment="라인전 이후에도 서포터의 역할은 계속됩니다."
        details={
          <>
            <img src="/images/leona1.png" width="580px" alt="Leona" />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            - 기본적으로는 콩콩이룬을 사용한다.<br />
            - 암살자가 많은 경우에는 수호자를 드는 것을 추천한다.<br />
            - 보조룬은 일반적으로 영감을 들어준다.<br />
            - 보조룬은 한 방이 강한 상대(파이크,노틸,블츠)일 경우에 뼈방패를 반드시 들어야한다.<br />
          </>
        }
        nextLink="#시야"
      />
      
      <ChampionSection 
        champion="시야"
        backgroundImage="/images/Thresh.jpg"
        videoUrl="https://www.youtube.com/embed/ho6SLVNGSnw"
        comment="시야 확보는 서포터의 핵심 임무입니다."
        details={
          <>
            <img src="/images/thresh1.png" width="580px" alt="Thresh" />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            - 기본적으로는 콩콩이룬을 사용한다.<br />
            - 암살자가 많은 경우에는 수호자를 드는 것을 추천한다.<br />
            - 보조룬은 일반적으로 영감을 들어준다.<br />
            - 보조룬은 한 방이 강한 상대(파이크,노틸,블츠)일 경우에 뼈방패를 반드시 들어야한다.<br />
          </>
        }
        nextLink="#topbox"
      />
    </div>
  );
}

export default SupportBasics;
