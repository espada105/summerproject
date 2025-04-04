import React from 'react';
import Header from '../components/Header';
import ChampionSection from '../components/ChampionSection';

function NoblesseSupports() {
  return (
    <div>
      <Header 
        title="Nobless supporter"
        videoUrl="https://www.youtube.com/embed/dq2Ij3zNL-w"
        description="노블레스를 알아보자"
      />
      
      <ChampionSection 
        champion="Nautilus"
        backgroundImage="/images/Nautilus.jpg"
        videoUrl="https://www.youtube.com/embed/_15rwm40THo"
        comment="*comment: 이동기 예측그랩 아닌이상 그랩던지면 거의 다 맞는다."
        details={
          <>
            <img src="/images/nautilus1.png" width="580px" alt="Nautilus" />
            <br /><br /><br /><br />
            - 기본적으로는 빙결룬을 사용한다(탱커폿일경우에는 여진을 드는걸 추천한다).<br />
            - 평W평이 안된다면 이것부터 연습해야 한다.<br />
            - 그랩을 지형을 맞추면 쿨타임이 감소하는데 이걸통해서 라인을 빠르게 복귀할 수 있다.<br />
            - 그랩폭이 넓어서 못맞추는일은 거의 없지만 미니언이나 지형 잘못맞춰서 죽는일이 많다.<br />
            - cc에 맞아도 그랩이 맞은 지형으로는 이동이 되기에 블츠그랩을 대신 맞아줄수도 있다.<br />
            - R은 노틸이 닻에서 나가는 것이기에 궁을 쓸 때는 닻을 신경써서 써야한다.<br />
          </>
        }
        nextLink="#text2"
      />
      
      <ChampionSection 
        champion="Blitzcrank"
        backgroundImage="/images/Blitzcrank.jpg"
        videoUrl="https://www.youtube.com/embed/aMhQZI1MkEs"
        comment="*comment: 블리츠크랭크는 원딜 떠먹이기 제일 좋은 챔프다."
        details={
          <>
            <img src="/images/blitzcrank1.png" width="580px" alt="Blitzcrank" />
            <br /><br /><br /><br />
            - 기본적으로는 빙결룬을 사용한다.<br />
            - 그랩이 자신없다면 마공점을 드는걸 추천한다(마공점+백그랩을 하면 거의70프로는 끌린다)<br />
            - 기본콤보로 평E평을 쓸 줄 알아야한다(블츠는 평타딜이 생각보다 쎄다)<br />
            - 보조룬은 한 방이 강한 상대(파이크,노틸,블츠)일 경우에 뼈방패를 반드시 들어야한다.<br />
            - 도주기 있는 원딜 상대로는 최대한 붙어서 그랩을 해야한다.(맞으면서 붙어도된다)<br />
            - 그랩폭이 좁고 투사체가 빠르기 때문에 미해분을 활용하면 상대방이 반응못하게 끌 수 있다.<br />
          </>
        }
        nextLink="#text3"
      />
      
      <ChampionSection 
        champion="Leona"
        backgroundImage="/images/Leona.jpg"
        videoUrl="https://www.youtube.com/embed/E6Ic0PyVUVc"
        comment="*comment: 예전보다는 위상이 떨어지긴 했으나 그래도 스킬셋이 상당히 좋다."
        details={
          <>
            <img src="/images/leona1.png" width="580px" alt="Leona" />
            <br /><br /><br /><br />
            - 기본적으로는 빙결룬을 사용한다.(탱커폿일경우에는 여진을 드는걸 추천한다).<br />
            - 기본콤보인 평Q평을 할 줄 알아야한다(레오나는 Q쿨이 짧아 더 중요하다).<br />
            - 확실한 킬각을 내려면 선궁말고 속박을 먼저 맞춘다음 기절+궁을 넣으면 확정이다.<br />
            - 보조룬은 한 방이 강한 상대(파이크,노틸,블츠)일 경우에 뼈방패를 반드시 들어야한다.<br />
            - 라인관리를 할 때 레오나는 W쓰고 일부러 스킬을 맞아주는게 좋다<br />
            - 들어가는 챔피언이라 원딜이 쉽게 때릴수 있는 곳일 때 들어가야 한다.<br />
          </>
        }
        nextLink="#text4"
      />
      
      <ChampionSection 
        champion="Thresh"
        backgroundImage="/images/Thresh.jpg"
        videoUrl="https://www.youtube.com/embed/u1CO1zsikzc"
        comment="*comment:노블레스에서 가장 피지컬이 중요하다."
        details={
          <>
            <img src="/images/thresh1.png" width="580px" alt="Thresh" />
            <br /><br /><br /><br />
            - 기본적으로는 여진이나 빙결룬을 사용한다(여진을 추천하는데, 여진은 추가방마저로 효율이 좋아지는데 쓰레쉬는 영혼으로 추가방마저를 얻는 챔피언이라 여진의 효율이 최고다. ).<br />
            - E를 3개 찍고 Q를 선마해야한다. op.gg에서는 q선을 추천하지만 E를 세 개 찍으먼 쿨감이 최고치로 올라가기때문에 3개만 찍고 나머지는 Q를 먼저 찍어야한다.<br />
            - E 패시브가 평타 강화이기 때문에 긴사거리로 평타 짤짤이를 넣어줘야한다.<br />
            - E가 닿는다면 E+Q를 써야한다(슬로우로 맞추기가 쉽다)<br />
            - Q를 맞췄다고 바로 Q를써서 달려가기 보다는 최대한 천천히 쓰는게 중요하다.<br />
            - 궁을 확정 CC로 넣으려면 Q+R+E를 쓰면 확정적으로 맞출수있다.<br />
          </>
        }
        nextLink="#topbox"
      />
    </div>
  );
}

export default NoblesseSupports;
