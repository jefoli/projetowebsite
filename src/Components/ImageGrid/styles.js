/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    justify-content: center;
    width: 100%;
    padding: 40px;
    border-top: 2px solid #a07918;
    border-radius: 200px 1px;

    img {
      max-width: 200px;
      max-height: auto;
      transition: all 300ms ease-in-out;
      overflow: hidden;
      width: 100%;
      border-radius: 500px 500px;
      box-shadow: 0 0px 2px 2px;
    }

    img:hover {
      transform: scale(1.2);
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
