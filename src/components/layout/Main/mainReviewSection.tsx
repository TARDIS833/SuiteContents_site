import styled from 'styled-components'
import 'swiper/css'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

const Container = styled.section`
  width: 1200px;
  margin: 0 auto;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  }
`
const ReviewWrapper = styled.div`
  margin: 80px auto 160px;
  text-align: center;
`
const SectionTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #212121;
  margin-bottom: 16px;
`
const SectionDesc = styled.p`
  font-family: 'Inter';
  font-size: 20px;
  line-height: 24px;
  color: #757575;
`
const SlideWrapper = styled.div`
  margin: 70px 0;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`
const SlideWrapperMobile = styled.div`
  display: none;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: block;
    padding: 24px 0;
  }
`
const StyledSwiper = styled(Swiper)``
const SlideBox = styled(SwiperSlide)``

const StarWrap = styled.div``
const ReviewComments = styled.h6`
  margin: 27px 0;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
  text-align: center;
  letter-spacing: 0.2px;
  color: #424242;
`
const ReviewerWrp = styled.div``
const ReviewerProfile = styled.div``
const Reviewer = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.2px;
  color: #757575;
`

const ReviewSection = () => {
  SwiperCore.use([Navigation, Pagination])

  return (
    <Container>
      <ReviewWrapper>
        <SectionTitle>게이머들의 의견이 가장 소중합니다</SectionTitle>
        <SectionDesc>
          스위트게임즈가 즐거움을 드리고자 하는 분들의 생각이 더 나은 게임을
          위한 원동력입니다.
        </SectionDesc>
        <SlideWrapper>
          <StyledSwiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
          >
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                “게임 플레이가 너무 재미있어서{'\n'}학교 가져가서 친구들하고
                하고 싶어요.”
              </ReviewComments>
              <ReviewerWrp>
                {/* <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile> */}
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                "집에 가서도 그 보드게임이 자꾸 생각 나.{'\n'} 오늘 또 너희 집
                가도 되냐?"
              </ReviewComments>
              <ReviewerWrp>
                {/* <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile> */}
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                “게임 플레이가 너무 재미있어서{'\n'}학교 가져가서 친구들하고
                하고 싶어요.”
              </ReviewComments>
              <ReviewerWrp>
                {/* <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile> */}
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                "집에 가서도 그 보드게임이 자꾸 생각 나.{'\n'} 오늘 또 너희 집
                가도 되냐?"
              </ReviewComments>
              <ReviewerWrp>
                {/* <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile> */}
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
          </StyledSwiper>
        </SlideWrapper>

        {/* Mobile ver. */}
        <SlideWrapperMobile>
          <StyledSwiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                “이거 너무 재미있어서 학교 가져가서 친구들하고 하고 싶어요.”
              </ReviewComments>
              <ReviewerWrp>
                <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile>
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                “이거 너무 재미있어서 학교 가져가서 친구들하고 하고 싶어요.”
              </ReviewComments>
              <ReviewerWrp>
                <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile>
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                “이거 너무 재미있어서 학교 가져가서 친구들하고 하고 싶어요.”
              </ReviewComments>
              <ReviewerWrp>
                <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile>
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
            <SlideBox>
              <StarWrap>
                <Image src={'/assets/stars.png'} width={152} height={24} />
              </StarWrap>
              <ReviewComments>
                “이거 너무 재미있어서 학교 가져가서 친구들하고 하고 싶어요.”
              </ReviewComments>
              <ReviewerWrp>
                <ReviewerProfile>
                  <Image src={'/assets/Profile.png'} width={40} height={40} />
                </ReviewerProfile>
                <Reviewer>
                  디그타운 베타테스터 -<span>LJH &#40;12세&#41;</span>
                </Reviewer>
              </ReviewerWrp>
            </SlideBox>
          </StyledSwiper>
        </SlideWrapperMobile>
      </ReviewWrapper>
    </Container>
  )
}

export default ReviewSection
