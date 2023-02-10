import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    width: auto;
    -webkit-box-align: center;

    .navbar-li {
      display: flex;
      position: relative;
      flex-direction: row;
      padding-left: 30px;
    }

    .navbar-li a {
      text-decoration: none;
      color: #a07918;
    }

    > :hover {
      color: ${theme.colors.mediumGray};
      transition: 150ms ease-in-out;
      border-radius: 4px;
    }

    > ::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secundaryColor};
      transition: all 300ms ease-in-out;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `};
`;
