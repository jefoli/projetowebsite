/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    .container {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      align-items: center;
      min-height: 40vh;
      border-bottom: 2px solid #a07918;
      border-radius: 500px 1px;
    }

    .text-p2 {
      display: block;
      font-size: 25px;
      max-width: 100%;

      padding: 35px 90px;
      line-height: 1.2;
      text-align: center;
    }
  `}
`;
