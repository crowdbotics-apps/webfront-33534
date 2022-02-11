import React from 'react'
import { NextPage } from 'next'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { IoIosArrowBack } from 'react-icons/io'
import { IconButton } from '@material-ui/core'

import PageWrapper from '~/components/PageWrapper'

import { Header, Button, TextParagraph, Image, TextButton } from './styled'

interface GetStartedProps {}

const GetStarted: NextPage = () => {
  return (
    <>
      <Header>
        <IconButton style={{ color: '#21293E' }} href="/">
          <IoIosArrowBack size={22} />
        </IconButton>
      </Header>
      <PageWrapper>
        <Container maxWidth="md">
          <Box>
            <Grid container spacing={5} textAlign="center">
              <Grid item xs={12}>
                <Image>
                  <source
                    srcSet="assets/images/header/logo-recapp.png"
                    type="image/webp"
                  />
                  <img src="assets/images/header/logo-recapp.png" alt="" />
                </Image>
              </Grid>
              <Grid item xs={12}>
                <TextParagraph>
                  Each step of creating a school’s Recapp is made simple by
                  modifying your current yearbook development process as little
                  as possible. Recapp allows students to upload the same content
                  files that are sent to their printing companies into its
                  software.
                </TextParagraph>
                <TextParagraph>
                  Once the yearbook has been uploaded, students can add content
                  like video clips, audio files, and hand-written signatures to
                  bring their creativity and high-school experience to life!
                  Once completed, the school’s Recapp will be accessible through
                  Recapp’s mobile application or website. Students and their
                  families can create an account and purchase their electronic
                  yearbook.
                </TextParagraph>
              </Grid>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button login={false} onClick={() => console.log('click')}>
                <TextButton>Sign Up</TextButton>
              </Button>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button login={true} onClick={() => console.log('click')}>
                <TextButton>Log In</TextButton>
              </Button>
            </Grid>
          </Box>
        </Container>
      </PageWrapper>
    </>
  )
}

GetStarted.getInitialProps = async (ctx) => {
  return {}
}

export default GetStarted
