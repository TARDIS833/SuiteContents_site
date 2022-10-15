import { Button, responsiveFontSizes } from '@mui/material'
import Image from 'next/image'
import DigTown from 'src/components/layout/GamesList/Digtown'
import Weaken from 'src/components/layout/GamesList/Weaken'
import Zomvice from 'src/components/layout/GamesList/Zomvice'
import styled from 'styled-components'

const Container = styled.section`
  margin: 0 auto;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
const MainWrapper = styled.div`
  height: 735px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #f8bebe5f; */
`

const MainContentsWrp = styled.div`
  text-align: center;
  width: 1200px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    padding: 16px 0;
    margin: 0 auto;
    /* border: 1px solid red; */
  }
`
const MainTitle = styled.div`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  color: #212121;
  margin-bottom: 16px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 52px;
    line-height: 110%;
  }
`
const MainDesc = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #424242;
  margin-bottom: 25px;
  white-space: pre-wrap;
`
const MainDescName = styled(MainDesc)`
  font-weight: 700;
  font-size: 24px;
`
const IntroduceGames = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
const CapTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #757575;
  text-transform: capitalize;
  margin-bottom: 24px;
`
const IntroTitle = styled.div`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #212121;
  margin-bottom: 32px;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`
const IntroDesc = styled(CapTitle)`
  white-space: pre-wrap;
  margin-bottom: 60px;
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
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
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

const GamesPresenter = () => {
  return (
    <Container>
      <MainWrapper>
        <MainContentsWrp>
          <MainTitle>주사위 하나에 운명이 갈린다</MainTitle>
          <MainDesc>
            보물을 찾아 나서는 플레이어들의 여정{'\n'} 주사위가 모든 것을
            결정한다.
          </MainDesc>
          <MainDesc>스위트게임즈 최초로 출시하는 게임</MainDesc>
          <MainDescName>DigTown</MainDescName>
        </MainContentsWrp>
        <Button
          variant="contained"
          sx={{
            width: '205px',
            height: '52px',
            marginTop: '25px',
            borderRadius: '0px',
            fontSize: '18px',
            fontWeight: '400',
            textTransform: 'Capitalize',
            backgroundColor: '#a21813',
          }}
        >
          Get Started
        </Button>
      </MainWrapper>
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
      <DigTown />
      <Weaken />
      <Zomvice />
    </Container>
  )
}

export default GamesPresenter
