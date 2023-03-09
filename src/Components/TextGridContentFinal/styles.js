import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 50px;
    margin-top: 10px;
    max-width: 100%;

    > img {
      box-shadow: 0px 0px 0px 10px #c3c3c3;
      align-items: center;
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
