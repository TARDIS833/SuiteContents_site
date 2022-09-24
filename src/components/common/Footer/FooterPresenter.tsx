import styled from '@emotion/styled'
import { Input } from '@mui/material'
import { memoryUsage } from 'process'

const footerMenuList = [
  {
    //0
    name: 'Product',
    menuList: [
      {
        id: 'p1',
        menu: 'Diam orci',
        Link: '',
      },
      {
        id: 'p2',
        menu: 'Mi feugiat',
        Link: '',
      },
      {
        id: 'p3',
        menu: 'Netus fermentum',
        Link: '',
      },
      {
        id: 'p4',
        menu: 'Suspendisse viverra',
        Link: '',
      },
      {
        id: 'p5',
        menu: 'Id dolor',
        Link: '',
      },
      {
        id: 'p6',
        menu: 'Id dolor',
        Link: '',
      },
    ],
  },
  {
    //1
    name: 'Infomation',
    menuList: [
      { id: 'i1', menu: 'Nibh', Link: '' },
      { id: 'i2', menu: 'Egestas', Link: '' },
      { id: 'i3', menu: 'Dictum', Link: '' },
    ],
  },
  {
    //2
    name: 'Company',
    menuList: [
      { id: 'c1', menu: 'Id maecenas', Link: '' },
      { id: 'c2', menu: 'Id orci', Link: '' },
      { id: 'c3', menu: 'Magna ultricies', Link: '' },
      { id: 'c4', menu: 'Quis risus', Link: '' },
    ],
  },
]
const Container = styled.div``

const FooterTop = styled.div``
const FooterMenu = styled.div``
const MenuUl = styled.ul``
const MenuList = styled.li``
const SubscribeWrapper = styled.div``
const SubDesc = styled.div``

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
          <MenuUl>Subscribe</MenuUl>
          <Input></Input>
          <SubDesc>
            Gravida sed justo, justo, id est et. Amet tristique convallis sed
            porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et
            lectus id viverra fringilla magna morbi.
          </SubDesc>
        </SubscribeWrapper>
      </FooterTop>
      {/* ------------------------------------------ */}
      <FooterBottom>
        <LogoImg />
        <InfoWrapper></InfoWrapper>
        <SnsWrapper></SnsWrapper>
      </FooterBottom>
    </Container>
  )
}

export default FooterPresenter
