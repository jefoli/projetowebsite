/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-content: center;
    width: 100%;

    > img {
      max-width: 250px;
      max-height: auto;
      transition: all 600ms ease-in-out;
      overflow: hidden;
      width: 100%;
      border-radius: 500px 500px;
      box-shadow: 0 5px 10px 0px;
    }

    img:hover {
      transform: scale(1.5);
    }

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      max-width: 100%;
      justify-items: center;
      > img {
        max-width: auto;
        max-height: auto;
        transition: all 300ms ease-in-out;
        overflow: hidden;
        width: 100%;
      }

      img:hover {
        transform: scale(1.1);
      }
    }
  `}
`;
