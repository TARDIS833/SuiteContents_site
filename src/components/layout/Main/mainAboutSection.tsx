import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  }
`
const IntroWrapper = styled.div`
  margin: 80px auto 160px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    text-align: center;
    display: block;
  }
`

const IntroSecWrp = styled.div`
  width: 590px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`
const IntroTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 1.2px;
  color: #212121;
  margin-bottom: 16px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 2.3em;
  }
`
const IntroDesc = styled.h4`
  width: 450px;
  display: inline-block;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #757575;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    font-size: 1em;
  }
`
const ImgWrp = styled.div`
  width: 590px;
  height: 495px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #eff3fd;
  border-radius: 5px;
  overflow: hidden;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`
const SectionTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #212121;
  margin-bottom: 16px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 2.1em;
  }
`
const SectionDesc = styled.p`
  font-family: 'Inter';
  font-size: 20px;
  line-height: 24px;
  color: #757575;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 1em;
  }
`
const VideoSection = styled.div`
  width: 1200px;
  margin: 80px auto 160px;
  text-align: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
  }
`

const VideoWrapper = styled.div`
  display: flex;
  margin: 70px 0 10px;
  gap: 38px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 48px auto;
    display: block;
  }
`
const Video = styled.video`
  width: 90%;
  height: auto;
  margin: 0 auto;
`
/*
const Video = styled.div`
  width: 652px;
  height: 472px;
  background: #eff3fd;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    height: 240px;
    margin: 0 auto;
    margin-bottom: 24px;
  }
`
*/
const VideoDesc = styled.div`
  margin-top: 16px;
  text-align: center;
`

const QuotationWrapper = styled.div`
  width: 510px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`
const Quotation = styled.h3`
  font-family: 'Inter';
  font-size: 32px;
  line-height: 48px;

  display: flex;
  align-items: center;
  letter-spacing: 0.4;
  text-transform: capitalize;
  color: #212121;
`
const QuotationSign = styled.p`
  display: inline-block;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #757575;
  & span {
    font-weight: 500;
  }
`

const AboutSection = () => {
  return (
    <Container>
      <IntroWrapper>
        <IntroSecWrp>
          <IntroTitle>시간이 벌써 이렇게?</IntroTitle>
          <IntroDesc>
            게임에 열중하면 시간은 순식간에 지나가 버립니다. 스위트게임즈가
            만드는 게임이 추구하는 방향입니다. 플레이 하는 여러분의 소중한
            시간이 아깝지 않도록 매 순간이 즐거움으로 꽉 차있을 수 있는 게임을
            만듭니다.
          </IntroDesc>
        </IntroSecWrp>
        <ImgWrp>
          <Image
            src={'/assets/defaultImg.png'}
            width={590}
            height={495}
            layout={'fixed'}
          />
        </ImgWrp>
      </IntroWrapper>
      {/* section2 */}
      <VideoSection>
        <SectionTitle>디그타운 플레이 방법</SectionTitle>
        <SectionDesc>동영상으로 디그타운 플레이 방법을 확인해 보세요.</SectionDesc>
        <VideoWrapper>
          <Video controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </Video>
        </VideoWrapper>
        <VideoDesc>
          <Link href="https://smartstore.naver.com/suitegames">
            <a>
              디그타운 구매하러 가기
            </a>
          </Link>
        </VideoDesc>
      </VideoSection>
    </Container>
  )
}

export default AboutSection
