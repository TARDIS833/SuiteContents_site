import styled from '@emotion/styled'
import Link, { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { NavCommonProps } from './types'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Dehaze'

const NavList = [
  {
    href: '/Home',
    title: 'Home',
  },
  {
    href: '/Games',
    title: 'Games',
  },
  {
    href: '/Shop',
    title: 'Shop',
  },
  {
    href: '/Contact',
    title: 'Contact',
  },
  {
    href: '/AboutUs',
    title: 'About Us',
  },
]

const Container = styled.div`
  width: 100vw;
  height: 76px;

  box-shadow: -1px 6px 52px -14px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`

const LogoImg = styled.div`
  width: 174px;
  height: 18px;
  background: url('./assets/LogoDefault.png') no-repeat 0 0 / cover;
`
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
`
const NavLinkItems = styled.div``
// const NavLinkItems = styled.div(({ pathName, itemHref }: NavStyleProps) => {
//   //   const isHome = isEqual(itemHref, '/Home')
//   //   const isPath = isEqual(itemHref, pathName)
//   //   return {}
// })

const NavPresenter = ({ ...props }: NavCommonProps) => {
  const router = useRouter()

  return (
    <>
      <Container>
        <NavContainer>
          <Link href={'/Main'}>
            <LogoWrapper>
              <LogoImg />
            </LogoWrapper>
          </Link>
          <MenuItem>
            <NavLinkItems />
            {NavList.map((item) => (
              <NavLinkItems
                key={item.title}
                // itemHref={item.href}
                // pathName={router.pathname}
              >
                <NextLink href={item.href} passHref>
                  <Button
                    variant="text"
                    color="primary"
                    disableRipple
                    fullWidth
                    sx={{
                      fontSize: '14px',
                      textTransform: 'Capitalize',
                      color: '#424242',
                    }}
                  >
                    {item.title}
                  </Button>
                </NextLink>
              </NavLinkItems>
            ))}
          </MenuItem>
          <MenuIcon /> {/* 어떤 것들이 나오는지?  */}
        </NavContainer>
      </Container>
    </>
  )
}

export default NavPresenter
