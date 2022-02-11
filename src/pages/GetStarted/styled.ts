import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  z-index: 3;
  padding: 20px;

  ${media.lessThan('medium')`
    padding: 10px 0;
  `}
`

export const TextParagraph = styled.p`
  margin-top: 30px;
  font-size: 20px;
  line-height: 30px;
`

export const Image = styled.picture``

interface IButton {
  login: boolean
}

export const Button = styled.button<IButton>`
  border: 0;
  border-radius: 60px;
  padding: 15px 15px;
  font-weight: 700;
  color: ${({ theme, login }) =>
    login ? theme.colors.primary : theme.colors.whiteDefault};
  background: ${({ theme, login }) =>
    login ? 'transparent' : theme.colors.primary};
  border: ${({ theme, login }) =>
    login ? `1px solid ${theme.colors.primary}` : 0};
  border-radius: 60px;
  width: 50%;
  margin-top: ${(props) => (props.login ? '2rem' : '5rem')};
  
  &:hover,
  &:active {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

export const TextButton = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  font-size: 20px;
`
