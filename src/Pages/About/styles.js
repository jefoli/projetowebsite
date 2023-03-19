import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin: ${theme.spacings.small} auto;
    padding-top: ${theme.spacings.large};
    font-size: ${theme.fonts.sizes.small};

    > h1 {
      margin: 30px 0px;
    }
  `}

`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    font-size: ${theme.fonts.sizes.medium};
    line-height: 1.3;
    grid-column-gap: 10px;
    grid-row-gap: 2rem;
    align-items: center;

    .box1 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .box2 {
      grid-column-start: 1;
      grid-row-start: 4;
      grid-row-end: 3;
      border-right: solid rgb(160, 121, 24);
      border-left: solid ${theme.colors.mediumGray};
      border-radius: 30px;
      padding-top: 10px;

      > img {
        max-width: 100%;
        heigth: 150px;
        width: 150px;
        border-radius: 50px;
        padding: 5px;

      }

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
  `}
`;