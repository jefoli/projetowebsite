/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: block;

    > img {
      display: block;
      max-width: auto;
      max-height: auto;
      transition: all 300ms ease-in-out;
      max-width: 100%;
    }

    @media ${theme.media.lteMedium} {
      align-items: center;
      max-width: 100%;

      > img {
        max-width: auto;
        max-height: auto;
        transition: all 900ms ease-in-out;
        overflow: hidden;
        max-width: 100;
      }
    }
  `}
`;
