/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const GridContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      max-width: 100%;
    }
  `}
`;
