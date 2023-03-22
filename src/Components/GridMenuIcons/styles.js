/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background: #080c26;
`;

export const Container = styled.section`
  ${({ theme }) => css`
    display: block;
    border-radius: 200px 2px;
    border-bottom: 2px solid #a07918;
    width: 100%;

    .section-wrapper {
      max-width: 100%;
      font-size: calc(${theme.fonts.sizes.medium} - 0.2rem);
      line-height: 1.43;
      letter-spacing: 0.01071em;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin-bottom: calc(${theme.spacings.xhuge} + 0.6rem);
    }

    .styleGrid {
      display: grid;
      width: 100%;
      height: 100%;
      gap: 10px;
      justify-items: stretch;
      grid-template-columns: repeat(4, 1fr);
      justify-content: stretch;
      padding: ${theme.spacings.medium};
    }

    .StyledGridItem {
      margin: 0 ${theme.spacings.xsmall} ${theme.spacings.xsmall} 0;
      padding: ${theme.spacings.xxsmall};
      background-color: #a07918;
      border-radius: ${theme.spacings.xxsmall};
    }

    .styledBox {
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: ${theme.spacings.xxsmall};
      line-height: 1.8;
    }

    .link-style {
      display: flex;
      padding: ${theme.spacings.xxsmall};
      font-size: 20px;
      line-height: 1.2;
      color: #003c58;
      text-decoration: underline;
    }

    .style-icons {
      font-size: ${theme.spacings.medium};
      display: flex;
      color: #b9b9b9;
      justify-items: center;
      align-items: flex-end;
      text-decoration: none;
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
