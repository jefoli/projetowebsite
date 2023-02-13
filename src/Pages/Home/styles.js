/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css``}
  margin: 0 auto;
  color: white;
`;

export const GridContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 30px;
    margin-top: 10px;

    img {
      box-shadow: 0px 0px 0px 10px #c3c3c3;
    }

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      max-width: 100%;
    }
  `}
`;
