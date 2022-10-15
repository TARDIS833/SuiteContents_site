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
const Zomvice = () => {
  return (
    <Container>
      <GameHeaderImg>
        <Image src={'/assets/icon/image.png'} width={92} height={92} />
      </GameHeaderImg>
      <ContentsSectionWrp>
        <CapTitle>시민 VS 좀비, 도심 속 펼쳐지는 혈투</CapTitle>
        <IntroTitle>Zomvice</IntroTitle>
        <IntroDesc>얼마 남지 않은 인류를 구할 방법은 단 하나</IntroDesc>
        <ContentsWrp>
          <ContentLeft>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/cloud.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>다양한 능력의 캐릭터</FeatureTitle>
                <FeatureDesc>
                  캐릭터 고유의 능력들을 사용해 생존과 전투에 활용하세요. 강할
                  수록 더 많은 좀비를 물리치고, 살아남는데 유능하다면 다른
                  사람들을 도울 수 있습니다.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/push.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>게임에 몰입하게 만드는 아이템들</FeatureTitle>
                <FeatureDesc>
                  무기, 방어구, 소비용품 등 다양한 아이템들이 좀바이스 세계로
                  여러분을 끌어들입니다.
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/text.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>좀비 마스터가 되어 세상을 정복하자</FeatureTitle>
                <FeatureDesc>
                  단 한명, 좀비마스터는 수많은 좀비들을 컨트롤해 저항하는
                  시민들을 굴복시키고 좀비의 세상으로 만들 수 있습니다. 세계
                  정복의 꿈을 좀바이스에서 실현해 보세요
                </FeatureDesc>
              </TextBox>
            </FeatureItem>
            <FeatureItem>
              <IconBox>
                <Image src={'/assets/icon/twitch.svg'} width={25} height={25} />
              </IconBox>
              <TextBox>
                <FeatureTitle>보드게임 속 다양한 게임모드</FeatureTitle>
                <FeatureDesc>
                  좀비마스터 모드, 팀 배틀 모드, 개인 경쟁 서바이벌 등 하나의
                  보드게임으로 다양한 게임 모드를 즐겨보세요.
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
        <CapTitle>보드 위에서 느낄 수 있는 진짜 압박감 </CapTitle>
        <IntroTitle>꾸물꾸물 몰려오는 좀비들</IntroTitle>
        <IntroDesc>한 순간의 선택이 생존을 좌우합니다.</IntroDesc>
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
              Go to Shop <ButtonSpan>&#187;</ButtonSpan>
            </Button>
            <Image src={'/assets/videoDefault.png'} width={92} height={92} />
          </BtnWrp>
          <VideoWrp></VideoWrp>
        </VideoSectionWrp>
      </ContentsSectionWrp>
    </Container>
  )
}
export default Zomvice
