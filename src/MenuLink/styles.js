import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    width: auto;
    font-family: Arial, Helvetica, sans-serif;

    .navbar-li {
      display: flex;
      position: relative;
      flex-direction: row;
    }

    .navbar-li a {
      text-decoration: none;
      color: #111;
      padding: 20px;
    }

    a::after {
      content: '';
      position: absolute;
      bottom: 2rem;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background: #c3c3c3;
      transition: all 150ms ease-in-out;
      justify-content: center;
    }

    a:hover::after {
      width: 50%;
      left: 25%;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `};
`;
