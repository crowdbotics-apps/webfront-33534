import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import getRoute from '~/routes/getRoute'
import {
  Container,
  Inner,
  LogoMain,
  Content,
  ItemMenu,
  ItemMenuButton,
} from './styled'

export const Header: React.FC = () => {
  const { asPath: currentPath } = useRouter()

  const currentRoute = useMemo(() => getRoute(currentPath), [currentPath])

  return (
    <Container>
      <Inner>
        <Content>
          <LogoMain href="/" title="">
            <img
              className="logo-pc"
              src="/assets/images/header/logo-recapp.png"
              alt=""
            />
            <img
              className="logo-mobile"
              src="/assets/images/header/icon.png"
              alt=""
            />
          </LogoMain>

          <ItemMenu
            selected={currentRoute?.pattern === '/why-recapp'}
            href="/why-recapp"
          >
            Why Recapp?
          </ItemMenu>
          <ItemMenu
            selected={currentRoute?.pattern === '/how-does-it-works'}
            href="/how-does-it-works"
          >
            How does it work?
          </ItemMenu>
          <ItemMenu selected={currentRoute?.pattern === '/faq'} href="/faq">
            FAQs
          </ItemMenu>
          <ItemMenu
            selected={currentRoute?.pattern === '/about-us'}
            href="/about-us"
          >
            About Us
          </ItemMenu>
        </Content>
        <Content>
          <ItemMenu selected={false} href="/">
            Log In
          </ItemMenu>
          <ItemMenuButton href="/">Sign Up</ItemMenuButton>
        </Content>
      </Inner>
    </Container>
  )
}
