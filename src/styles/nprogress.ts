import { createGlobalStyle } from 'styled-components'

export const NProgressStyle = createGlobalStyle`
  #nprogress {
    pointer-events: none;

    .bar {
      background: ${({ theme }) => theme.colors.secondary};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
    }

    .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${({ theme }) =>
        theme.colors.secondary}, 0 0 5px ${({ theme }) =>
  theme.colors.secondary};
      opacity: 1.0;
      transform: rotate(3deg) translate(0px, -4px);
    }
  }
`
