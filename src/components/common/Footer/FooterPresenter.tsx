import styled from '@emotion/styled'
import { Button, Input } from '@mui/material'
import { memoryUsage } from 'process'

const footerMenuList = [
  {
    //0
    name: '제품',
    menuList: [
      {
        id: 'p1',
        menu: 'Dig Town',
        Link: '',
      },
      {
        id: 'p2',
        menu: 'Weaken',
        Link: '',
      },
      {
        id: 'p3',
        menu: 'Zomvice',
        Link: '',
      },
    ],
  },
  {
    //1
    name: '스위트게임즈 소개',
    menuList: [
      { id: 'i1', menu: '브랜드 소개', Link: '' },
      { id: 'i2', menu: '참여인력', Link: '' },
      { id: 'i3', menu: '게임 철학', Link: '' },
    ],
  },
  {
    //2
    name: '고객지원',
    menuList: [
      { id: 'c1', menu: '자주 묻는 질문', Link: '' },
      { id: 'c2', menu: '연락처', Link: '' },
    ],
  },
]
const Container = styled.div`
  width: 1200px;
  margin: 100px auto;
  padding: 34px 61px;
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 138px;
  justify-content: center;
`
const FooterMenu = styled.div``
const MenuUl = styled.ul`
  list-style: none;
  font-size: 16px;
  font-weight: 700;
  padding-top: 30px;
`
const MenuList = styled.li`
  margin-top: 13px;
  line-height: 19px;
  color: #21212150;
  font-weight: 400;
`
const SubscribeWrapper = styled.div`
  width: 338px;
  height: 256px;
  background-color: #eff3fd;
  padding: 0px 42px;
  box-sizing: border-box;
`
const SubDesc = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #616161;
`

const Divider = styled.hr`
  margin: 47px auto;
  border: 1px solid #21212106;
`

const FooterBottom = styled.div``
const LogoImg = styled.image``
const InfoWrapper = styled.div``
const SnsWrapper = styled.div``

const FooterPresenter = () => {
  return (
    <Container>
      <FooterTop>
        <>
          {footerMenuList.map((menu) => (
            <>
              <MenuUl>
                {menu.name}
                {menu.menuList.map((item) => (
                  <MenuList>{item.menu}</MenuList>
                ))}
              </MenuUl>
            </>
          ))}
        </>
        <SubscribeWrapper>
          <MenuUl>뉴스레터 구독</MenuUl>
          <Input
            placeholder="Email address"
            sx={{
              width: '248px',
              backgroundColor: 'white',
              padding: '15px 16px',
              borderRadius: '6px',
              margin: '18px 0',
            }}
          />
          {/* <Button variant="text"> &#62; </Button>s */}

          <SubDesc>
            스위트게임즈의 새로운 소식을 한 발 먼저 확인하고 싶다면, 뉴스레터를
            구독해보세요
          </SubDesc>
        </SubscribeWrapper>
      </FooterTop>
      {/* ------------------------------------------ */}
      <Divider />
      <FooterBottom>
        <LogoImg />
        <InfoWrapper></InfoWrapper>
        <SnsWrapper></SnsWrapper>
      </FooterBottom>
    </Container>
  )
}

export default FooterPresenter
