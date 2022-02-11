import React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { NOT_FOUND } from 'http-status-codes'

import PageWrapper from '~/components/PageWrapper'

interface ErrorPageProps {
  statusCode?: number
  title?: string
}
const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, title }) => {
  if (statusCode === NOT_FOUND) {
    return (
      <>
        <Head>
          <title>Page not Found</title>
        </Head>
        <PageWrapper>
          <Container maxWidth="sm">
            <Box mb={4}>
              <img src="/assets/images/illustration/page-not-found.svg" />
            </Box>
            <Typography variant="h1" align="center">
              {title ?? `Page not Found`}
            </Typography>
          </Container>
        </PageWrapper>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Internal Error</title>
      </Head>
      <PageWrapper>
        <Container maxWidth="sm">
          <Box mb={4}>
            <img src="/assets/images/illustration/bug-fixing.svg" />
          </Box>
          <Typography variant="h1" align="center">
            {title ?? `Houve um erro interno`}
          </Typography>
        </Container>
      </PageWrapper>
    </>
  )
}

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500
  const title = res ? res.statusMessage : err ? err.message : undefined

  return { statusCode, title }
}

export default ErrorPage
