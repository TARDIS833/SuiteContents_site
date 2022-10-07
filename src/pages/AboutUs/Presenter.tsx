import { Button } from '@mui/material'
import Image from 'next/image'
import styled from 'styled-components'

const introData = [
  {
    src: '/assets/icon/cloud.svg',
    titie: 'Et, odio elementum',
    desc: 'Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus mattis etiam.',
  },
  {
    src: '/assets/icon/watch.svg',
    titie: 'Massa leo scelerisque',
    desc: 'Velit nulla eu tortor elit sed. Volutpat ornare mi tempor, hac morbi faucibus. ',
  },
  {
    src: '/assets/icon/video.svg',
    titie: 'Phasellus non sit',
    desc: 'Lobortis adipiscing sit senectus id. Rhoncus lacus mi aliquam tortor nibh.',
  },
  {
    src: '/assets/icon/temp.svg',
    titie: 'Enim scelerisque dictum',
    desc: 'Turpis eget ut sed vitae in sapien egestas ultrices feugiat. Elementum platea.',
  },
  {
    src: '/assets/icon/windy.svg',
    titie: 'Vulputate et enim',
    desc: 'Amet, eros nisl vestibulum tincidunt pellentesque. Congue id sapien dictum a.',
  },
  {
    src: '/assets/icon/zoomout.svg',
    titie: 'Faucibus eget blandit',
    desc: 'Tristique viverra lorem nibh eget tellus eget morbi porttitor. Faucibus sit.',
  },
]
const Container = styled.div`
  text-align: center;
`
const ViewWrapper = styled.div`
  height: 735px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #5f0502;
`
const AboutTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  color: #ffffff;
  margin-bottom: 16px;
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
`
const IntroBox = styled.div`
  width: 374px;
  text-align: center;
`
const ImgWrp = styled.div`
  width: 60px;
  height: 60px;
  background: #eff3fd;
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
`
const IntroduceGames = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
`
const GamesSlideWrp = styled.div`
  width: 1200px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
const Slideitem = styled.div`
  width: 397px;
  height: 460px;
  padding: 20px;
`
const ImageBox = styled.div`
  width: 356px;
  height: 228px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 26px;
`
const ItemTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #212121;
  margin-bottom: 16px;
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
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            width: '256px',
            height: '54px',
            color: '#910702',
            fontFamily: 'Inter',
            fontSize: '20px',
            lineHeight: '24px',
            textAlign: 'center',
            boxShadow: 'none',
            textTransform: 'capitalize',
            borderRadius: '0px',
          }}
        >
          Get Started
        </Button>
      </ViewWrapper>
      <SuiteIntro>
        <CapTitle>Rhoncus, accumsan dictum</CapTitle>
        <IntroTitle>스위트게임즈 소개</IntroTitle>
        <IntroDesc>Neque, pulvinar vestibulum non aliquam.</IntroDesc>
        <IntroBoxies>
          {introData.map((box, index) => {
            return (
              <IntroBox>
                <ImgWrp>
                  <Image src={box.src} width={30} height={30} />
                </ImgWrp>
                <BoxTitle>{box.titie}</BoxTitle>
                <BoxDesc>{box.desc}</BoxDesc>
              </IntroBox>
            )
          })}
        </IntroBoxies>
      </SuiteIntro>
      <PartnersWrp>
        <CapTitle>Rhoncus, accumsan dictum</CapTitle>
        <IntroTitle>참여인력 소개</IntroTitle>
      </PartnersWrp>
      <IntroduceGames>
        <CapTitle>suite games</CapTitle>
        <IntroTitle>스위트가 만든 게임들</IntroTitle>
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
                src={'/assets/gameImg2.png'}
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
                src={'/assets/gameImg3.png'}
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
        </GamesSlideWrp>
      </IntroduceGames>
    </Container>
  )
}

export default AboutUsPresenter
