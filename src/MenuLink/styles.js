import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    width: auto;
    font-family: Arial, Helvetica, sans-serif;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `};
`;

export const LiContent = styled.li`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;

    > a {
      text-decoration: none;
      color: #111;
      padding: ${theme.spacings.medium};
    }

    > a::after {
      content: '';
      position: absolute;
      bottom: ${theme.spacings.medium};
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background: #c3c3c3;
      transition: all 150ms ease-in-out;
      justify-content: center;
    }

    > a:hover::after {
      width: 50%;
      left: 25%;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
