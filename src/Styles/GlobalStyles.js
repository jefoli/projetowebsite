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
  }
`;
