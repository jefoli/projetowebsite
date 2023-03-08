/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    column-gap: 32px;
    justify-content: center;
    padding: 64px 24px;
    align-items: center;
    border-top: 1px solid #a07918;
    text-transform: uppercase;

    .image {
      max-width: 350px;
      display: block;
      height: auto;
      box-shadow: 30px -30px 0px 5px #c3c3c3;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      text-align: center;
    }
  `}
`;

export const InitialGridTitle = styled.h1`
  font-size: 35px;
  color: #a07918;
  display: flex;
  line-height: 1.2;
  }
`;
