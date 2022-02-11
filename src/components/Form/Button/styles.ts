import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

interface ContainerProps {
  fullWidth?: boolean
}
export const Container = styled.div<ContainerProps>`
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  margin-bottom: 10px;


  .svgToBlue {
    svg{
      .cls-1 {
        fill:  #FE0051;
      }

    }
    
  }
`

export const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
`


