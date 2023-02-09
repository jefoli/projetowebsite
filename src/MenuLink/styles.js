import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    width: 100%;
    padding: 0px 50px;

    > a {
      color: #a07918;
      text-decoration: none;
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
