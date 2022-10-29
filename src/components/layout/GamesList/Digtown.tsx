import { Button } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    padding: 16px 0;
  }
`
const GameHeaderImg = styled.div`
  width: 100vw;
  height: 500px;
  background: url('/assets/digtownImg.png') no-repeat 50% 50% / cover;
  margin-bottom: 80px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`
const ContentsSectionWrp = styled.section`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    padding: 16px 0;
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
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    margin-bottom: 12px;
  }
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
const ContentsWrp = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  margin-bottom: 120px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: block;
    padding: 16px 0;
    text-align: center;
  }
`

const ContentLeft = styled.div`
  width: 512px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100vw;
    margin: 0 auto;
  }
`
const FeatureItem = styled.div`
  text-align: left;
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100vw;
    display: block;
    margin: 0 auto 36px;
  }
`
const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #fce7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    margin: 0 auto 16px;
  }
`
const TextBox = styled.div`
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    text-align: center;
  }
`
const FeatureTitle = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.2px;
  color: #212121;
  margin-bottom: 16px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 80vw;
    font-size: 20px;
    margin: 0 auto 8px;
  }
`
const FeatureDesc = styled.div`
  width: 350px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #757575;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 80vw;
    margin: 0 auto;
  }
`

const ContentRight = styled.div`
  width: 650px;
  height: 490px;
  border-radius: 8px;
  overflow: hidden;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`

const VideoSectionWrp = styled.div`
  width: 1200px;
  text-align: center;
  margin: 60px auto 67px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100vw;
    padding: 16px 0;
  }
`
const BtnWrp = styled.div`
  width: 926px;
  height: 520px;
  background-color: #eff3fd;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 90vw;
  }
`
const ButtonSpan = styled.span`
  font-size: 28px;
  margin-left: 5px;
`
const VideoWrp = styled.div``

const DigTown = () => {
  return (
    <Container>
      <GameHeaderImg />
      <ContentsSectionWrp>
        <CapTitle>스위트의 첫 작품</CapTitle>
        <IntroTitle>dig town</IntroTitle>
        <IntroDesc>난이도 1점대, 2 ~ 6인용 레이스형 파티게임</IntroDesc>

        <ContentsWrp>
          <ContentLeft>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/dig01.png'} width={30} height={30} />
              </IconBox>
              <TextBox>
                <FeatureTitle>주사위 운이 모든 것을 결정합니다.</FeatureTitle>
                <FeatureDesc>
                  운이 좋다면 누구보다 빠르게 보물을 얻을 수 있어요.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/dig02.png'} width={30} height={30} />
              </IconBox>
              <TextBox>
                <FeatureTitle>끝날 때 까지 끝난 것이 아니다.</FeatureTitle>
                <FeatureDesc>
                  탈출 직전, 뒤통수를 치는 다른 플레이어의 공격에 당신이 모았던
                  모든 보물이 사라질지도 모릅니다. 남들이 싸우는 동안 몰래
                  빠져나갈 수도 있어요.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/dig03.png'} width={30} height={30} />
              </IconBox>
              <TextBox>
                <FeatureTitle>할아버지와 손주가 함께</FeatureTitle>
                <FeatureDesc>
                  난이도가 낮아 모든 연령이 쉽게 이해하고 즐길 수 있습니다.
                  윷놀이는 이제 그만, 온 가족이 함께 즐겨보세요.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/dig04.png'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>전투민족에게 가장 알맞은 게임</FeatureTitle>
                <FeatureDesc>
                  마주치기만 하면 계속 싸워야 하는 게임 무한한 주사위 배틀에
                  정신이 아득해질지도 몰라요.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
          </ContentLeft>
          <ContentRight>
            <Image
              src={'/assets/defaultImg.png'}
              width={650}
              height={490}
              layout={'fixed'}
            />
          </ContentRight>
        </ContentsWrp>

        {/* <CapTitle>3분 게임 설명</CapTitle>
        <IntroTitle>디그타운을 보다 쉽게 살펴보세요</IntroTitle> */}
        {/* <IntroDesc>
          게임 룰을 동영상으로 살펴보면 정말 쉽게 이해할 수 있습니다.
        </IntroDesc> */}
        {/* <VideoSectionWrp>
          <BtnWrp>
            <Button
              variant="contained"
              sx={{
                width: '168px',
                height: '40px',
                borderRadius: '5px',
                backgroundColor: '#2851E3',
                textTransform: 'capitalize',
                position: 'absolute',
                left: ' 50%',
                top: 0,
                transform: 'translate(-50%,-50%)',
              }}
            >
              go to shop <ButtonSpan>&#187;</ButtonSpan>
            </Button>
            <Image src={'/assets/videoDefault.png'} width={92} height={92} />
          </BtnWrp>
          <VideoWrp></VideoWrp>
        </VideoSectionWrp> */}
      </ContentsSectionWrp>
    </Container>
  )
}
export default DigTown
