import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
    }
`;

export const Container = styled.section`
  max-width: auto;
  padding: 30px;
  background: #fff;
  text-align: center;
`;
