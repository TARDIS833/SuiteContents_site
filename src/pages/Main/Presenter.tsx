import styled from '@emotion/styled'
// import { Container } from '@mui/system'
import { ReactElement } from 'react'
import Footer from 'src/components/common/Footer'

import Nav from 'src/components/common/Navigation'
import AboutSection from 'src/components/layout/Main/mainAboutSection'
import ReviewSection from 'src/components/layout/Main/mainReviewSection'
import { MainPreProps } from './types'

const MainView = styled.div``

const ViewWrapper = styled.div`
  height: 735px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BigCI = styled.div`
  width: 612px;
  height: 63px;
  background: url('/assets/mainWideLG.png') no-repeat 0 0 / cover;
  margin-bottom: 35px;
`
const MainTitle = styled.h1`
  /* font-family: 'Inter'; */
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #757575;
`
const MainPresenter = ({
  isDark,
  toggleIsDark,
}: MainPreProps): ReactElement => {
  //UI
  return (
    <>
      <Nav />
      <MainView>
        <ViewWrapper>
          <BigCI />
          <MainTitle>모두가 즐거운 세상, 스위트 게임즈</MainTitle>
        </ViewWrapper>
        <AboutSection />
        <ReviewSection />
      </MainView>
      <Footer />
    </>
  )
}

export default MainPresenter
