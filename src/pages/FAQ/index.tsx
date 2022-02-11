import React, { useState } from 'react'
import { NextPage } from 'next'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

import { HiOutlinePlus, HiMinus } from 'react-icons/hi'

import PageWrapper from '~/components/PageWrapper'

import { Title, accordion, useStyles } from './styled'

interface FAQProps {}

const FAQ: NextPage = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel0')

  return (
    <PageWrapper>
      <Box p={5}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Title>Frequently asked questions</Title>
          </Grid>
          <Grid item xs={12} md={8}>
            {[...Array(5)].map((x, i) => 
            <Accordion
              expanded={expanded === `panel${i}`}
              onChange={() => setExpanded(`panel${i}`)}
              style={accordion}
              elevation={0}
              classes={{
                 root: classes.MuiAccordionroot
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${i}` ? (
                    <HiMinus
                      style={{
                        color: expanded === `panel${i}` ? '#009EDE' : '#000000',
                      }}
                    />
                  ) : (
                    <HiOutlinePlus
                      style={{
                        color: expanded === `panel${i}` ? '#009EDE' : '#000000',
                      }}
                    />
                  )
                }
                aria-controls={`panel${i}bh-content`}
                id={`panel${i}bh-header`}
              >
                <Typography
                  style={{
                    color: expanded === `panel${i}` ? '#009EDE' : '#000000',
                  }}
                >
                  Curabitur rhoncus nisl morbi ipsum aenean adipiscing?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Dictumst fermentum adipiscing aliquet aliquam diam volutpat in
                  nisl. Nunc dolor amet nisi sem urna faucibus aenean
                  adipiscing. Consequat tellus tellus nibh pharetra.
                </Typography>
              </AccordionDetails>
            </Accordion>
            )}
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  )
}

FAQ.getInitialProps = async (ctx) => {
  return {}
}

export default FAQ
