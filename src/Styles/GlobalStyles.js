import styled, { createGlobalStyle } from 'styled-components';

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
    background: -webkit-linear-gradient(to bottom, #003c58, #111);
    background: -o-linear-gradient(to bottom, #003c58, #111);
    background: -moz-linear-gradient(to bottom, #003c58, #111);
    background: linear-gradient(to bottom, #003c58, #111);
    color: white;
  }

`;

export const Container = styled.section`
  max-width: auto;
  padding: 30px;
  background: #fff;
  text-align: center;
`;
