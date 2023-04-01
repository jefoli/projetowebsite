import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    max-width: 1310px;
    min-height: 80vh;
    flex-direction: column;
    text-align: center;
    margin: ${theme.spacings.small} auto;
    padding-top: ${theme.spacings.large};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.white};

    > h1 {
      margin: 30px 0px;
      font-weight: 700;
    }
  `}

`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: ${theme.fonts.sizes.medium};
    line-height: 1.3;
    grid-column-gap: 10px;
    grid-row-gap: 2rem;
    align-items: center;
    line-height: 60px;

    .box1 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
      padding: 20px 0;

    }

    .box2 {
      grid-column-start: 1;
      grid-row-start: 4;
      grid-row-end: 3;
      border-right: solid rgb(160, 121, 24);
      border-left: solid ${theme.colors.mediumGray};
      border-radius: 30px;
      padding: 10px 0;
      margin: 0 5px;
      width: 175px;
      gap: 10px;
    }

    .box3 {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .box4 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 4;
      padding-top: 10px;

    }

    h3 {
      font-weight: 400;
    }
  `}
`;
