import styled from '@emotion/styled'
// import { Container } from '@mui/system'
import { ReactElement, useEffect, useState } from 'react'
import Footer from 'src/components/common/Footer'

import Nav from 'src/components/common/Navigation'
import AboutSection from 'src/components/layout/Main/mainAboutSection'
import ReviewSection from 'src/components/layout/Main/mainReviewSection'
import { MainPreProps } from './types'

const MainView = styled.div`
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
  }
`

const ViewWrapper = styled.div`
  height: 735px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    height: 80vh;
    margin: 0 auto;
  }
`
const BigCI = styled.div`
  width: 612px;
  height: 63px;
  background: url('/assets/mainWideLG.png') no-repeat 0 0 / cover;
  margin-bottom: 35px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 316px;
    height: 32px;
    /* margin: 0 auto; */
  }
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
        {/* <AboutSection />
        <ReviewSection /> */}
      </MainView>
      <Footer />
    </>
  )
}

export default MainPresenter
