import { Button } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const introData = [
  {
    src: '/assets/intro01.png',
    titie: '즐거움, 모든 것의 원천',
    desc: '우리의 일은 사람들에게 재미를 주는 것이고 그러기 위해 우리가 즐거워야 합니다.',
  },
  {
    src: '/assets/intro02.png',
    titie: '평등의 가치가 만드는 힘',
    desc: '스위트게임즈의 멤버들은 모두가 평등하고 각자의 영역을 존중합니다.',
  },
  {
    src: '/assets/intro03.png',
    titie: '제한 없는 아이디어',
    desc: '한계가 없어야 무한한 아이디어가 나옵니다. 그 아이디어들을 실현시키는 것이 우리입니다.',
  },
  {
    src: '/assets/intro04.png',
    titie: '통합의 시대',
    desc: '온라인과 오프라인의 구분이 의미없는 지금이 바로 메타버스의 시대. 스위트게임즈는 다양한 플랫폼에 도전하고 플랫폼간 통합을 꿈꾸고 있습니다.',
  },
  {
    src: '/assets/intro05.png',
    titie: '환경을 생각하는 기업',
    desc: '게임이 가진 힘은 막강합니다. 우리의 게임 속 콘텐츠로, 제작하는 제품을 통해 환경 보호에 이바지하겠습니다.',
  },
  {
    src: '/assets/intro06.png',
    titie: '미래를 꿈꾸는 사람들',
    desc: '아이디어를 세상에 내놓는 것은 없던 것을 만들어 내야 하는 일입니다. 우리는 아이디어가 완성된 이후를 바라보고, 기대하고, 노력하고 있습니다.',
  },
]
const memberInfo = [
  {
    id: 1,
    name: '손영익',
    said: '여섯살, 처음 플레이한 게임을 잊지 못합니다. 콘텐츠 제작자로 오랜 경력을 쌓은 손영익 대표이사는 게임의 기획과 스토리텔링을 담당합니다.',
  },
  {
    id: 2,
    name: '신정우',
    said: '시각디자인을 담당하는 신정우 디자이너는 다양한 업종에서 쌓은 디자인 경력과 게임에 대한 높은 이해를 바탕으로 스위트게임즈의 모든 디자인을 총괄합니다.',
  },
  {
    id: 3,
    name: '유상영',
    said: '서양화 작가이며, 개인전을 2번이나 성공적으로 개최한 유상영 화가는 컨셉아트와 일러스트를 담당합니다.',
  },
  {
    id: 4,
    name: '이창훈',
    said: '풍부한 게임 경험과 보드게임 제작 경험을 토대로 스위트게임즈의 게임 구성을 담당합니다.',
  },
]
const Container = styled.div`
  text-align: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
const ViewWrapper = styled.div`
  height: 735px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #5f0502;
  background: url('/assets/aboutUsAd.jpg') no-repeat 60% 50% / cover;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100vw;
    padding: 16px 0;
  }
`
const AboutTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  color: #ffffff;
  margin-bottom: 16px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 52px;
    line-height: 110%;
  }
`
const AboutDesc = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #fafafa;
  white-space: pre-wrap;
  margin-bottom: 50px;
`
const SuiteIntro = styled.div`
  margin: 158px auto;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    margin: 80px auto;
  }
`
const CapTitle = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #757575;
  text-transform: capitalize;
  margin-bottom: 24px;
`
const IntroTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #212121;
  margin-bottom: 32px;
  text-transform: uppercase;
`
const IntroDesc = styled(CapTitle)`
  white-space: pre-wrap;
  margin-bottom: 60px;
`
const IntroBoxies = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100vw;
    padding: 16px 0;
    display: block;
  }
`
const IntroBox = styled.div`
  width: 374px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: keep-all;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100vw;
    padding: 32px;
  }
`
const ImgWrp = styled.div`
  width: 100px;
  height: 100px;
  background: #fdf7ef;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto 24px;
`
const BoxTitle = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  color: #212121;
  margin-bottom: 16px;
`
const BoxDesc = styled.div`
  width: 290px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  color: #616161;
`
const PartnersWrp = styled.div`
  height: 565px;
  padding: 80px 0;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
//Member

const MemberWrp = styled.div`
  margin: 0 auto;
  /* padding-bottom: 120px; */
  width: 750px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
  flex-wrap: wrap;
`
const MemberItem = styled.div`
  width: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MemberName = styled.h3`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #212121;
  margin-bottom: 16px;
`
const MemberSaid = styled.p`
  width: 290px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #757575;
  word-break: keep-all;
`

const IntroduceGames = styled.div`
  width: 1200px;
  margin: 158px auto;
  text-align: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
