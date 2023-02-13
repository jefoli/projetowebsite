import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin:0;
      padding: 0;
      outline:0;

  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background: -webkit-linear-gradient(to top, #003c58, #111);
    background: -o-linear-gradient(to top, #003c58, #111);
    background: -moz-linear-gradient(to top, #003c58, #111);
    background: linear-gradient(to top, #003c58, #111);

  }

`;
