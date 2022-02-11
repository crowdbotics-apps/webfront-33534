import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins';
  }

  html, body {
    height: 100%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    line-height: 36px;

    scroll-behavior: smooth;
  }

  :target {
    scroll-margin-top: 6em;
  }

  body {
    --webkit-font-smoothing: antialised;
    font-size: 18px;
    color: black;
    background: linear-gradient(87deg,#FFFFFF 0%,#DCF0F6 100%);
  }

  #root, #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  th.MuiTableCell-root {
    font-weight: 400;
  }

  ::-webkit-scrollbar{
    /* display: none; */
    /* background-color: #00f2ea55; */
  }
  ::-webkit-scrollbar:horizontal{
    display: none;
  }

  ::-webkit-scrollbar-button:start:decrement,body::-webkit-scrollbar-button:end:increment{
    display:block;
    height:0;
    background-color:transparent;
  }
  ::-webkit-scrollbar-track-piece{
    background-color:#FFFFFF;
    width: 0;
    opacity:0.2;

    -webkit-border-radius:0;
    -webkit-border-bottom-right-radius:14px;
    -webkit-border-bottom-left-radius:14px;
  }

  ::-webkit-scrollbar-thumb:vertical{
    height:50px;
    background-color:#5a5959aa;
    -webkit-border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:horizontal{
    max-width:50px;
    background-color:#5a5959aa;
    -webkit-border-radius: 8px;
    display: none;
  }
`
