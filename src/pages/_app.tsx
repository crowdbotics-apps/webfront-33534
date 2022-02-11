import 'react-toastify/dist/ReactToastify.css'

import React, { useEffect } from 'react'

import { CookiesProvider } from 'react-cookie'
import { animateScroll } from 'react-scroll'
import { ToastContainer } from 'react-toastify'

import { NextComponentType } from 'next'
import NextApp, {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps,
} from 'next/app'
import Head from 'next/head'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { parse } from 'cookie'
import NProgress from 'nprogress'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import ApiProvider from '~/context/Api'
import AuthContext from '~/context/Auth'
import { getCookie } from '~/helpers/cookies'
import { Main as MainLayout } from '~/layout/Main'
import Router from '~/routes/router'
import { GlobalStyle } from '~/styles/global'
import { NProgressStyle } from '~/styles/nprogress'
import { DefaultTheme } from '~/styles/themes/DefaultTheme'
import MuiTheme from '~/styles/themes/Mui'

Router.events.on('routeChangeStart', () => {
  animateScroll.scrollToTop({ duration: 150 })
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface AppProps {
  token: string | null
}

const App: NextComponentType<
  AppContext,
  AppInitialProps,
  Partial<AppProps> & NextAppProps
> = ({ Component, pageProps, token = null }) => {

  return (
    <>
      <Head>
        <title>Yearbook</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1, minimum-scale=1, width=device-width"
        />
      </Head>
      <CookiesProvider>
        <StyledComponentsThemeProvider theme={DefaultTheme}>
          <MuiThemeProvider theme={MuiTheme}>
            <GlobalStyle />
            <NProgressStyle />
            <AuthContext token={token}>
              <ApiProvider>
                <MainLayout {...pageProps}>
                  <Component {...pageProps} />
                </MainLayout>
                <ToastContainer />
              </ApiProvider>
            </AuthContext>
          </MuiThemeProvider>
        </StyledComponentsThemeProvider>
      </CookiesProvider>
    </>
  )
}

App.getInitialProps = async (ctx) => {
  let defaultToken = null
  const initialProps = await NextApp.getInitialProps(ctx)
  const isBrowser = !ctx.ctx.req

  // Get the default token for whole app.
  if (isBrowser) {
    const token = getCookie('token')
    defaultToken = token
  } else {
    const rawCookies = ctx.ctx.req?.headers.cookie
    if (rawCookies) {
      const { token } = parse(rawCookies)
      defaultToken = token
    }
  }

  return { ...initialProps, token: defaultToken }
}

export default App
