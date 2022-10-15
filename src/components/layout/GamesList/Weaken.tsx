import { Button } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 68px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    padding: 16px 0;
  }
`
const GameHeaderImg = styled.div`
  width: 100vw;
  height: 500px;
  background-color: #eff3fd;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-transform: capitalize;
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
  background-color: #e7ecfc;
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
  background-color: #becdf832;
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
const Weaken = () => {
  return (
    <Container>
      <GameHeaderImg>
        <Image src={'/assets/icon/image.png'} width={92} height={92} />
      </GameHeaderImg>
      <ContentsSectionWrp>
        <CapTitle>점점 지쳐가는 영웅, 강해지는 플레이어</CapTitle>
        <IntroTitle>weaken</IntroTitle>
        <IntroDesc>
          아이템은 사용하면서 부서지고, 사라집니다. 스테미너는 점점 떨어지기
          마련이죠.{'\n'} 하지만 이 모든 것을 극복할 수 있는 것은 플레이어가
          게임에 적응하기 때문입니다.{'\n'}
          {'\n'}
          지쳐가는 영웅을 얼마나 멀리 데려갈 수 있는지는 플레이어의 역량에
          달려있습니다
        </IntroDesc>
        <ContentsWrp>
          <ContentLeft>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/cloud.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>무작위로 생성되는 거대한 맵</FeatureTitle>
                <FeatureDesc>
                  주요 마을을 제외하면, 몬스터가 출현하는 맵은 무작위로
                  생성됩니다. 새 게임을 시작할 때 마다 마주칠 새로운 지역과
                  적들을 물리치세요.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/push.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>플레이어가 충분히 강하다면 OK</FeatureTitle>
                <FeatureDesc>
                  모든 장애물을 뛰어넘을 정도로 당신이 강하다면, 게임의 끝까지
                  충분히 갈 수 있습니다. 아니면, 자주 마을에 들러서 보충할 것이
                  많을거에요.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/text.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>무한한 조합, 무한한 전투</FeatureTitle>
                <FeatureDesc>
                  지형 뿐만 아니라 몬스터들 또한 무작위로 결정된 패턴을 가지고
                  있습니다. 한 번 본 듯한 몬스터도 전혀 다른 공격을 할 수 있죠.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/twitch.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>도전과제</FeatureTitle>
                <FeatureDesc>
                  위큰의 도전과제는 플레이어의 능력을 시험합니다. 하나하나
                  클리어 할 때 마다 어느 때 보다 만족스러울겁니다.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
          </ContentLeft>
          <ContentRight>
            {/* <Image
              src={'/assets/defaultImg.png'}
              width={650}
              height={490}
              layout={'fixed'}
            /> */}
          </ContentRight>
        </ContentsWrp>
        <CapTitle>당신은 어디까지 도달할 수 있을까요?</CapTitle>
        <IntroTitle>막막해 보이지만 끝은 옵니다</IntroTitle>
        <IntroDesc>
          무작위로 생성되는 지도, 세계를 뒤덮은 악마들로부터 인류를 구원하세요.
        </IntroDesc>
        <VideoSectionWrp>
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
              Download <ButtonSpan>&#187;</ButtonSpan>
            </Button>
            <Image src={'/assets/videoDefault.png'} width={92} height={92} />
          </BtnWrp>
          <VideoWrp></VideoWrp>
        </VideoSectionWrp>
      </ContentsSectionWrp>
    </Container>
  )
}
export default Weaken
