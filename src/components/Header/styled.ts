import styled from 'styled-components'
import media from 'styled-media-query'

// position: fixed;
export const Container = styled.header`
  z-index: 3;
  padding: 20px 0;

  ${media.lessThan('medium')`
    padding: 10px 0;
  `}
`

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.contentMaxSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;

  ${media.lessThan('large')`
    display: inline;
    font-size: 10px;
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoMain = styled.a`
  display: flex;
  align-items: center;

  .logo-mobile {
    display: none;
  }

  padding-right: 5rem;

  ${media.lessThan('medium')`
    padding-right: 0;
    .logo-pc {
      display: none;
    }
    .logo-mobile {
      display: block;
    }
    img {
      width: 30px;
      margin-right: 10px;
      &:last-child {
        width: 50px;
      }
    }
  `}
`

interface IItemMenu {
  selected: boolean
}
export const ItemMenu = styled.a<IItemMenu>`
  padding: 10px 30px;
  font-size: 18px;
  border-bottom: ${(props) => (props.selected ? '2px solid #21293E' : '0')};
  font-weight: ${(props) => (props.selected ? '600' : 'normal')};
  color: #21293E;
  ${media.lessThan('medium')`
    font-size: 10px;
    padding: 10px;
  `}
`

export const ItemMenuButton = styled.a`
  font-weight: 600;
  padding: 10px 22px;
  font-size: 16px;
  background: #21293e;
  border-radius: 60px;
  color: white;
  line-height: 20px;
  ${media.lessThan('medium')`
    font-size: 12px;
  `}
  
  &:hover,
  &:active {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
