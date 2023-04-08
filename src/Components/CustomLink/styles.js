import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;

    > a {
      text-decoration: none;
      color: ${theme.colors.black};
      padding: 0 ${theme.spacings.medium};
      font-weight: 500;
    }

    > a::after {
      content: '';
      position: absolute;
      bottom: ${theme.spacings.medium};
      left: 50%;
      width: 0%;
      height: calc(${theme.spacings.xxsmall} - 0.2rem);
      color: ${theme.colors.linkColor};
      transition: all 150ms ease-in-out;
      justify-content: center;
    }

    > a:hover::after {
      width: 50%;
      left: 25%;
      bottom: 2%;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      padding: 2rem 0;
      margin: 10px 0;
      background: ${theme.colors.backgroundGradientGray};
      border-radius: 0.4rem;
      font-size: 1.5rem;
      height: 3rem;
      justify-content: center;

      > a {
        color: white;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  `}
`;
