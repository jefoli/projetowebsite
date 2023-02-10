/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    .container {
      display: flex;
      column-gap: 32px;
      justify-content: center;
      padding: 64px 24px;
      align-items: center;
      border-top: 1px solid #a07918;
    }
    .image {
      max-width: 350px;
      display: block;
      height: auto;
    }

    .title {
      font-size: 35px;
      color: #a07918;
      display: flex;
      line-height: 1.2;
    }
  `}
`;
