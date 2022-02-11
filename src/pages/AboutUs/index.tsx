import React from 'react'
import { NextPage } from 'next'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import PageWrapper from '~/components/PageWrapper'

import { Title, TextParagraph, Image } from './styled'

interface AboutUsProps {}

const AboutUs: NextPage = () => {
  return (
    <PageWrapper>
      <Box p={5}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Title>About Us</Title>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextParagraph>
              When Recapp was first developed, the goal was simple: develop a
              user-friendly software that allows students to easily transform
              their high school yearbook into an interactive, digital “yearbook”
              with unique features and custom content that would be more
              accessible, affordable, and engaging for students.
            </TextParagraph>
            <TextParagraph>
              Recapp is more modern, significantly more affordable, and less
              harmful to the environment since each Recapp yearbook exists in a
              digital format instead of requiring printing paper or expensive
              ink.
            </TextParagraph>
          </Grid>
          <Grid item xs={12} sm={6} lg={5}>
            <Image>
              <source
                srcSet="assets/images/about/students-loking-on-computer.png"
                type="image/webp"
              />
              <img
                src="assets/images/about/students-loking-on-computer.png"
                alt=""
              />
            </Image>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  )
}

AboutUs.getInitialProps = async (ctx) => {
  return {}
}

export default AboutUs