const GamesSlideWrp = styled.div`
  width: 1200px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    display: block;
    padding: 16px;
  }
`
const Slideitem = styled.div`
  width: 397px;
  height: 460px;
  padding: 20px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    padding: 16px 0;
  }
`
const ImageBox = styled.div`
  width: 356px;
  height: 228px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 26px;
  position: relative;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
const CommingSoonWrp = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CStext = styled.h4`
  font-weight: 600;
  color: #c5c5c5;
  font-size: 36px;
  white-space: pre-wrap;
  line-height: 120%;
`
const ItemTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #212121;
  margin-bottom: 16px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 28px;
    font-weight: 700;
  }
`
const ItemDesc = styled.div`
  white-space: pre-wrap;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #757575;
  margin-bottom: 24px;
`

const AboutUsPresenter = () => {
  return (
    <Container>
      <ViewWrapper>
        <AboutTitle>딱 맞는 게임, 재미있는 게임</AboutTitle>
        <AboutDesc>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus{'\n'} vestibulum, facilisi ac, sed faucibus.
        </AboutDesc>
      </ViewWrapper>
      <SuiteIntro>
        <CapTitle>무한한 상상, 세상을 만나느 노력</CapTitle>
        <IntroTitle>스위트게임즈 소개</IntroTitle>
        <IntroDesc>쉼 없이 생각하고, 제한 없이 도전하는 사람들</IntroDesc>
        <IntroBoxies>
          {introData.map((box, index) => {
            return (
              <IntroBox>
                <ImgWrp>
                  <Image src={box.src} width={55} height={55} />
                </ImgWrp>
                <BoxTitle>{box.titie}</BoxTitle>
                <BoxDesc>{box.desc}</BoxDesc>
              </IntroBox>
            )
          })}
        </IntroBoxies>
      </SuiteIntro>
      <PartnersWrp>
        <CapTitle>스위트 게임즈의 핵심 멤버들</CapTitle>
        <IntroTitle>참여인력 소개</IntroTitle>
        <MemberWrp>
          {memberInfo.map((mem) => {
            return (
              <MemberItem key={mem.id}>
                <MemberName>{mem.name}</MemberName>
                <MemberSaid>{mem.said}</MemberSaid>
              </MemberItem>
            )
          })}
        </MemberWrp>
      </PartnersWrp>
      <IntroduceGames>
        <CapTitle>suite games</CapTitle>
        <IntroTitle>스위트 게임즈의 게임들</IntroTitle>
        <IntroDesc>
          초등학교 저학년 부터 60세 어르신까지 모두 다 쉽게 적응합니다.{'\n'} 온
          가족이 함께 즐길 수 있는 파티게임!
        </IntroDesc>
        {/* swiper */}
        <GamesSlideWrp>
          <Slideitem>
            <ImageBox>
              <Image
                src={'/assets/gameImg1.png'}
                width={356}
                height={228}
                layout={'fixed'}
              />
            </ImageBox>
            <ItemTitle>Dig Town</ItemTitle>
            <ItemDesc>
              주사위를 굴려서 진행하는{'\n'} 2 ~ 6인용 레이스형 파티게임
            </ItemDesc>
            <ItemDesc>
              난이도 1점, 쉬워서 누구나 할 수 있는{'\n'} 가족 모임에 딱 맞는
              게임
            </ItemDesc>
          </Slideitem>
          <Slideitem>
            <ImageBox>
              <Image
                src={'/assets/gameImg2.jpeg'}
                width={356}
                height={228}
                layout={'fixed'}
              />
              <CommingSoonWrp>
                <CStext>Comming{'\n'}Soon</CStext>
              </CommingSoonWrp>
            </ImageBox>
            <ItemTitle>Weaken</ItemTitle>
            <ItemDesc>
              몬스터와 계속 진행하는 전투는{'\n'} 영웅을 약하게 만듭니다.
            </ItemDesc>
            <ItemDesc>하지만, 플레이어가 충분히 강하다면?</ItemDesc>
            <ItemDesc>
              당신의 플레이 역량이 모든 것을 좌우하는{'\n'} 로그라이크 플랫포머
              게임.
            </ItemDesc>
          </Slideitem>
          <Slideitem>
            <ImageBox>
              <Image
                src={'/assets/gameImg3.png'}
                width={356}
                height={228}
                layout={'fixed'}
              />
              <CommingSoonWrp>
                <CStext>Comming{'\n'}Soon</CStext>
              </CommingSoonWrp>
            </ImageBox>
            <ItemTitle>Zomvice</ItemTitle>
            <ItemDesc>
              좀비에 대항하는 시민들과{'\n'}
              좀비들을 만드는 마스터{'\n'}
              좀비떼의 압박이 고스란이 전해지는{'\n'}
              전략도 운도 모두 필요한 보드게임
            </ItemDesc>
            <ItemDesc>
              2 ~ 9인까지 플레이 가능해{'\n'}
              대규모 전투가 테이블 위에서 펼쳐집니다.
            </ItemDesc>
          </Slideitem>
        </GamesSlideWrp>
      </IntroduceGames>
    </Container>
  )
}

export default AboutUsPresenter
