import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`

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


  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 500;
  }

  p {
    font-size: ${theme.fonts.sizes.medium};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  `}
`;
