import React from 'react'
import { NextPage } from 'next'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import PageWrapper from '~/components/PageWrapper'

import { Title, TextParagraph, Image } from './styled'

interface WhyProps {}

const Why: NextPage = () => {
  return (
    <PageWrapper>
      <Box p={5}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Title>Why Recapp?</Title>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextParagraph>
              Recapp is the next generation of high school yearbooks. Recapp is
              a website and mobile application that allows high school students
              to convert their typical "printing-press" style yearbook into a
              digital, interactive, and updated version of their high school
              experience.
            </TextParagraph>
            <TextParagraph>
              Students can add video clips from their homecoming sporting
              events, band/choir performances, and much more! The students will
              be able to record senior quotes as audio files and apply their
              signatures via stylus or touch screen into the back of each
              other’s new "yearbooks."
            </TextParagraph>
            <TextParagraph>
              Recapp also stores yearbooks from previous school years within its
              data base to ensure each student can access their new digital
              yearbooks whenever and wherever they want. Students can store
              their freshman, sophomore, junior, and senior yearbooks all within
              their Recapp profile page and access them individually with the
              tap of their finger.
            </TextParagraph>
            <TextParagraph>
              Students will be able to show their future generations their high
              school experiences in vivid detail with videos, pictures, audio
              files, and unique signatures!
            </TextParagraph>
          </Grid>
          <Grid item xs={9} md={3}>
            <Image>
              <source
                srcSet="assets/images/why/students-talking.png"
                type="image/webp"
              />
              <img src="assets/images/why/students-talking.png" alt="" />
            </Image>
          </Grid>
          <Grid item xs={6} md={2}>
            <Image>
              <source
                srcSet="assets/images/why/girl-on-computer.png"
                type="image/webp"
              />
              <img src="assets/images/why/girl-on-computer.png" alt="" />
            </Image>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  )
}

Why.getInitialProps = async (ctx) => {
  return {}
}

export default Why
