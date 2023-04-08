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
      background: #a07918;
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
      padding: 20px 0;
    }
  `}
`;
