import React from 'react'
import { NextPage } from 'next'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import PageWrapper from '~/components/PageWrapper'

import { Title, TextParagraph, Image } from './styled'

interface HowDoesItWorksProps {}

const HowDoesItWorks: NextPage = () => {
  return (
    <PageWrapper>
      <Box p={5}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Title>How does it work?</Title>
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
              Students currently make their own yearbooks each year within their
              school’s yearbook club. Recapp’s creation process minimizes any
              changes from their current yearbook’s production.
            </TextParagraph>
            <TextParagraph>
              Students input the same information and files into Recapp’s
              software, add their favorite videos, quotes, and other digital
              features using Recapp’s easy-to-use features.
            </TextParagraph>
            <TextParagraph>
              Once the final touches are added to their new digital yearbook,
              Recapp converts their files into a stylish digital yearbook that
              can be accessed at any time through Recapp’s application or
              website. Students create a profile, search for their school’s name
              in the search bar, and purchase their new digital yearbook.
              Students can then access their Recapp yearbooks and explore their
              high school experience in vivid detail.
            </TextParagraph>
          </Grid>
          <Grid item xs={6} md={2}>
            <Image>
              <source
                srcSet="assets/images/how/girl-smiling-with-books.png"
                type="image/webp"
              />
              <img src="assets/images/how/girl-smiling-with-books.png" alt="" />
            </Image>
          </Grid>
          <Grid item xs={9} md={3}>
            <Image>
              <source
                srcSet="assets/images/how/tenagers-loking-on-computer.png"
                type="image/webp"
              />
              <img
                src="assets/images/how/tenagers-loking-on-computer.png"
                alt=""
              />
            </Image>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  )
}

HowDoesItWorks.getInitialProps = async (ctx) => {
  return {}
}

export default HowDoesItWorks
