import styled from 'styled-components'

export const BoxWithShadow = styled.div`
  background: ${({theme}) => theme.bg.secondary};
  padding: 1rem;
  border-radius: 12.5px; 
  /* box-shadow: 0px -2px 10px #55555544; */
  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`
