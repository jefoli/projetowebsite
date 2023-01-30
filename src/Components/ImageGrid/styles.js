/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    align-content: center;

    > img {
      max-width: auto;
      max-height: auto;
      transition: all 300ms ease-in-out;
      overflow: hidden;
      width: 100%;
    }

    img:hover {
      transform: scale(1.5);
    }
  `}
`;
