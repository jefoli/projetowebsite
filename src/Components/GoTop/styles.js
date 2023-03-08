import styled, { css } from 'styled-components';
export const Container = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    position: fixed;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 2;
    border-radius: 25% 25%;

    @media ${theme.media.lteMedium} {
      position: fixed;
      display: flex;
      text-align: center;
      justify-content: center;
      font-size: 30px;
      width: 3rem;
      height: 3rem;
      bottom: 1rem;
      right: 1rem;
      z-index: 6;
      border-radius: 25% 25%;
    }
  `}
`;
