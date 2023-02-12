/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: block;

    .section-wrapper {
      font-size: 2rem;
      line-height: 1.43;
      letter-spacing: 0.01071em;
    }

    .styleGrid {
      display: grid;
      width: 100%;
      height: 100%;
      gap: 10px;
      justify-items: stretch;
      grid-template-columns: repeat(3, 1fr);
      justify-content: stretch;
      border-bottom: 2px solid #a07918;
      border-radius: 200px 1px;
    }

    .StyledGridItem {
      margin: 0 1rem 1rem 0;
      padding: 0.5rem;
      margin: 0 1rem 1rem 0;
      background: -webkit-linear-gradient(to top, #003c58, #222);
      background: -o-linear-gradient(to top, #003c58, #222);
      background: -moz-linear-gradient(to top, #003c58, #222);
      background: linear-gradient(to top, #003c58, #222);
      border-radius: 4px;
    }

    .styledBox {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    p {
    }

    .link-style {
      display: flex;
      color: #a07918;
      padding: 4px;
      font-size: 20px;
      line-height: 1.2;
      color: #adadad;
    }

    a {
      text-decoration: none;
    }

    .style-icons {
      font-size: 25px;
      display: flex;
      color: #adadad;
      justify-items: center;
      align-items: flex-end;
      text-decoration: none;
    }
  `}
`;
