/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: block;
    border-radius: 200px 2px;
    border-bottom: 2px solid #a07918;
    max-width: 100%;

    .section-wrapper {
      max-width: 100%;
      font-size: 2rem;
      line-height: 1.43;
      letter-spacing: 0.01071em;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin-bottom: 70px;
    }

    .styleGrid {
      display: grid;
      width: 100%;
      height: 100%;
      gap: 10px;
      justify-items: stretch;
      grid-template-columns: repeat(4, 1fr);
      justify-content: stretch;
      padding: 2.5rem;
    }

    .StyledGridItem {
      margin: 0 1rem 1rem 0;
      padding: 0.5rem;
      background-color: #a07918;
      border-radius: 4px;
    }

    .styledBox {
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5rem;
      line-height: 1.8;
    }

    .link-style {
      display: flex;
      padding: 4px;
      font-size: 20px;
      line-height: 1.2;
      color: #003c58;
      padding: 0.5rem;
      text-decoration: underline;
    }

    .style-icons {
      font-size: 25px;
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
