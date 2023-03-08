import styled, { css } from 'styled-components';
export const Container = styled.div`
  > a {
    text-decoration: none;
  }
`;

export const BtnLogin = styled.button`
  ${({ theme }) => css`
    display: flex;
    font-size: calc(${theme.fonts.sizes.small} - 0.1rem);
    border: none;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    align-items: center;
    width: 100%;
    height: calc(${theme.spacings.large} - 0.2rem);
    padding: calc(${theme.spacings.medium} - 0.4rem);
    background: -webkit-linear-gradient(to left, #003c58, #111);
    background: -o-linear-gradient(to left, #003c58, #111);
    background: -moz-linear-gradient(to left, #003c58, #111);
    background: linear-gradient(to left, #003c58, #111);
    cursor: pointer;
  `}
`;
