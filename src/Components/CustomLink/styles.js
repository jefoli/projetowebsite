import styled, { css } from 'styled-components';

export const Container = styled.div`
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
      background: ${theme.colors.mediumGray};
      transition: all 300ms ease-in-out;
      justify-content: center;
    }

    > a:hover::after {
      width: 50%;
      left: 25%;
      bottom: 2%;
      background: ${theme.colors.primaryColor};
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      padding: 2rem 0;
      margin: ${theme.spacings.xsmall} 0;
      background: ${theme.colors.backgroundGradientGray};
      border-radius: ${theme.spacings.xxsmall};
      font-size: ${theme.fonts.sizes.small};
      height: ${theme.spacings.xlarge};
      justify-content: center;

      > a {
        color: ${theme.colors.white};
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  `}
`;
