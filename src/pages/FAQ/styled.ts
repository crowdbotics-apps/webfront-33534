import styled, { keyframes } from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import media from 'styled-media-query'

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
`

export const accordion = {
  boxShadow: '0px 3px 10px -4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  marginTop: 15,
}

export const useStyles = makeStyles((theme) => ({
  MuiAccordionroot: {
    '&.MuiAccordion-root:before': {
      backgroundColor: 'transparent',
    },
  },
}))
