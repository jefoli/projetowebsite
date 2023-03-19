import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    min-height: 100vh;
    margin: ${theme.spacings.small} auto;
    padding: ${theme.spacings.large};
    font-size: ${theme.fonts.sizes.medium};
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
    grid-row-gap: 1em;

  .box1 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
  }
  .box2 {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
  grid-row-gap: 3px;

  > img {
    display: flex;
    fl
    heigth: 170px;
    width: 170px;
  }
  }

  .box3 {
    display: flex;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 3;
}


.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;


  > img {
    heigth: 360px;
    width: 360px;
  }
}
}


  `}



`;
