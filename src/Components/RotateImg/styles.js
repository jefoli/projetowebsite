import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
0%{
  transform: translate(0) rotate(0);
}
//comece em 0 e vá até 360deg
100%{
  transform: translate(0) rotate(360deg);
}
`;

export const Container = styled.image`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.spacings.medium};
    justify-content: center;

    > .img {
      animation: ${rotate()} 10s linear infinite;
      color: ${theme.colors.primaryColor};
      font-size: 350px;
    }
  `}
`;
