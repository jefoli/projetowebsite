import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    outline:0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
`;
