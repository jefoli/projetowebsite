/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 2px solid #a07918;
    width: 100%;
    min-height: 80vh;
    background: #080c26;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
    justify-content: space-evenly;
    padding: 15px;


    >.section-wrapper {
      max-width: 100%;
      font-size: calc(${theme.fonts.sizes.medium} - 0.2rem);
      padding: 15px;

    }

    .styleGrid {
      display: grid;
      max-width: 100%;
      max-height: 100%;
      gap: 10px;
      grid-template-columns: repeat(4, 1fr);
      font-weight: 200;
    }

    .StyledGridItem {
      max-width: 100%;
      background-color: #cf9900;
      border-radius: ${theme.spacings.xxsmall};
      box-shadow: white 5px 5px 0px 2px;

    }

    @media ${theme.media.lteMedium} {
      .styleGrid {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        max-width: 100%;
        justify-items: center;
      }
    }
  `}
`;

export const LinkStyled = styled.span`
  ${({ theme }) => css`
  display: flex;
  padding: ${theme.spacings.xxsmall};
  font-size: 20px;
  line-height: 1.2;
  color: #003c58;
  text-decoration: underline;
  align-items: center;
  `}
`;

export const StyleIcons = styled.div`
${({ theme }) => css`
  display: flex;
  color: white;
  text-decoration: none;
  font-size: auto;
  padding: 15px;

`}
`;

export const Wrapper = styled.div`
${({ theme }) => css`
max-width: 50%;
font-size: ${theme.fonts.sizes.large};
color: #a07918;
padding: 15px;
text-transform: uppercase;
font-weight: 400;

@media ${theme.media.lteMedium} {
  max-width: 100%;
}
  `}

`;

export const BoxTextContent = styled.div`
${({ theme }) => css`
max-width: 75%;
font-size: ${theme.fonts.sizes.medium};
padding: 15px;
font-weight: 200;
line-height: 50px;

@media ${theme.media.lteMedium} {
  max-width: 100%;
  font-size: ${theme.fonts.sizes.small};
}
`}
`;

export const BoxStyled = styled.div`
${({ theme }) => css`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.spacings.xxsmall};
  line-height: 1.8;
  `}
}
`;