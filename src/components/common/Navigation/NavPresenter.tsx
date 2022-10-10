import styled from '@emotion/styled'
import Link, { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { NavCommonProps, NavStyleProps } from './types'
import { Button, IconButton, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Dehaze'
import { useState } from 'react'
import { isEqual } from 'lodash'
import Image from 'next/image'

const NavList = [
  {
    href: '/Main',
    title: 'Home',
  },
  {
    href: '/Games',
    title: 'Games',
  },
  // {
  //   href: '/Shop',
  //   title: 'Shop',
  // },
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
  @media (min-width: 0px) and (max-width: 359px) {
    width: 100%;
  }
`
const NavContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    width: 100%;
    padding: 0 16px;
    position: fixed;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`

const LogoImg = styled.div`
  width: 174px;
  height: 18px;
  background: url('./assets/LogoDefault.png') no-repeat 0 0 / cover;
  cursor: pointer;

  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    background: url('./assets/Logo_small.svg') no-repeat 0 0 / cover;
    width: 43px;
    height: 32px;
  }
`
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: none;
  }
`
// const NavLinkItems = styled.div``

// Mobile menu
const Menubar = styled.div`
  display: none;
  @media (min-width: 360px) and (max-width: 1032px),
    (min-width: 0px) and (max-width: 359px) {
    display: block;
  }
`

const NavLinkItems = styled.div(({ pathName, itemHref }: NavStyleProps) => {
  const isHome = isEqual(itemHref, '/Main')
  const isPath = isEqual(itemHref, pathName)
  return {}
})

const NavPresenter = ({ ...props }: NavCommonProps) => {
  const router = useRouter()
  const pathIndex = router.pathname.indexOf('/', 2)
  const routerPath = router.pathname.substring(0, pathIndex)
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <>
      <Container>
        <NavContainer>
          <Link href={'/Home'}>
            <LogoWrapper>
              <Link href={'/Main'}>
                {/* <Image
                    src={'/assets/LogoDefault.png'}
                    width="174px"
                    height="18px"
                  /> */}
                <LogoImg />
              </Link>
            </LogoWrapper>
          </Link>
          <MenuItem>
            <NavLinkItems />
            {NavList.map((item) => (
              <NavLinkItems
                key={item.title}
                itemHref={item.href}
                pathName={router.pathname}
              >
                <NextLink href={item.href} passHref>
                  <Button
                    variant="text"
                    color="secondary"
                    disableRipple
                    fullWidth
                    sx={{
                      fontSize: '15px',
                      textTransform: 'Capitalize',
                      color:
                        isEqual(item.href, routerPath) ||
                        isEqual(item.href, router.pathname)
                          ? '#a21813'
                          : '#424242',
                      fontWeight:
                        isEqual(item.href, routerPath) ||
                        isEqual(item.href, router.pathname)
                          ? '700'
                          : '500',
                    }}
                  >
                    {item.title}
                  </Button>
                </NextLink>
              </NavLinkItems>
            ))}
          </MenuItem>
          <Menubar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{
                fontSize: '28px',
                padding: '0',
              }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              // sx={{
              //   display: { xs: 'block', md: 'none' },
              // }}
            >
              <NavLinkItems pathName={router.pathname} />
              {NavList.map((item) => (
                <NavLinkItems
                  key={item.title}
                  itemHref={item.href}
                  pathName={router.pathname}
                >
                  <NextLink href={item.href} passHref>
                    <Button
                      variant="text"
                      color="primary"
                      disableRipple
                      fullWidth
                      sx={{
                        fontSize: '14px',
                        color:
                          isEqual(item.href, routerPath) ||
                          isEqual(item.href, router.pathname)
                            ? '#a21813'
                            : '#424242',
                        fontWeight:
                          isEqual(item.href, routerPath) ||
                          isEqual(item.href, router.pathname)
                            ? '700'
                            : '500',
                      }}
                    >
                      {item.title}
                    </Button>
                  </NextLink>
                </NavLinkItems>
              ))}
            </Menu>
          </Menubar>
        </NavContainer>
      </Container>
    </>
  )
}

export default NavPresenter
