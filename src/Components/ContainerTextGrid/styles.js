/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    .container {
      display: flex;
      text-align: center;
      max-width: 100%;
      padding: 64px 24px;
      align-items: center;
      flex-wrap: nowrap;
      align-self: flex-end;
    }

    .title {
      font-size: 50px;
      color: #a07918;
      line-height: 1.2;
      justify-items: center;
    }

    .text-p {
      justify-items: end;
      display: block;
      font-size: 25px;
      border-radius: 10px 500px;
      padding: 40px;
      border-bottom: 3px solid #a07918;

      line-height: 1.2;
    }
  `}
`;
